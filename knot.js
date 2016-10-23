$(document).ready(function() {
  //mind your p's and q's
  var pVal = 2;
  var qVal = 3;
  var radius = 0.2;
  var a = 0;
  var b = 0;
  var c = 0;
  // colors array and function
  var colors = ['white' ,'black', 'silver', '#F16785', 'plum', 'wheat', 'tomato', '#c5d5cb', '#9fa8a3', '#e3e0cf', '#edd9c0', '#e62739','#fae596', '#7d4627', '#b56969', '#22264b', '#e6cf8b', '#98dafc'];
  // adds the proper attribute for color
  var readyColors = colors.map(function(color) {
    return 'color:' + color;
  });
  //previous colors array
  var previousColors = [];
  var position;
  //color randomizer
  var colorChanger = function(colorArray) {
    var colorIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[colorIndex];
  };
  // Rotation function and string
  var rotationcleanse = function(type) {
    return Math.abs(type);
  };
  var rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
  // updated knot after value knot changes, refactor
  var refreshKnot = function() {
    $('#knott').attr("geometry", "primitive:torusKnot; p:" + pVal + "; q:" + qVal + "; radiusTubular:" + radius +";");
    $('knott').attr("position", position);
    $('#knott').attr("rotation", rotation);
  };
  // updates value text tags after knot changes, refactor
  var valText = function(target, val, letter) {
    $(target).attr("text", "text:" + letter + "Val:" + val);
  };
  // updates radius text tags after radius changes, refactor
  var radiusText = function() {
    return $('.radiusText').attr("text", "text:radius: " + radius.toFixed(2));
  };
  var rotationNumber = function() {
    return $('.rotationNumber').attr("text", "text:rotation:" + rotation);
  };
  //knotElevator moves the knot up and down
  var knotElevator = function(direction) {
    var knotty = document.getElementById('knott');
    var currentPosition = knotty.getAttribute('position');
    var newY = currentPosition.y += direction;
    position = " " + currentPosition.x + " " + newY + " " + currentPosition.z + " ";
    $('#knott').attr('position', position);
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  };
  //Button actions to change p and q values
  $('#upP').on('click', function() {
    pVal++;
    refreshKnot();
    valText('.pValText', pVal, 'p');
  });
  $('#downP').on('click', function() {
    pVal--;
    refreshKnot();
    valText('.pValText', pVal, 'p');
  });
  $('#upQ').on('click', function() {
    qVal++;
    refreshKnot();
    valText('.qValText', qVal, 'q');
  });
  $('#downQ').on('click', function() {
    qVal--;
    refreshKnot();
    valText('.qValText', qVal, 'q');
  });
  //Button actions to change radius of knot
  $('#upRadius').on('click', function() {
    radius = radius + .01;
    refreshKnot();
    radiusText();
  });
  $('#downRadius').on('click', function() {
    radius = radius - .01;
    refreshKnot();
    radiusText();
  });
  //Button actions to make knot rotate, could refactor passing in the variable we want to change
  $('#leftRotation').on('click', function() {
    b -= 20;
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  });
  $('#rightRotation').on('click', function() {
    b += 20;
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  });
  $('#upRotation').on('click', function() {
    a -= 20;
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  });
  $('#downRotation').on('click', function() {
    a += 20;
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  });
  $('#upRotation').on('click', function() {
    a -= 20;
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  });
  $('#downRotation').on('click', function() {
    a += 20;
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  });
  $('#zUpRotation').on('click', function() {
    c -= 20;
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  });
  $('#zDownRotation').on('click', function() {
    c += 20;
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  });
  // change color actions
  //up randomizes the color and places those in the colors stack
  $('#upColor').on('click', function() {
    var knotEl = document.getElementById('knott');
    var curColor = knotEl.getAttribute('material');
    previousColors.push(curColor.color);
    var newColor = colorChanger(readyColors);
    $('#knott').attr('material', newColor);
    rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
    refreshKnot();
    rotationNumber();
  });
  // down pops off colors stack and go to the previous color
  $('#downColor').on('click', function() {
    if(previousColors.length) {
      var newColor = previousColors.pop();
      $('#knott').attr('material', 'color:' + newColor);
      rotation = " " + rotationcleanse(a) + " " + rotationcleanse(b) + " " + rotationcleanse(c) + " ";
      refreshKnot();
      rotationNumber();
    }
  });
  //moves the knot up and down through the knotElevator function
  $('#upKnot').on('click', function() {
    knotElevator(1);
  });
  $('#downKnot').on('click', function() {
    knotElevator(-1);
  });
  //dims down all of the buttons, yet they are still usable
  $('#dim').on('click', function() {
    // $('#upKnot').attr('material', 'color:#777DA7');
    // $('#downKnot').attr('material', 'color:#777DA7');
    $('.switchColor').attr('material', 'color:#777DA7');
    $('.switchTag').attr('material', 'color:#777DA7');
  });
  $('#lit').on('click', function() {
    location.reload();
  });
});
