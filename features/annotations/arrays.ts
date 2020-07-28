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
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

