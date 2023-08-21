import { RiChatNewFill } from 'react-icons/ri';
import styles from './TodoInput.module.css';
import { ChangeEvent, FormEvent } from 'react';
import { useInputTodo, useInputTodoDispatch, useTodoDispatch } from '../Todo/TodoProvider';

const TodoInput = () => {
  const todoDispatch = useTodoDispatch()
  const inputState = useInputTodo() // context를 사용하기 위해 선언
  const inputDispatch = useInputTodoDispatch()
  
  const handleInputChanged = (e:ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: 'change',
      payload: e.target.value // payload가 string이라서 이렇게 보내도 되는 듯
    })
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault(); // 새로고침 방지
   
    if(!inputState.text) {
      return; 
    }

    todoDispatch({
      type: 'add',
      payload: {
        text: inputState.text
      }
    })

    inputDispatch({
      type: 'clear'
    })
  }

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder={'오늘의 Todo'} 
        value={inputState.text}
        onChange={handleInputChanged}/>
        <button type='submit' className={styles.btnEnter}><RiChatNewFill /></button>
      </form>
    </section> 
  )
}

export default TodoInput;