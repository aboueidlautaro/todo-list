import { useContext, useState } from "react"
import { TodoContext } from "../../contexts"
import { addTodo } from "../../services"
import { Button, FormContainer, Input } from "./style"

function FormTodo() {
  //states
  const [title, setTitle] = useState("")
  const { todos, setTodos } = useContext(TodoContext)

  //functions
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      addTodo(title.trim(), setTodos, todos)
      setTitle("")
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Ingresa tu tarea'
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Button>Crear</Button>
    </FormContainer>
  )
}

export default FormTodo
