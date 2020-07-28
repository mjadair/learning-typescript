// type is specified
const carMakers: string[] = ['ford', 'toyota', 'chevrolet']


// type is inferred
const dates = [new Date(), new Date(), new Date()]


// hover here to see the type inference. It's : string[][]
const carsByMake = [

['f150'],
['corolla'],
['camaro']

]


// type inference will also work on things like the below:
// both examples have inferred types of strings
const car = carMakers[0]
const newCar = carMakers.pop()

// The same concept applies here:
// the below complains because we're pushing the wrong type
carMakers.push(56)


// TS also helps with array methods
// it flags if we try to executy a method not available to strings on the return statement
carMakers.map((car: string): string => {
  return car.toUpperCase()
})



//! ARRAYS WITH DIFFERENT TYPES
//hover over the below and its clearly inferred that the array can have dates and strings
const importantDates = [new Date(), '2030-10-10']

// the same can be specified like the below.
const otherDates: (Date | string)[] = []
