import { TodoListItem } from "@/components"
import { useContext } from "react"
import { TodoContext } from "../../contexts"
import { ListContainer, ListItem } from "./style"

export default function ListTodo() {
  //states
  const { todos } = useContext(TodoContext)

  return (
    <ListContainer>
      {todos?.map(({ id, title, completed }) => {
        return (
          <ListItem completed={completed} key={id}>
            <TodoListItem
              isChecked={completed}
              title={title}
              completed={completed}
              id={id}
            />
          </ListItem>
        )
      })}
    </ListContainer>
  )
}
