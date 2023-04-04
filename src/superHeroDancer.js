var SuperHeroDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('superHeroDancer');
};

SuperHeroDancer.prototype = Object.create(Dancer.prototype);
SuperHeroDancer.prototype.constructor = SuperHeroDancer;
SuperHeroDancer.prototype.oldStep = function () {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
};

SuperHeroDancer.prototype.step = function () {
  this.oldStep(this.timeBetweenSteps);
  this.$node.toggleClass('changeShape');
};
