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

// classes
class Invoice {
    client: string
    details: string
    amount: number

    constructor(c: string, d: string, a: number) {
        this.client = c
        this.details = d
        this.amount = a
    }

    format() {
        return `${this.client} owes $${this.amount} for ${details}`
    }
}

const ione = new Invoice('stormy', 'food', 33)
const itwo = new Invoice('forrest', 'food', 12)

let invoices: Invoice[] = []  // invoices array where only Invoice are allowed are allowed
invoices.push(ione)
invoices.push(itwo)

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
