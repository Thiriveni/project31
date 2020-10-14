class plinko {
    constructor(x,y,r) {
        var options={
        isStatic=true
        }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        this.color="white";
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var anlgle=this.body.angle;

        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
    }
}