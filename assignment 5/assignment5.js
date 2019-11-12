//make flames clicakble
//assign eventlistener to triangles

var triangle2 = document.getElementById('triangle2');
var triangle = document.getElementById('trianlge');


function makeFlame(){
  for (i = 0; i <10; i++){
  var flame = document.createElement("div");
  flame.style.left = Math.random() * 800 + "px";
  flame.style.top = Math.random() * 1500 + "px";
  flame.classList.add("triangle3");
  flame.id = i;
  var container = document.getElementById('container');
  container.appendChild(flame);
}
}
makeFlame();

function makeFlame2(){
  for (i = 0; i <10; i++){
  var flame2 = document.createElement("div");
  flame2.style.left = Math.random() * 800 + "px";
  flame2.style.top = Math.random() * 1500 + "px";
  flame2.classList.add("triangle2");
  flame2.id = i;
  var container = document.getElementById('container');
  container.appendChild(flame2);
}
}
makeFlame2();

function makeFlame3(){
  for (i = 0; i <10; i++){
  var flame3 = document.createElement("div");
  flame3.classList.add("triangle");
  flame3.style.left = Math.random() * 800 + "px";
  flame3.style.top = Math.random() * 1500 + "px";
  flame3.id = i;
  var container = document.getElementById('container');
  container.appendChild(flame3);
}
}
makeFlame3();
