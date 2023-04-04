var PopDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('popDancer');
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;
PopDancer.prototype.oldStep = function () {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
};

PopDancer.prototype.step = function () {
  this.oldStep(this.timeBetweenSteps);
  // performs a different action to the other dancers
  this.$node.toggleClass('bigger');
};
