let func = () => {
    console.log('mooses')
}


// GENERICS - tut18 - reusable blocks of code with different types
const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}  // spread operator: '...x'
}

let docOne = addUID({name: 'stormy', age: 3})
console.log(docOne) // does not know about docOne.name or docOne.age without the '<T>' in the addUID function
console.log(docOne.name)



// ENUMS - tut19

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON }  //zero based list, see output 


// with interface

interface Resource<T> {  // we will define the type '<T>' when we implement
    uid: number
    resourceType: ResourceType
    data: T
}

const docThree: Resource<number> = {
    uid: 1, 
    resourceType: ResourceType.AUTHOR, 
    data: 33, 
}

const docFour: Resource<string> ={
    uid: 3,
    resourceType: ResourceType.PERSON, 
    data: 'whiskers'
}

console.log(docThree, docFour)


// touples -- python!
let arr = ['one', 28, true]
arr[0] = false
arr[1] = 'stormy'
arr = [3, 'two', 33]

let tup: [string, number, boolean] = ['one', 3, true] 
tup[0] = 'stormy'
tup[1] = false  // wrong!


