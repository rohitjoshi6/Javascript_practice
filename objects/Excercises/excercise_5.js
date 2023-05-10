var data = [6,4,0,3,-2,1]

for(var i=0;i<data.length;i++){
    if(data[i]>data[i+1]){
        var x = data[i+1];
        data[i+1] = data[i];
        data[i] = x;
    }
}

console.log(data)