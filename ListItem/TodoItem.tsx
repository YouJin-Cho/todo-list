import styles from './TodoItem.module.css';
import { BsCheck2Circle } from 'react-icons/bs';
import { IoIosRemoveCircleOutline } from 'react-icons/io';

interface TodoItemProps {
  id: number
  text: string
  isChecked: boolean
  onRemoveClick: (id:number) => void
  onToggleClick: (id:number) => void
}

const TodoItem = (props:TodoItemProps) => {
  const handleToggleClick = () => {
    props.onToggleClick(props.id)
  }

  const handleRemoveClick = () => {
    props.onRemoveClick(props.id)
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