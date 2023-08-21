import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react"
import { TodoActionType, TodoStateType, todoReducer } from "./todoReducer";
import { TodoInputActionType, TodoInputStateType, todoInputReducer } from "./todoInputReducer";
import { loadTodos } from "./todoStorage";


interface TodoProviderProps {
  children: ReactNode
}

const TodoStateContext = createContext<TodoStateType | null>(null) // 기본값 : null
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null)
const InputTodoContext = createContext<TodoInputStateType | null>(null)
const InputTodoDispatchContext = createContext<Dispatch<TodoInputActionType> | null>(null)


const TodoProvider = (props:TodoProviderProps) => {
  // 선언한 아래 state와 Dispatch를 어디서든 사용할 수 있도록 위에 선언 후, return에서 감싸줌
  const [todoState, todoDispatch] = useReducer(todoReducer,{ todos: loadTodos() }) // 원래 기본값 : todos:[]였음
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: '' })

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export const useTodoState = () => { // use+명 => 사용자 Hook
  const value = useContext(TodoStateContext)

  if(!value) { // 기본값이 null이기 때문에, 만약 null로 들어온다면
    throw new Error('cannot find TodoState')
  }

  return value
}

export const useTodoDispatch = () => { // use+명 => 사용자 Hook
  const value = useContext(TodoDispatchContext)

  if(!value) { // 기본값이 null이기 때문에, 만약 null로 들어온다면
    throw new Error('cannot find TodoDispatch')
  }

  return value
}

export const useInputTodo = () => { // use+명 => 사용자 Hook
  const value = useContext(InputTodoContext)

  if(!value) { // 기본값이 null이기 때문에, 만약 null로 들어온다면
    throw new Error('cannot find InputTodo')
  }

  return value
}

export const useInputTodoDispatch = () => { // use+명 => 사용자 Hook
  const value = useContext(InputTodoDispatchContext)

  if(!value) { // 기본값이 null이기 때문에, 만약 null로 들어온다면
    throw new Error('cannot find InputTodoDispatch')
  }

  return value
}

export default TodoProvider;