import { RiChatNewFill } from 'react-icons/ri';
import styles from './TodoInput.module.css';
import { ChangeEvent, FormEvent } from 'react';

interface TodoInputProps {
  text : string
  onTextChange: (text:string) => void 
  onSubmit: () => void 
}

const TodoInput = (props:TodoInputProps) => {

  const handleInputChanged = (e:ChangeEvent<HTMLInputElement>) => {
    props.onTextChange(e.target.value);
  }

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault(); // 새로고침 방지
    props.onSubmit();
  }

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder={'오늘의 Todo'} 
        value={props.text}
        onChange={handleInputChanged}/>
        <button type='submit' className={styles.btnEnter}><RiChatNewFill /></button>
      </form>
    </section> 
  )
}

export default TodoInput;