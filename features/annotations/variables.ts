//* type declaration is annotating the specific type on the variable declaration
let apples: number = 5

//* but we can generall avoid the above because TS has type inference
let goodTimes = true

//? goodTimes will have a type of Boolean because TS infers it from the declaration being on the same line as initialization

//* this changes if we have initialization on a different line to declaration

let mikesName
mikesName = 'Michael'

//? in the example above, Typescript thinks mikesName will have a type of 'any'
 
// if we try to reassign this a value that's not a string, the compiler will complain.
let speed: string = 'fast'


let hasName: boolean = true

// null is both a type and a value
let nothingMuch: null = null

//same as above
let nothing: undefined = undefined


//! Date object
let now: Date = new Date()


//! Array
// this array contains nothing but strings inside of it
let colours: string[] = ['red', 'green', 'blue']

//numbers only array
let myNumbers: number[] = [5, 6, 7, 8]

// booleans only array
let truths: boolean[] = [true, false, true]



//! Classes

class Car {

}

// the variable fiat can only refer to an instance of a Car
let fiat: Car = new Car()

//! Object literal
// here we assign types to the properites of the object
let point: { x: number, y: number} = {
  x: 10,
  y: 20
}



//! Function
// we want to use a type annnotation to describe the function
// We want to tell it what type of arguments the function is going to take
// As well as what type of values we want it to return
//? everything on the right hand side of the = is the actual function, the rest is type description of the function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}



//! This is a variable whose type cannot be inferred
// this is because we init it as false, but then require it to be a number
//* essentially, we can assign multiple potential types to a variable
// this is a bad coding example but could apply more realitically if a response could be a number of different kinds of object.
let numbers = [- 10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}