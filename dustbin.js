class dustbin{

    constructor(x,y)
    {
    var options={
    isStatic:true,
    //restitution:0.3,
   // friction:0.5,
   // density:1.2
    
    }
    this.x=x;
    this.y=y;
    this.height=210;
    this.width=200;

    this.image=loadImage("images/dustbin1.jpeg");

    this.bodyBase=Bodies.rectangle(this.x,this.y,this.width,this.height/10,options)
    this.bodyleft=Bodies.rectangle(this.x-this.width/2,this.y-this.width/2,this.width/10,this.height,options)
    this.bodyright=Bodies.rectangle(this.x+this.width/2,this.y-this.width/2,this.width/10,this.height,options)

    World.add(world,this.bodyBase);
    World.add(world,this.bodyleft);
    World.add(world,this.bodyright);


    }
    
    display(){
    
    var rectpos=this.bodyBase.position;
    var rectposleft=this.bodyleft.position;
    var rectposright=this.bodyright.position;

    
    push()
    translate(rectpos.x,rectpos.y);
    rectMode(CENTER)
   
    //strokeWeight(3)
    fill(255)
  //  rect(0,0,this.width,this.height);
    imageMode(CENTER)
    image(this.image,0,20,this.width,this.height);
    pop();

    
    push()
    translate(rectposleft.x,rectposleft.y);
    rectMode(CENTER)
  
  //  strokeWeight(3)
    fill(255)
   // rect(0,0,this.width/10,this.height*5);
      pop();   
    
    
   
    push()
    translate(rectposright.x,rectposright.y);
    rectMode(CENTER)
  //  strokeWeight(3)
   
    fill(255)
    pop();  
    
   }
    
    }