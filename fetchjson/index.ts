import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1/'

//* interfaces in Typescript are used to define the structure of an Object
interface Todo {
  id: number
  title: string
  completed: boolean
}


axios.get(url)
.then((response) => {

  //* uses the interface to check against the keys
  //* The TS compiler will throw errors before JS run. 
  const todo = response.data as Todo

//? If we log todo here it shows the userID property, even though it's not referenced in the interface
//!   console.log(todo)
//? However, if we try to assign it and log that, the compiler will throw an error because the property doesn't exist
//! const userID = todo.userId





const id = todo.id
const title = todo.title
const completed = todo.completed

logToDo(id, title, completed)
})

//* Here we add types to our variables, the compiler will warn us before runtime if the type fails
const logToDo = (id: number, title: string, completed: boolean) => {

  console.log(`
  The Todo with IT:${id} 
  Has a title of: ${title}
  Is it finished? ${completed}
  `)
}




