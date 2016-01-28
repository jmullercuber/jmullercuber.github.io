// Load the same header on page
$(function(){
  $("#header").load("header.html");
});

// Helper function, getRandomIntInclusive
// Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Set a random background image
// Thanks Arosboro at http://stackoverflow.com/a/5263171
$(document.body).css('background-image', 'url("img/cover/canvas' + randNum(1, 5) + '.png")');
