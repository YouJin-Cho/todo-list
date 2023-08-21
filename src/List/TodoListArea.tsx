import { ReactNode } from "react";


interface TodoListArea {
  children: ReactNode
  todoCount: number
}

const TodoListArea = (props:TodoListArea) => {
  if(props.todoCount < 1) {
    return null
  }

  return (
    <>
      {props.children}
    </>
  )
}

export default TodoListArea;