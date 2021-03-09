class Dustbin{
    constructor(x, y, width, height)
    {
        var option=
        {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, option);
        this.width = width;
        this.height = height;
    
        World.add(world, this.body);
    }
    display()
    {
        rectMode(CENTER);
        fill("white");
        var posi = this.body.position;
        rect(posi.x, posi.y, this.width, this.height);
    }
}