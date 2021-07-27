// 2 ways of creating functions

// function declaration
function one() {
  return 'one'
}
one()

// function expression
const two = () => {
  return 2
}
const shotenedTwo = () => 2

//defining a function
const printBoo = () => {
  console.log('======')
  console.log('Boo!')
  console.log('======')
}

//invoking a function
printBoo()

//DOESN'T WORK
// printBoo()
// const printBoo = () => {
//   console.log('======')
//   console.log('Boo!')
//   console.log('======')
// }

//naming a function with a verb
const checkInputLength = (input) => {
  if (input.length > 10) {
    console.log('input length is greater than 10')
  } else {
    console.log('input length is not greater than 10')
  }
}

checkInputLength('jamesstuart')

// function that mutates
const arthurBernier = {
  age: 33,
}
const nandoTavarez = {
  age: 30,
}

const increaseAge = (person) => {
  person.age += 1
  console.log(`Horray it's your ${person.age} birthday`)
}

increaseAge(nandoTavarez)

//function with name parameter, concatonation on string, and outputs argument
const sayName = (name) => {
  console.log('Hello! My name is ' + name)
}

sayName('Merry')
sayName('Pippin')
sayName('Sam')

//argument vs parament
// const func = (PARAMETER) => {
//   // some code
// }

// func(ARGUMENT)

//arrow function with multiple parameters
const calculateArea = (num1, num2) => {
  console.log(num1 * num2)
}

calculateArea(4, 4)

//execution context interview question answer
let myNum = 2

const square = (num) => {
  return num * num
}
const ans = square(myNum)
console.log('Hello World')
//******VS******** */
// console.log('hello world again')
// const ans = square(myNum)
