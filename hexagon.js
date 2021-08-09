class Hexagon
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=50;
		this.y=30;
		this.r=40
		
		this.hexagon=Bodies.circle(this.x, this.y,this.r/2,options)
        this.hexagon=loadImage("hex.png");
		World.add(world, this.hexagon);

	}
	display()
	{
		image(this.hexagon,170,20);		
		//	var paperpos=this.body.position;		

		/*	push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			
			fill("white")
			ellipse(0,0,this.r, this.r);
			pop()*/
			
	}

}