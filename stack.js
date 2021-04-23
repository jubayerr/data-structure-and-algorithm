//Last in First out = LIFO

const friends = []

friends.push('Jonas')
friends.push('Martha')
friends.push('Mikkel')
friends.push('Bartoze')

// console.log(friends);
// const getOne = friends.pop()
// console.log('Last in First out =>', getOne);
// console.log(friends);


// stack

class Stack {
    constructor() {
        this.stack = []
    }
    add(item) {
        this.stack.push(item)
    }
    remove() {
        if (this.stack.length) {
            return this.stack.pop()
        }
    }
}

const parents = new Stack()

parents.add('Hanna Kahnwald')
parents.add('Ulrich Neilsen')
parents.add('Kathrina Neilsen')
parents.add('Regina Tiedemann')

console.log(parents.stack);
const lateIn = parents.remove()
console.log('LIFO =>', lateIn);
console.log(parents.stack);