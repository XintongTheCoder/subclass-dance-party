$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.allDancersLineUpButton').on('click', function (event) {
    // iterate through the dancers array
    // invoke the line up function on each dancer
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });
  $('.blinkyDancersLineUpButton').on('click', function (event) {
    // iterate through the dancers array
    // invoke the line up function on each dancer
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof makeBlinkyDancer) {
        window.dancers[i].lineUp(0.25);
      }
    }
  });
  $('.popDancersLineUpButton').on('click', function (event) {
    // iterate through the dancers array
    // invoke the line up function on each dancer
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof PopDancer) {
        window.dancers[i].lineUp(0.75);
      }
    }
  });
  $('.superHeroDancersLineUpButton').on('click', function (event) {
    // iterate through the dancers array
    // invoke the line up function on each dancer
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i] instanceof SuperHeroDancer) {
        window.dancers[i].lineUp(1);
      }
    }
  });
  $('.pairUpButton').on('click', function (event) {
    // iterate through the dancers array
    // find each pair
    // update their positions so that they go next to each other
    // debugger;
    var pairs = [];
    var visited = [];
    for (var i = 0; i < window.dancers.length; i++) {
      if (visited[i]) {
        continue;
      }
      var currentDancer = window.dancers[i];
      visited[i] = true;
      let distance, closestDancer, closestDancerIndex;
      for (var j = i + 1; j < window.dancers.length; j++) {
        if (visited[j]) {
          continue;
        }
        var pair = window.dancers[j];
        // c = sqrt(a^2 + b^2)
        var a = Math.abs(currentDancer.top - pair.top);
        var b = Math.abs(currentDancer.left - pair.left);
        var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        if (!closestDancer || c < distance) {
          closestDancer = pair;
          distance = c;
          closestDancerIndex = j;
        }
      }
      pairs.push([currentDancer, closestDancer]);
      visited[closestDancerIndex] = true;
    }
    for (var i = 0; i < pairs.length; i++) {
      var currentPair = pairs[i];
      var dancer1 = currentPair[0];
      var dancer2 = currentPair[1];
      dancer2.setPosition(dancer1.top, dancer1.left - 50);
    }
    console.log(pairs);
    console.log(visited);
  });
});
