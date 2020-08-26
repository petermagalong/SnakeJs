function Speed(){
    this.speedy = 250;
    this.accelirate = function(total){
        if(total === 7){
            this.speedy = 230;
            console.log(total);
        }
        else if(total === 8)
        {
            this.speedy = 200;
            console.log(total);
        }
        else if(total === 9)
        {
            this.speedy = 100;
            console.log(total);
        }
        else if(total === 10)
        {
            this.speedy = 80;
            console.log(total);
        }
        else if(total === 11)
        {
            this.speedy = 40;
            console.log(total);
        }
        else if(total > 11)
        {
            this.speedy = -25;
            console.log(total);
        }
    }

    this.goBack = function(total){
        
        if(total === 0){
            this.speedy = 250;
            console.log(total);
            return true
        }
        return false
    }
}