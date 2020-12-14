class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h1');
      this.boy = createButton('Boy');
      this.girl = createButton('Girl');
      this.hideORshow = true;
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.girl.hide();
      this.boy.hide();
      this.start.hide();
    }
  
    display(){

      if(this.hideORshow){
        this.girl.hide();
        this.boy.hide();
      }
      else{
        this.girl.show();
        this.boy.show();
      }
      

      //this.girl.hide();
      //this.boy.hide();
      
      this.title.html("Balance of life");
      this.title.position(width/2+40,0);
  
      this.input.position(width/2+80,height/2);
      this.button.position(width/2+130,height/2+80);
      this.girl.position(width/2+80,height/2+150);
      this.boy.position(width/2+180,height/2+150);
  
      this.button.mousePressed(()=>{
        this.hideORshow = false;

        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        this.greeting.html("Hello " + player.name);
        this.greeting.position(width/2+80,height/2-200);
      });
  
      this.boy.mousePressed(()=>{
        player.gender = "Boy";
        this.girl.hide();
        this.boy.hide();
        gamestate = 1;
        this.greeting.hide();
      });  
      this.girl.mousePressed(()=>{
        player.gender = "Girl";
        this.girl.hide();
        this.boy.hide();
        gamestate = 1;
        this.greeting.hide();
      });
  
    }
  }
  