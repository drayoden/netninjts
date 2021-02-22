
import { Invoice } from './classes/Invoices.js'
import { Payment } from './classes/Payments.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// let docOne: HasFormatter
// let docTwo: HasFormatter

// // can create a new Invoice or Payment because both use the HasFormatter interface
// docOne = new Invoice('stormy', 'water', 2)  
// docTwo = new Payment('forrest', 'meowing', 60)

// // new array
// let docs: HasFormatter[] = []

// // push the previous objects to the new array
// docs.push(docOne)
// docs.push(docTwo)

// create two new invoices...
// const ione = new Invoice('stormy', 'food', 33)
// const itwo = new Invoice('forrest', 'food', 12)

// let invoices: Invoice[] = []  // invoices array where only Invoice objects are allowed

// // push the invoices to the array
// invoices.push(ione)
// invoices.push(itwo)

// // iterate through the invoices...
// invoices.forEach(inv => {
//     // console.log(inv.client, inv.details, inv.amount, inv.format()); // when details property was changed to 'private' this no longer works
    
//     // this will not work - trying to change the readonly client property:
//     // inv.client = 'boguscat'
    
//     console.log(inv.client, inv.amount, inv.format()); // removed the private details propert but format() still works because we are accessing details from within the class
// }); 

// iterate through the docs array...
// docs.forEach(doc => {
//     console.log(doc.format())
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement // cast 'form' to correct type
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter

    // check the type property of each log submited
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log (doc)
})
