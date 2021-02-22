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

// functions
let func: Function

func = () => {
    console.log('blah')
}

let add = (a: number, b: number, c?: number|string) => {  // 'c?:' -- optional param
let add = (a: number, b: number, c: number|string = 19) => {  // 'c:' -- 19 is now the default value for c

    console.log(a + b)      // returns sum
    console.log(c)          // returns undefined or 19 -- comment one of the function declarations above
}

add(5,15) // returns 15


const minus = (a: number, b: nubmer ) => {
    return a - b; 
}

let r = minus (10,6)
r = 'blah'          // wrong! r is inferred to be a number because the minus function returns a number.


// function return types
const minus = (a: number, b: nubmer ): number => {} // explicitly declares the return type of number
const minus = (a: number, b: nubmer ) => {} // has default return type of 'void'