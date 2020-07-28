const oldCar = {
  name: 'micra',
  year: 1994,
  broken: true
}


const printVehicle = (vehicle: {name: string, year: number, broken: boolean}): void => {
console.log(`Name: ${vehicle.name}`)
console.log(`Year: ${vehicle.year}`)
console.log(`Broken: ${vehicle.broken}`)


}


printVehicle(oldCar)