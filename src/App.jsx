import { FormTodo, ListTodo } from "@/components"
import { useEffect, useState } from "react"

import { BsFillTrash2Fill } from "react-icons/bs"
import { TodoContext } from "./contexts"
import { deleteCompletedTodos, deleteTodos } from "./services/dispatchers"
import {
  AppContainer,
  AppContent,
  ButtonGroup,
  DeleteButton,
  Lowercase,
  Text,
  Title
} from "./style"

function App() {
  //constants
  const date = new Date()
  const day = date.getDate()
  const month = date.toLocaleDateString("es-ES", { month: "long" })
  const dayName = date.toLocaleDateString("es-ES", { weekday: "long" })

  //states
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <AppContainer>
        <AppContent>
          <Title>Tienes algo que hacer hoy? ¡Anótalo!</Title>
          <Text>
            {dayName} {day} <Lowercase>de</Lowercase> {month}
          </Text>
          <FormTodo />
          <ListTodo />
          {todos.length > 0 && (
            <ButtonGroup>
              <DeleteButton primary onClick={() => deleteTodos(setTodos)}>
                <BsFillTrash2Fill size={24} /> Eliminar todos
              </DeleteButton>
              <DeleteButton
                onClick={() => deleteCompletedTodos(todos, setTodos)}>
                <BsFillTrash2Fill size={24} /> Eliminar seleccionados
              </DeleteButton>
            </ButtonGroup>
          )}
        </AppContent>
      </AppContainer>
    </TodoContext.Provider>
  )
}

export default App
