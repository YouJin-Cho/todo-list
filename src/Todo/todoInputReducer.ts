
export type TodoInputStateType = {
  text: string
}

export type TodoInputActionType = {
  // change, clear, ... 
  type: 'change'
  payload: string // 상태값은 계속 변경되기 때문에 '수화물'이라는 뜻의 payload에 변경값을 string으로 저장하겠다.는 의미
} | { // | : and 라는 의미
  type: 'clear'
}

export const todoInputReducer = (state:TodoInputStateType, action:TodoInputActionType) => {
  switch(action.type) {
    case 'change':
      return {
        text: action.payload // 넘어온 값 그대로 사용
      }
    case 'clear':
      return {
        text: ''
      }
  }
}