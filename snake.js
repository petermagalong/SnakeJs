function Snake(){

    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    //draw method

    // this.draw = function (){
    //     //eto yung mag draw nang box na snake 
    //     ctx.fillStyle = '#FFFFFF';
    //     //ctx.fillStyle = 'red';
    //     for(let i =0; i < this.tail.lenght; i++){
    //         ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    //     }
    //     ctx.fillRect(this.x,this.y,scale,scale);
    // }

    this.draw = function(){
        ctx.fillStyle = '#9999ff';
        for(let i=0; i < this.tail.length; i++){
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }
    this.update = function(){ 
    //update kada increment or kada kain tatawagin yung update para humaba yung snake
        for(let i=0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[i + 1];
            
        }
        this.tail[this.total - 1] = {x: this.x, y: this.y};

        this.x += this.xSpeed;
        //console.log(this.xSpeed)
        //console.log(this.x);
        this.y += this.ySpeed;
        //console.log(this.y);

        if(this.x > canvas.width){
            this.x = 0;
        }
        if(this.y > canvas.height){
            this.y = 0;
        }
        if(this.x < 0){
            //console.log(this.x)
            this.x = canvas.width;
        }
        if(this.y < 0){
            this.y = canvas.height;
        }
    }

    this.changeDirection = function(direction){
        switch(direction){
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                //console.log(this.ySpeed)
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
               // console.log(this.ySpeed)
                break;
            case 'Left':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
               // console.log(this.xSpeed)
                break;
            case 'Right':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
               // console.log(this.xSpeed)
                break;


        }
    }

    this.eat = function(fruit){

        if(this.x === fruit.x && this.y === fruit.y){
            this.total++;
            //console.log(this.total);
            return true;
        }

        return false;
    }

    this.checkCollision = function(){

        for(var i=0; i < this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                this.total = 0;
                this.tail = [];
            }
        }
    }
}