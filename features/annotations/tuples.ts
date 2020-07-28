const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}




// this formatting makes a TUPLE instead of an array
// the order of elements becomes strict which ascribes meaning to them
const pepsi: [string, boolean, number] = ['brown', true, 40]


// this creates the idea of a tuple and is a new type
// so we can reuse it for multiple drinks
type Drink = [string, boolean, number]

// the below uses our new type and creates another Tuple
const sprite: Drink = ['clear', true, 40]