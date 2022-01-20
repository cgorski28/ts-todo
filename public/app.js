import { ToDo } from './classes/ToDo.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const title = document.querySelector('#title');
const details = document.querySelector('#details');
const urgency = document.querySelector('#urgency');
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let todo;
    todo = new ToDo(type.value, title.value, details.value, urgency.value);
    list.render(todo, "end");
});
