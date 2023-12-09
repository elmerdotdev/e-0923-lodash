const numbers = [1, 2, 3, 4, 5]

const sum = _.map(numbers, num => num * 2) // Lodash
console.log(sum) // [2, 4, 6, 8, 10]

const evenNumbers = _.filter(numbers, num => num % 2 === 0)
console.log(evenNumbers) // [2, 4]

const persons = [
  { name: "Juan", age: 35, country: 'Brazil' },
  { name: "Yu", age: 45, country: 'Japan' },
  { name: "Paolo", age: 40, country: 'Philippines' },
  { name: "Miguel", age: 30, country: 'Philippines' },
  { name: "Elmer", age: 40, country: 'Philippines' },
]

const filtered = _.chain(persons).filter(person => person.age >= 35).sortBy('name').groupBy('country').value()
// console.log(filtered)

const found = _.find(persons, { age: 40 }) // first element that meets the condition
// console.log(found)

const group = _.sortBy(persons, 'age')
// console.log(group)


const fibonacci = (num) => {
  if (num <= 1) return num
  return fibonacci(num - 1) + fibonacci(num - 2)
}

const memoized = _.memoize(fibonacci)