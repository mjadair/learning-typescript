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



//! The examples above also worth with named functions 
function divide(a: number, b: number): number {
  return a/b
}

//! And also to anonymous functions assigned to a variable
const multiply = function(a:number, b:number): number {

return a*b
}


// void allows us to declare a function that gives no return
//? this type can also return null or undefined values
const logger = (message: string): void => {
  console.log(message)
}


//! The never keyword means that we're never going to continue to the end of the function
// this is because the error is thrown before the function is complete
//this is a rare use case because we usually expect a function to complete, but throw errors if there are issues
const throwError = (message: string):never => {
  throw new Error(message)
}


//! The below example shows us logging the todaysWeather object two ways
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

//? In the below example, we are logging it by passing the whole object and specifying each type
const logWeather = (forecast: {date: Date, weather: string}): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

logWeather(todaysWeather)

//? This is how we would do the above destructured - note that we don't put the types inside the destructuring
//? Instead we add the types as a separate statement
const logWeatherDestructured = ({ date, weather}: {date: Date, weather: string}): void => {
  console.log(date)
  console.log(weather)
}



