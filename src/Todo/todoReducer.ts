import { saveTodos } from "./todoStorage"

export type TodoType = {
  id : number
  text : string
  isChecked : boolean
}

export type TodoStateType = {
  todos: TodoType[] // useState에 type 선언한 것과 같음
}

export type TodoActionType = {
  // add, remove, checked, allChecked, allRemove
  type: 'add',
  payload: {
    text: string // 어떤 값을 추가하는지 
  }
} | {
  type: 'remove',
  payload: {
    id:number // 어떤 값을 삭제하는지 
  }
} | {
  type: 'checked',
  payload: {
    id:number // 어떤 값을 체크하는지
  }
} | {
  type: 'allChecked',
  payload: boolean // boolean 값이 필요
} | {
  type: 'allRemove'
}

export const todoReducer = (state:TodoStateType, action:TodoActionType) => {
  switch(action.type) {
    case 'add': {
      const newTodos = 
        state.todos.concat({ // 여기서 state.todos는 이전값?
        id: Date.now(),
        text: action.payload.text, // 여기서의 action.payload.text는 새로운값?
        isChecked: false
      })
      saveTodos(newTodos) // localstorage에도 넘겨줌

      return {
        todos: newTodos // 상태에도 업데이트
      }
    }
     
    case 'remove': {
      const newTodos = 
      state.todos.filter((item) => {
        return item.id !== action.payload.id 
      })

      saveTodos(newTodos)

      return {
        todos: newTodos
      }
    }
      
    case 'checked': {
      const newTodos = 
      state.todos.map((item) => {
        if(item.id === action.payload.id) {
          return {
            ...item, 
            isChecked: !item.isChecked
          }
        }
        return item 
      })

      saveTodos(newTodos)
      
      return {
        todos: newTodos
      }
    }
      
    case 'allChecked': {
      const newTodos =
      state.todos.map((item) => {
        return {
          ...item,
          isChecked: !action.payload // boolean값을 바로 payload로 넘겨줬으므로
        }
      })

      saveTodos(newTodos)
      
      return {
        todos: newTodos
      }
    }
      
    case 'allRemove': {
      saveTodos([])
      return {
        todos: []
      }
    }
      
  }
}