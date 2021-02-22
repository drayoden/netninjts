
import { Invoice } from './classes/Invoices.js'
import { ListTempate } from './classes/ListTemplate.js'
import { Payment } from './classes/Payments.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement // cast 'form' to correct type
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


// list template instance
const ul = document.querySelector('ul')!
const list = new ListTempate(ul)


form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter

    // check the type property of each log submited
    if(type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')

})
