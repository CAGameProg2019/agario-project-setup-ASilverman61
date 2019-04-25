class Player extends Food{

  constructor(x, y, radius, color, stroke, name, maxSpeed) {
    super(x, y, radius, color);
    this.stroke = stroke;
    this.name = name;
    this.maxSpeed = maxSpeed;

  }

  update(mousepos){
    let velocity = new Vector(mousepos.x,mousepos.y);
    velocity.subVector(this);

    let dist = velocity.magnitude();
    if (dist > 0) {
      velocity.toDirVec();

      velocity.scale(this.maxSpeed);
      if (dist < this.radius) {
        velocity.scale(dist/this.radius);
    }

  this.addVector(velocity);
    }
  }

  draw(c) {
    c.lineWidth = this.radius * .075;
    c.strokeStyle = this.stroke;
    super.draw(c);
    c.stroke();
    c.fillStyle = "#ffffff";
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.lineWidth = Math.round(this.radius *0.015);
    let fontSize = Math.round(this.radius * 0.3);
    c.font = fontSize + 'px Arial';
    c.strokeStyle = '#000000';
    c.strokeText(this.name, this.x, this.y);
    c.fillText = (this.name, this.x, this.y);
  }


}
Object.assign(Player,Food);
