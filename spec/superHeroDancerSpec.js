describe('superHeroDancer', function () {
  var superHeroDancer, clock;
  var timeBetweenSteps = 300;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    superHeroDancer = new SuperHeroDancer(50, 60, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(superHeroDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node change shape', function () {
    sinon.spy(superHeroDancer.$node, 'toggleClass');
    superHeroDancer.step();
    expect(superHeroDancer.$node.toggleClass.called).to.be.true;
  });
});
