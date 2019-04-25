class Obstacle extends Food {

  constructor(x, y, radius, color) {
    super(x, y);
  }

  draw(c) {
    c.fillStyle = this.color;
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0, Math.PI*2, false);
    c.closePath();
    c.fill();
  }

  intersects(obstacle) {
    let distance = this.dist(obstacle);
    if(distance <= this.radius + obstacle.radius) {
      return true;
    }
    return false;
  }

get mass() {
    return Math.PI * this.radius * this.radius;
}
set mass(newmass) {
  this.radius = Math.sqrt(newmass / Math.PI);
}

removeMass(m) {
  this.mass -= m;
}




}
