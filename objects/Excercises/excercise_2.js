// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

//before deletion
for(key in student){
    console.log(student[key])
}

//deletion
delete(student.rollno);

console.log("After deletion : ");

//After deletion
for(key in student){
    console.log(student[key])
}