const profile = {


  name: 'Michael',
  age: 28, 
  coords: {
    lat: 0,
    lng: 15
  },

  setAge(age: number): void {
    this.age = age
  }
}

// if we want to destructure the argument, we have to give a structure for the type itself
// you have to write out the expected structure
const { age }: { age: number} = profile

// Same applies for nested objects as below
const {coords: {lat, lng} }: {coords: {lat: number, lng: number}} = profile