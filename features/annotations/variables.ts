// annotating the specific type on the variable declaration
let apples: number = 5

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