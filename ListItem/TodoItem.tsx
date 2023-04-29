import styles from './TodoItem.module.css';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { useTodoDispatch } from '../Todo/TodoProvider';

// props를 받기 위해 typeScript 문법 작성
interface TodoItemProps {
  id: number
  text: string
  isChecked: boolean
}

const TodoItem = (props:TodoItemProps) => {
  const todoDispatch = useTodoDispatch()
  
  const handleToggleClick = () => {
    todoDispatch({
      type: 'checked',
      payload: {
        id: props.id
      }
    })
  }

  const handleRemoveClick = () => {
    todoDispatch({
      type: 'remove',
      payload: {
        id: props.id
      }
    })
  }

  return (
    <li className={styles.container}>
      <BsCheck2Circle className={[styles.checkedIcon, `${props.isChecked ? styles.CheckedCircleIcon : styles.unCheckedCircleIcon}`].join(' ')}
      onClick={handleToggleClick}/>
      <span className={props.isChecked ? styles.lineThrough : ''}>{props.text}</span>
      <IoIosRemoveCircleOutline className={styles.removeIcon} onClick={handleRemoveClick}/>
    </li>
  )
}

export default TodoItem;