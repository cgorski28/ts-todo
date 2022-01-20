//classes
export class ToDo {
    constructor(type, t, d, due) {
        this.type = type;
        this.title = t;
        this.details = d;
        this.urgency = due;
    }
    format() {
        return `${this.title} needs to be done ${this.urgency} `;
    }
}
