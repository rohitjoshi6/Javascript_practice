// Nullish coalescing is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// The nullish coalescing operator is written as two question marks ??.

// The result of a ?? b is:
// if a is defined, then a,
// if a is null or undefined, then b.


let first_name;
console.log(first_name ?? "John" ); // John - first_name is undefined

