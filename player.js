class Player extends Food{

    constructor(x, y, radius, color) {
      super(x, y, radius, color);
    }

    draw(c,playerName) {
      c.fillStyle = this.color;
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0, Math.PI*2, false);
      c.closePath();
      c.fill();

      c.fillStyle = 'black';
      c.fillText(playerName, this.x, this.y, 50);
    }

}
Object.assign(Player,Food);
