class ground{
    constructor(x,y,width,height,color){
        var option = {
            isStatic : true
        }
        this.zameen = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.zameen);
        this.color  = color;
    }
    display(){
        var onter = this.zameen.position;
        rectMode(CENTER);
        fill(this.color);
        rect(onter.x,onter.y,this.width,this.height);        
    }
}