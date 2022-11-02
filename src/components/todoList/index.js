import React, { useState } from 'react';
import Todo from "../todo";

import AddIcon from "./../../assets/plus.svg"

const TodoList = () => {
   const [inputValue, setInputValue] = useState("");
   const [todoData, setTodoData] = useState([]);

   const initialState = {
      title: inputValue,
      id: Math.random(),
      isDone: false,
      isCompleted: false,
   }

   function handleAddTodo() {
      setTodoData(todoData => [...todoData, initialState])
      setInputValue("")
   }

   function handleEditTodo(id, newTitle) {
      setTodoData(todoData.map(elem => {
         if (elem.id === id) {
            elem.title = newTitle
         }
         return elem
      }))
   }

   const  handleCheckedTodo = (id, newFlag)  => {
      setTodoData(todoData.map(elem => {
         if (elem.id === id) {
            elem.isCompleted = newFlag
         }
         return elem
      }))
   }

   function handleClearIsComplete() {
      setTodoData(todoData => todoData.filter(elem => !elem.isCompleted))
   }

   function handleDeleteTodo (id) {
      setTodoData(todoData => todoData.filter(elem => elem.id !== id))
   }

   const handleInputValue = (e)  =>{
      setInputValue(e.target.value)
   }

   return (
      <div>
         <h1>To Do List</h1>

         <div className={"header"}>
            <div  className={"input_Todo"}>
            <input
               id={ "message" }
               type="text"
               value={inputValue}
               placeholder={"Write todo"}
               onChange={handleInputValue}
            />
            </div>
            <div className={"buttonAddTodo"} >
            <button className={"buttonAddTodoDef"} disabled={!inputValue} onClick={handleAddTodo} > <img     className={"icon"} src={AddIcon} alt=""/> </button>
            {/*<button className={"addButtonClick"}  disabled={!inputValue} onClick={handleAddTodo}>Add Todo</button>*/}
            </div>
         </div>
         <div className={"todos"}>
            {todoData.map(todo => <Todo
               setInputValue={setInputValue}
               key={todo.id}
               handleEditTodo={handleEditTodo}
               handleCheckedTodo={handleCheckedTodo}
               handleDeleteTodo={handleDeleteTodo}
               todo={todo}
               {...todo}
            />)}

         </div>
         <button className={"clear_Button_Click"}  onClick={handleClearIsComplete} >Clear Complete</button>
      </div>
   );
};

export default TodoList;