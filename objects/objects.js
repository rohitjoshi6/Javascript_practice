let user = {
    name: 'John',
    age: 18,
    access: null
};

user.access = (user.age >= 18) ? true : false;
console.log(user);