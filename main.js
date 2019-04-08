let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth-20;
canvas.height = innerHeight-20;

let mousepos;

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

let player;
let foods = [];

function init() {

  mousepos = new Vector(canvas.width/2, canvas.height/2);

  player = new Player(canvas.width/2, canvas.height/2, 30, randomColor());
  for (var i = 0; i <= 100; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let radius = 10;
    let color = randomColor();
    let food = new Food(x, y, radius, color);
    foods.push(food);
  }
  update();
}

function update() {
  c.clearRect(0,0,canvas.width, canvas.height);
  player.x = mousepos.x;
  player.y = mousepos.y;
  for(var i = 0; i < foods.length; i++){
    foods[i].draw(c);
  }

  player.draw(c);

  requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
  init();

  window.addEventListener('mousemove', function(event){
      //console.log(event.clientX, event.clientY);
      mousepos.x = event.clientX - canvas.offsetLeft;
      mousepos.y = event.clientY - canvas.offsetTop;
      mousepos.print();

  });

});
