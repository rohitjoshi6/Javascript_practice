let allowedAccess;

const age = prompt('How old are you?');

allowedAccess = (age >=18) ? true : false;

if(allowedAccess){
    alert('Access granted');
}else{
    alert('Access denied');
}