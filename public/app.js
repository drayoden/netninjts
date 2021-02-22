import { Invoice } from './classes/Invoices.js';
import { ListTempate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js';
const form = document.querySelector('.new-item-form'); // cast 'form' to correct type
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTempate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // touples from tut20, see sandbox.ts
    let values; // defines the number of args and order expected, note spread operator '...' below
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    // check the type property of each log submited
    if (type.value === 'invoice') {
        // doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
        doc = new Invoice(...values);
    }
    else {
        // doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
