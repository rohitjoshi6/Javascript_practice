function multicheck(number){
    if(number<=5){
        return "Tiny"
    }else if(number<=10){
        return "Small"
    }else if(number<=15){
        return "Medium"
    }else if(number<20){
        return "Large"
    }else{
        return "Extra large"
    }
}


var answer=multicheck(30)
console.log(answer)