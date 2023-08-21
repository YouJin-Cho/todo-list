import styles from './TodoListTools.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import { BsTrash3 } from 'react-icons/bs';
import { IoIosRadioButtonOff } from 'react-icons/io';
import { useTodoDispatch, useTodoState } from '../Todo/TodoProvider';

const TodoListTools = () => {
  const todoState = useTodoState()
  const todoDispatch = useTodoDispatch()

  const isTodoAllChecked = () => {
    return todoState.todos.every((item) => item.isChecked)
  }

  const handleRemoveAll = () => {
    todoDispatch({
      type: 'allRemove'
    })
  }

  const handleToggleAll = () => {
    const isAllChecked = isTodoAllChecked()
    todoDispatch({
      type: 'allChecked',
      payload: isAllChecked // payload에 바로 boolean 값을 넘겨주기 때문에 
    })
  }

  return (
    <section className={styles.container}>
      <button className={styles.btn} onClick={handleToggleAll}>
      {
        isTodoAllChecked() ? 
        <>
          <IoIosRadioButtonOff className={styles.checkAll}/>전체 해제
        </> 
        : 
        <>
          <BsCheckCircle className={styles.checkAll}/>전체 완료
        </>
      }
      </button>
      <button className={[styles.btn, styles.removeAllBtn].join(' ')}><BsTrash3 className={styles.removeAll} onClick={handleRemoveAll}/>전체 삭제</button>
    </section>
  )
}

export default TodoListTools;