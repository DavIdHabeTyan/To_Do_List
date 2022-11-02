import React, {useState} from 'react';


const Todo = (props) => {
   const {title, id, isCompleted, handleEditTodo, handleCheckedTodo, handleDeleteTodo, todo} = props;

   const [isClickedTitle, setIsClickedTitle] = useState(false)

   const [editTodo, setEditTodo] = useState(title);
   const [isEdit, setIsEdit] = useState(false);

   function handleIsEdite() {
      setIsEdit(!isEdit)
   }

   function handleEditedTodo() {
      handleEditTodo(id, editTodo)
      handleIsEdite()
   }

   const handleChangeChecked = (e) => {
      handleCheckedTodo(id, {...todo, isCompleted: e.target.checked})
   }

   return (
      <div className={"test"}>
         <div>
            <input
               type="checkbox"
               value={isCompleted}
               onClick={handleChangeChecked}
            />
         </div>
         <div>
            {!isEdit ?
               <div className={"todo"}>
                  <div className={"todo_title"}>
                     <div>
                        <span className={isClickedTitle ? "titleStyle" : ""}
                              onClick={() => setIsClickedTitle(!isClickedTitle)}>{title}
                        </span>
                     </div>
                  </div>
                  <div className={"buttonEdit_delete"}>
                     <button className={"buttonClick"} onClick={handleIsEdite}>edit</button>
                     <button className={"deleteButtonClick"} onClick={() => handleDeleteTodo(id)}>delete</button>
                  </div>
               </div>

               : <div className={"edite_input"}>
                  <div>
                     <input
                        type="text"
                        value={editTodo}
                        onChange={e => setEditTodo(e.target.value)}
                     />
                  </div>
                  <div className={"button"}>
                     <button className={"buttonClick"} onClick={handleEditedTodo}>Done</button>
                     <button className={"buttonClick"} onClick={handleIsEdite}>cancel</button>
                  </div>
               </div>
            }
         </div>
      </div>
   );
};

export default Todo;