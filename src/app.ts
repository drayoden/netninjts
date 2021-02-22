// Interfaces (like prototyping in C/C++ it seems)

// a scafold or template for a future IsPerson object
interface IsPerson {
    name: string
    age: number
    speak(a: string): void
    spend(a: number): number
}

// create the 'me' object based on the 'IsPerson' template/interface above. types input and returned must comply to the interface
const me: IsPerson = {
    name: 'stormy',
    age: 3,
    speak(text: string): void {
        console.log(text);
    }, 
    spend(amount: number): number {
        console.log('I spent', amount)
        return amount
    },
}

import { Invoice } from './classes/Invoices.js'

// create two new invoices...
const ione = new Invoice('stormy', 'food', 33)
const itwo = new Invoice('forrest', 'food', 12)

let invoices: Invoice[] = []  // invoices array where only Invoice objects are allowed

// push the invoices to the array
invoices.push(ione)
invoices.push(itwo)

// iterate through the invoices...
invoices.forEach(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format()); // when details property was changed to 'private' this no longer works
    
    // this will not work - trying to change the readonly client property:
    // inv.client = 'boguscat'
    
    console.log(inv.client, inv.amount, inv.format()); // removed the private details propert but format() still works because we are accessing details from within the class
}); 

const form = document.querySelector('.new-item-form') as HTMLFormElement // cast 'form' to correct type
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log (
        type.value, 
        tofrom.value,
        details.value,
        amount.valueAsNumber, // this is normally cast to a string
    )
})
