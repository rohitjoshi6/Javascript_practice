//Write a JavaScript program to get the length of a JavaScript object.

var student = {
    name : "David",
    sclass : "VI",
    rollno : 12
}

let count =0;
for(key in student){
    count+=1;
}

console.log(count);