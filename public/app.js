// Interfaces (like prototyping in C/C++ it seems)
// create the 'me' object based on the 'IsPerson' template/interface above. types input and returned must comply to the interface
const me = {
    name: 'stormy',
    age: 3,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
import { Invoice } from './classes/Invoices.js';
// create two new invoices...
const ione = new Invoice('stormy', 'food', 33);
const itwo = new Invoice('forrest', 'food', 12);
let invoices = []; // invoices array where only Invoice objects are allowed
// push the invoices to the array
invoices.push(ione);
invoices.push(itwo);
// iterate through the invoices...
invoices.forEach(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format()); // when details property was changed to 'private' this no longer works
    // this will not work - trying to change the readonly client property:
    // inv.client = 'boguscat'
    console.log(inv.client, inv.amount, inv.format()); // removed the private details propert but format() still works because we are accessing details from within the class
});
const form = document.querySelector('.new-item-form'); // cast 'form' to correct type
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
