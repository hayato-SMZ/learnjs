describe('LearnJS', function(){
  it('can show a problem view', function(){
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  });
  it('shows the landing page view when there is no hash', function(){
    learnjs.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });
  it('presses the hash view parameter to the view function', function(){
    spyOn(learnjs, 'problemView');
    learnjs.showView('#problem-42');
    expect(learnjs.problemView).toHaveBeenCalledWith('42');
  });
  it('has a title that includes the prolem number', function(){
    expect(learnjs.problemView('1').find('.title').text()).toEqual('Problem #1');
  });

  it('shows the description', function(){
    expect(learnjs.problemView('1').find('[data-name="description"]').text()).toEqual("What is truth?");
  });

  it('shows the problem code',function(){
    expect(learnjs.problemView('1').find('[data-name="code"]').text()).toEqual("function problem() { return __; }");
  });
});
