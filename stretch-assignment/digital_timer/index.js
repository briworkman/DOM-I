// setInterval(function() {
//   alert("Hello");
// }, 3000);

var counter = 0;
var digits = select("#secondOnes");
secondOnes.html("counter");

function timeIt() {
  counter++;
  secondOnes.html(counter);
}

setInterval(secondOnes, 1000);
