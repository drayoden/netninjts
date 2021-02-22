export class ListTempate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
/*
- register a list (ul) in the constructor
- create a render method to render new 'li's ot the 'ul' container
  - accept arguments: invoice or payment, a heading, a position
  - create the html template (li, h4, p)
  - add the 'li' to the start/end of the list
*/ 
