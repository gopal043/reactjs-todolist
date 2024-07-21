import React, { useState } from 'react'

export default function (props) {

    const {handleAddTod,todoValue,setTodoValue} = props;

    //let [todoValue, setTodoValue] = useState('');

  return (
    <div>
        <header>

            <input value ={todoValue} onChange={(e) => {
                     setTodoValue(e.target.value)
            }} placeholder='enter data...'/>
            
            <button onClick={ () => {
                   handleAddTod(todoValue)
                   setTodoValue('')
            }}>Add</button>

        </header>

    </div>
  )
}
