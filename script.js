function music1() {
  var a = document.getElementById("one");
  a.play();
}
function music2() {
  document.getElementById("two").play();
}
function music3() {
  document.getElementById("three").play();
}
function music4() {
  document.getElementById("four").play();
}
function music5() {
  document.getElementById("five").play();
}
function music6() {
  document.getElementById("six").play();
}
function music7() {
  document.getElementById("seven").play();
}
$(".one").keypress(function(event) {
  if (event.key == 'q') {
    $(".one").play();
  }
})