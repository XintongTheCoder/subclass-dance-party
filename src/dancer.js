// Creates and returns a new dancer object that can step
// var makeDancer = function (top, left, timeBetweenSteps) {
//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function () {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function (top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left,
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

/* ==================Pseudoclassical======================= */

var Dancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};

Dancer.prototype.step = function (timeBetweenSteps) {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function (location) {
  var location = location || 0.5;
  this.setPosition(this.top, $('body').width() * location);
};
