class Player{

    constructor(){
        this.gender = null
        this.name = null
        this.Sprite = createSprite(500,500,43,49);
        this.ImageBoy = loadImage("Images/boy.png");
        this.ImageGirl = loadImage("Images/Girl.png");
    }
    display(){
        if(this.gender == "Boy"){
            this.Sprite.addImage(this.ImageBoy);
            this.Sprite.scale = 7/10;
        }

        else if(this.gender == "Girl"){
            this.Sprite.addImage(this.ImageGirl);
            this.Sprite.scale = 7/10;
        }
        
        this.Sprite.x = mouseX;
        this.Sprite.y = mouseY;

    }




}