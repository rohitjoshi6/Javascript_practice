// Arrow Functions are a new way to write functions in JavaScript. They are a shorter syntax for writing functions and do not have their own this, arguments, super, or new.target. Arrow functions are always anonymous. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

// ES5
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
    ];

console.log(materials.map(function(material) {
    return material.length;
}));

// ES6
console.log(materials.map((material) => {
    return material.length;
}
));

// ES6 concise
console.log(materials.map(material => material.length));

