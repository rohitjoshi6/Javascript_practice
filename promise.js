function practice(number){
    console.log("The number is, "+ number);
}

const mypromise= new Promise(function(myResolve, myReject){
    let x="10";


    if(x=="10"){
        myResolve(x);
    }else{
        myResolve("Error")
    }
});

mypromise.then(
    function(value){practice(value);},
    function(error){practice(error);}
)

