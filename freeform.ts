// not used, just some stuff unique to TS -- vs code will point out the errors.

// explicit type
let char: string;
let age: number;
let hasFuzz: boolean;

// arrays
let ar1: string[]  // has to be an array of strings, not initialized
let ar2: number[]  // has to be an array of numbers, not initialized 
let ar3: string[] = [] // inititalized array of strings, can now use 'push'

// union types
let mixed: (string|number)[] = [] // mixed array of strings and numbers
mixed.push(3)
mixed.push('mooses')
mixed.push(true)  // wrong! boolean is not included in the declaration above

// objects
let catOne: object
catOne = {name: 'stormy', age: 3} // works!
catOne = [] // works, an array is an object

let catTwo: {    // explicitly defines the types
    name: string,
    age: number,
}


// anytype -- be careful when using this, could introduce errors, defeats the purpose of TS
let age2: any

age2 = 25       // works!
age2 = '25'     // works!

let catAry: any[] = []


