// First in First out

class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(item) {
        this.queue.push(item)
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift()
        }
    }
}

const person = new Queue()

person.enqueue('Ned Stark')
person.enqueue('Robert Baratheon')
person.enqueue('Jaime Lannister')
person.enqueue('Daenerys Targaryen')

console.log(person.queue);
const firstLeft = person.dequeue()
console.log('FIFO =>', firstLeft);
console.log(person.queue);


