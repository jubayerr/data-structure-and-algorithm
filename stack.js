//Last in First out = LIFO

const friends = []

friends.push('Jonas')
friends.push('Martha')
friends.push('Mikkel')
friends.push('Bartoze')

console.log(friends);
const getOne = friends.pop()
console.log('Last in First out =>', getOne);
console.log(friends);