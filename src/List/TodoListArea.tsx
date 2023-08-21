import { ReactNode } from "react";
import { useTodoState } from "../Todo/TodoProvider";


interface TodoListArea {
  children: ReactNode // 여기서 children은 TodoListTools, Divider, TodoList 컴포넌트
}

const TodoListArea = (props:TodoListArea) => {
  const todoState = useTodoState()
  if(todoState.todos.length < 1) { // todolist가 없을 때, 화면에 아무것도 보여주지 마라
    return null
  }

  return (
    <>
      {props.children}
    </>
  )
}

export default TodoListArea;