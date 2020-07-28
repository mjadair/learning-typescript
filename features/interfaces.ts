// can create an interface to create a new type
interface Vehicle {
  name: string,
  year: number,
  broken: boolean
  summary(): string
}




const oldCar = {
  name: 'micra',
  year: 1994,
  broken: true,
  summary(): string {
    return `This car is a ${this.name}, it is from ${this.year}`
  }
}

//? could do this
/*
const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
console.log(`Name: ${vehicle.name}`)
console.log(`Year: ${vehicle.year}`)
console.log(`Broken: ${vehicle.broken}`)
}


printVehicle(oldCar)
*/

//? but better to use the interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary())
  }
  
  
  printVehicle(oldCar)