import styles from "./TodoList.module.css";
import TodoItem from '../ListItem/TodoItem';
import { TodoType } from "../Todo/todoReducer";

interface TodoListProps {
  todos: TodoType[] 
  onToggleClick: (id:number) => void
  onRemoveClick: (id:number) => void
}

const TodoList = (props:TodoListProps) => {
  return (
    <section>
      <ol className={styles.olContainer}>
        {
          props.todos.map((item) => {
            return <TodoItem 
            key={item.id} 
            id={item.id} 
            text={item.text} 
            isChecked={item.isChecked}
            onRemoveClick={props.onRemoveClick}
            onToggleClick={props.onToggleClick}
            />;
          })
        }
      </ol>
    </section>
  )
}

export default TodoList;