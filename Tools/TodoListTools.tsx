import styles from './TodoListTools.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import { BsTrash3 } from 'react-icons/bs';
import { IoIosRadioButtonOff } from 'react-icons/io';

interface TodoListToolProps {
  onRemoveAllClick: () => void
  onToggleAllClick: () => void
  isAllChecked:boolean
}

const TodoListTools = (props:TodoListToolProps) => {

  const handleRemoveAll = () => {
    props.onRemoveAllClick()
  }

  const handleToggleAll = () => {
    props.onToggleAllClick()
  }

  return (
    <section className={styles.container}>
      <button className={styles.btn} onClick={handleToggleAll}>
      {
        props.isAllChecked ? 
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