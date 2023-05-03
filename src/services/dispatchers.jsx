import { v4 as uuidv4 } from "uuid"

export const addTodo = (title, setTodos, todos) => {
  const newTodo = {
    id: `${Date.now()}-${uuidv4()}}`,
    title,
    completed: false
  }
  setTodos([...todos, newTodo])
}

export const completeTodo = (id, setTodos, todos) => {
  const newTodos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed }
    }
    return todo
  })
  setTodos(newTodos)
}

export const deleteCompletedTodos = (todos, setTodos) => {
  const newTodos = todos.filter((todo) => !todo.completed)
  setTodos(newTodos)
}

export const deleteTodos = (setTodos) => {
  setTodos([])
}
