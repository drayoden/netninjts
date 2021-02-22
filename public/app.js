"use strict";
// ----- TEST
//const anchor = document.querySelector('a')!
//console.log(anchor.href) // TS throws error because href could be null
// could test first...
// if(anchor) {
//     console.log(anchor.href)
// }
// OR could use the '!' on the querySelector above -- as a dev, you know it will not be null
// const form = document.querySelector('form')!  // hover over 'form' => HTMLFormElement;
// const form = document.querySelector('.new-item-form')  // hover over 'form' => Element
// ----- END TEST
// classes - tut 12
class Invoice {
    // readonly client: string;         // properties are 'public' by default
    // private details: string;
    // amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    // tut13 - shortcut way of defining properties and constructor all at once - only works with explicit types; 'readonly', 'private', 'public', etc.
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
// crete two new invoices...
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
