class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png")
    this.trajectctory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y];
      this .trajectctory.push(position)
    }
   

    for(var i=0;i<this.trajectctory.length;i++){
    image(this.smokeImage,this.trajectctory[i][0],this.trajectctory[i][1])
    }
  }
}
