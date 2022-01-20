import { HasFormatter} from '../interfaces/HasFormatter.js'

//classes
export class ToDo implements HasFormatter {

    type: string;
    title: string;
    details: string;
    urgency: string;

    constructor(type: string, t: string, d: string, due: string){
        this.type = type;
        this.title = t;
        this.details = d;
        this.urgency = due
    }

    format() {
        return `${this.title} needs to be done ${this.urgency} `
    }
}