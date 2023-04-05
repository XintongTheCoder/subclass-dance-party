describe('popDancer', function () {
  var popDancer, clock;
  var timeBetweenSteps = 200;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    popDancer = new PopDancer(30, 40, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node bigger', function () {
    sinon.spy(popDancer.$node, 'toggleClass');
    popDancer.step();
    expect(popDancer.$node.toggleClass.called).to.be.true;
  });
});
