let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth-20;
canvas.height = innerHeight-20;

playerName = prompt("Enter Name: ");

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

function generateFood() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let radius = 10;
  let color = randomColor();
  let food = new Food(x, y, radius, color);
  foods.push(food);
}

const FOOD_COUNT = 100;

let player;
let foods = [];

function init() {

  mousepos = new Vector(canvas.width/2, canvas.height/2);
s
  player = new Player(canvas.width/2, canvas.height/2, 30, randomColor());
  for (var i = 0; i <= FOOD_COUNT; i++) {
    generateFood();
  }

  update();
}

function update() {
  c.clearRect(0,0,canvas.width, canvas.height);

  player.x = mousepos.x;
  player.y = mousepos.y;

  for(var i = 0; i < foods.length; i++){
    let eaten = player.intersects(foods[i]);
    if(!eaten) {
      foods[i].draw(c);
    } else {
      player.addMass(foods[i].mass);
      foods.splice(i,1);
      i--;
    }
  }

while (foods.length < FOOD_COUNT) {
  generateFood();
}

  player.draw(c,playerName);


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
