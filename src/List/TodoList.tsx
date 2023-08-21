import styles from "./TodoList.module.css";
import TodoItem from '../ListItem/TodoItem';
import { useTodoState } from "../Todo/TodoProvider";

const TodoList = () => {
  const todoState = useTodoState()
  // <li> 생성
  return (
    <section>
      <ol className={styles.olContainer}>
        {
          todoState.todos.map((item) => {
            return <TodoItem 
            key={item.id} 
            id={item.id} 
            text={item.text} 
            isChecked={item.isChecked}
            />;
          })
        }
      </ol>
    </section>
  )
}

export default TodoList;