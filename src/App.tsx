import React, { useState, useReducer } from 'react';
import './App.css';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoListTools from './Tools/TodoListTools';
import Divider from './Divider/Divider';
import TodoList from './List/TodoList';
import TodoListArea from './List/TodoListArea';
import { todoInputReducer } from './Todo/todoInputReducer';
import { todoReducer } from './Todo/todoReducer';

function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer,{ todos:[] });
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: '' })

  const handleTextChange = (text:string) => { 
    inputDispatch({
      type: 'change',
      payload: text
    })
  }

  const handleSubmit = () => { 
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

  const handleClick = (id:number) => {
    todoDispatch({
      type: 'checked',
      payload: {
        id: id
      }
    })
  }

  const handleRemove = (id:number) => {
    todoDispatch({
      type: 'remove',
      payload: {
        id: id
      }
    })
  }

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: 'allRemove'
    })
  }

  const isTodoAllChecked = () => { 
    return todoState.todos.every((item) => item.isChecked)
  }

  const handleToggleAllClick = () => {
    const isAllChecked = isTodoAllChecked()
    todoDispatch({
      type: 'allChecked',
      payload: isAllChecked 
    })
  }

  return (
    <main className="App"> 
      <TodoHeader count={todoState.todos.filter((item) => !item.isChecked).length} />
      <TodoInput text={inputState.text} onTextChange={handleTextChange} onSubmit={handleSubmit}/>
      <TodoListArea todoCount={todoState.todos.length}>
        <TodoListTools onRemoveAllClick={handleRemoveAllClick} onToggleAllClick={handleToggleAllClick} isAllChecked={isTodoAllChecked()}/>
        <Divider />
        <TodoList todos={todoState.todos} onRemoveClick={handleRemove} onToggleClick={handleClick}/>
      </TodoListArea>
    </main>
  );
}

export default App;
