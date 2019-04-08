let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink"
];

function randomColor() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}


let foods = [];

function init() {
  for (var i = 0; i <= 100; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = randomColor();
    let food = new Food(x, y, 10, color);
    foods.push(food);
  }
  update();
}

function update() {
  c.clearRect(0,0,canvas.width, canvas.height);
  for(var i = 0; i < foods.length; i++){
    foods[i].draw(c);
  }
  requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
  init();


});
