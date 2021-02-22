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
