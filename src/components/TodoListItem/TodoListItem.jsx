import { ListContent } from "@/components"
import { Fragment, useContext } from "react"
import { TodoContext } from "../../contexts"
import { completeTodo } from "../../services"
import { FiSquareCustom, IoMdCheckboxCustom } from "./style"

export default function TodoListItem({ id, title, completed }) {
  //constants
  const ICON_SIZE = 24

  //states
  const { todos, setTodos } = useContext(TodoContext)
  //functions
  const handleCheck = (id) => {
    if (completed) return
    completeTodo(id, setTodos, todos)
  }

  return (
    <Fragment>
      {completed ? (
        <IoMdCheckboxCustom onClick={() => handleCheck(id)} size={ICON_SIZE} />
      ) : (
        <FiSquareCustom onClick={() => handleCheck(id)} size={ICON_SIZE - 2} />
      )}
      <ListContent completed={completed} title={title} />
    </Fragment>
  )
}
