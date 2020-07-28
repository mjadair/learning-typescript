class Vehicle {
 
protected drive(): void {
  console.log('broom broom!')
}

public honk(): void {
  console.log('beep!')
}
}



class Car extends Vehicle {

   drive(): void {
    console.log('vroooooooooom!')

  }


  startDrivingProcess(): void {
    this.drive()
  }

  
}


const car = new Car()

car.startDrivingProcess()
car.honk()