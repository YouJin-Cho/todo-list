import { TodoType } from "./todoReducer";

export const saveTodos = (todos:TodoType[]) => { // TodoType을 []배열 형식으로 사용하겠다
  localStorage.setItem('todos', JSON.stringify(todos))
}

export const loadTodos = () => {
  const todoJson = localStorage.getItem('todos')

  if(!todoJson) { // 만약 값이 없다면
    return []
  }

  try{ // 안전하게 try-catch로 감싸줌
    return JSON.parse(todoJson)
  } catch (e) {
    console.error(e)
    return []
  }
}