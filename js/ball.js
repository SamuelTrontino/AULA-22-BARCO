class Ball{
    constructor(x,y){
        var options = {
            isStatic: true
          }
          this.raio = 30
          this.body = Bodies.circle(x,y,this.raio,options)
          this.image = loadImage("assets/cannonball.png")
          this.caminho = []
          World.add(world,this.body)
    }
    show(){
        var pos = this.body.position
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.raio,this.raio)
        pop()

        if(this.body.velocity.x>0&&pos.x>10){
            var position = [pos.x,pos.y]
            this.caminho.push(position)   
        }
        for(var i=0;i<this.caminho.length;i++){
            image(this.image,this.caminho[i][0],this.caminho[i][1],5,5)
        }

    }
    atirar(){
        Matter.Body.setStatic(this.body,false)
        var newangle = cannon.angle - 28
        newangle = newangle*(3.14/180)
        var velocity = p5.Vector.fromAngle(newangle)
        velocity.mult(0.5)
        Matter.Body.setVelocity(this.body,{
            x:velocity.x*(180/3.14),
            y:velocity.y*(180/3.14),
        })
      }
      remove(indice){
        Matter.Body.setVelocity(this.body,{x:0,y:0})

          
        setTimeout(()=>{
            Matter.World.remove(world,this.body)
            delete ball[indice]
        },1000)
    }   
}