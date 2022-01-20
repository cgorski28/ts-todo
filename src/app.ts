import { ToDo } from './classes/ToDo.js'
import {ListTemplate} from './classes/ListTemplate.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement
const title = document.querySelector('#title') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const urgency = document.querySelector('#urgency') as HTMLInputElement

const ul  = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    
    let todo: ToDo;
    todo = new ToDo(type.value, title.value, details.value, urgency.value)

    list.render(todo, "end")
})
