import { useTodoState } from '../Todo/TodoProvider';
import styles from './TodoHeader.module.css';

const TodoHeader = () => {
  const todoState = useTodoState() // TodoProvider.tsx에서 만들어준 useTodoState()
  const count = todoState.todos.filter((item) => !item.isChecked).length
  return (
    <header>
      <h1 className={styles.headerTitle}>
        <mark className={styles.todoCount}>{count}</mark>개만 더 하면 돼!
      </h1>
    </header>
  )
}

export default TodoHeader;