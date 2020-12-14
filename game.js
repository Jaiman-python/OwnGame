class Game{
    constructor(){
        
    }


start(){
    
    form = new Form(); 
    workCard = new Work();

    familyCard = createSprite(200, 300);
    familyCard.addImage(familyImg);

    lesiureCard = createSprite(1000,300);
    lesiureCard.addImage(lesiureImg);
    player = new Player();
}


}