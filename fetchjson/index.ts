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
  const todo = response.data as Todo
  
const ID = todo.id
const title = todo.title
const finished = todo.completed


console.log(`
The Todo with IT:${ID} 
Has a title of: ${title}
Is it finished? ${finished}
`)

})




