const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const scale = 10;


const rows = canvas.height / scale; //canvas.height 300 divide 10 
const columns = canvas.width / scale; //canvas.width divide 10 

var snake;


(function setup(){ // function setup void
    snake = new Snake();
    fruit = new Fruit();
    speedTracker = new Speed();
    fruit.pickLocation();

    window.setInterval(()=>{
        
        ctx.clearRect(0,0,canvas.width,canvas.height);//mag bubura
        fruit.draw();
        snake.update(); //eto yung mag paparami sa draw 
        snake.draw();

        if(snake.eat(fruit)){
            fruit.pickLocation();
            speedTracker.accelirate(snake.total);
            console.log(speedTracker.speedy);
        }
        snake.checkCollision();
        if(speedTracker.goBack(snake.total));
        
    }, speedTracker.speedy);
    
    
}());

window.addEventListener('keydown',((evt)=>{

   // console.log(evt);

   const direction = evt.key.replace("Arrow","");
   console.log(direction);
   snake.changeDirection(direction);
}));





/*
snake - snake 

fruit - yung kakainin nang ating snake 

main - dito lahat i intanctiate 

*/