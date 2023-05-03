import { Text } from "./style"

function ListContent({ completed, title }) {
  return <Text completed={completed}>{title}</Text>
}

export default ListContent
