export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = item.type + ' - ' + item.title;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.details;
        li.append(p);
        pos === 'start' ? this.container.prepend(li) : this.container.append(li);
    }
}
