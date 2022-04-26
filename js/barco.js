class Barco{
    constructor(x,y,l,a,barcoY,barcomovimento){
        this.body = Bodies.rectangle(x,y,l,a)
        this.l = l
        this.a = a 
        this.barcoY = barcoY
        this.animation = barcomovimento
        this.speed = 0.05
        //this.image = loadImage("assets/barco.png")
        World.add(world,this.body)

    }
    show(){
        var pos = this.body.position
        var angle = this.body.angle
        var index = floor(this.speed%this.animation.length)
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.animation[index],0,this.barcoY,this.l,this.a)
        pop()

        

    }
    remove(indice){
        setTimeout(()=>{
            Matter.World.remove(world,barco[indice].body)
            delete barco[indice]
        },2000)
    }
    animate(){
        //this.speed = this.speed +0.05
        this.speed +=0.05
    }   
}