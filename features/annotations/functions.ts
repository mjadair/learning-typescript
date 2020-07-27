// we init the function and put in the types of values in the arguments passed to it
// the number value that follows the colon specifies the type that the function returns
const add = (a: number, b: number): number => {

//TS reads this line and can tell we're returning a number as promised.
//it would complain if we tried to return a different type, like a string.
  return a + b
}

/*! Type inference applies to functions, we don't have to specify a return type
in the example above it can tell we're returning a number. But it's best practice to 
specify a return type because otherwise TS compiler won't catch errors (like missing a return statement)
which would ultimately change the inferred return type. 
*/