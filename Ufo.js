class Ufo{
    constructor(width, height){
        this.x = random(0, 500);
        this.y = random(0, 500);
        this.width = width;
        this.height = height;
        this.image = loadImage("assets/UFO.png");
  
    }
  
    display(){
        image(this.image, this.x, this.y, this.width, this.height );
    }
  }