import React, { useState } from 'react';
import './App.css';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoListTools from './Tools/TodoListTools';
import Divider from './Divider/Divider';
import TodoList from './List/TodoList';
import TodoListArea from './List/TodoListArea';

export type TodoType = {
  id : number
  text : string
  isChecked : boolean
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text:string) => { // input에 작성한 값
    setText(text)
  }

  const handleSubmit = () => { 
    if(!text) { // input 빈 값일 때
      return; 
    }
    const newTodos = todos.concat({ 
      id: Date.now(),
      text: text,
      isChecked: false
    })
    setTodos(newTodos)
    setText('') // input창 초기화
  }

  const handleClick = (id:number) => {
    const newTodos = todos.map((item) => {
      if(item.id === id) {
        return {
          ...item, // 기존 todolist
          isChecked: !item.isChecked
        }
      }
      return item 
    })
    setTodos(newTodos)
  }

  const handleRemove = (id:number) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id // 선택한 id를 제외한 나머지 리스트
    })
    setTodos(newTodos)
  }

  const handleRemoveAllClick = () => {
    setTodos([]) 
  }

  const isTodoAllChecked = () => {
    return todos.every((item) => item.isChecked)
  }

  const handleToggleAllClick = () => {
    const isAllChecked = isTodoAllChecked()
    console.log(isAllChecked)
    const newTodos = todos.map((item) => {
      return {
        ...item,
        isChecked: !isAllChecked
      }
    })
    setTodos(newTodos)
  }

  return (
    <main className="App"> 
      <TodoHeader count={todos.filter((item) => !item.isChecked).length} />
      <TodoInput text={text} onTextChange={handleTextChange} onSubmit={handleSubmit}/>
      <TodoListArea todoCount={todos.length}>
        <TodoListTools onRemoveAllClick={handleRemoveAllClick} onToggleAllClick={handleToggleAllClick} isAllChecked={isTodoAllChecked()}/>
        <Divider />
        <TodoList todos={todos} onRemoveClick={handleRemove} onToggleClick={handleClick}/>
      </TodoListArea>
    </main>
  );
}

export default App;
