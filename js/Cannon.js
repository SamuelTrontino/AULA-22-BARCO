class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.base = loadImage("assets/cannonBase.png")
    this.cannon = loadImage("assets/canon.png")
  }
  show(){
    //base  
    image(this.base,70,20,200,200)
    //canhão
    push()
    translate(this.x,this.y)
    rotate(this.angle)
    imageMode(CENTER)
    image(this.cannon,0,0,this.width,this.height)
    pop()
    if(keyIsDown( RIGHT_ARROW)&&this.angle<80){
      this.angle = this.angle + 1

    }
    if(keyIsDown( LEFT_ARROW)&&this.angle>-30){
      this.angle = this.angle - 1
    }

  }

}
