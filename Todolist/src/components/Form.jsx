import React, { useState } from 'react'
import Todo from './Todo';
import Edit from './Edit';

function Form() {
    const [post, setPost] = useState([]);
    const [count, setCount] = useState('');
    const editTodo = (id) => {
        setPost(post.map((todo) =>
            todo.id === id ? { ...todo, isEditing:!todo.isEditing } : todo
          )
        )
      }

    const deleteTodo=(id)=>{
        setPost(post.filter((todo)=>{todo.id !==id}))
    }
    const editTask = (task, id) => {
        setPost(post.map((data) =>
            data.id === id ? { ...data, task, isEditing: !data.isEditing } : data
          )
        );
      };
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            setPost([...post,count]);
        }} className='font-primary mb-4 w-full'>
            <input className='outline-none bg-gray-300 border border-gray-500 p-3 w-[300px] mb-4 rounded ' type='text' name='name' id='name'value={count} placeholder='Type Here..' onChange={(e)=>setCount(e.target.value)} />
            <button type='submit'className='rounded rounded-circle m-2 bg-blue-200 cursor-pointer'>Add Tasks</button>
        </form>
        {[
            post.map((data,indx)=>(data.isEditing?(<Edit key={indx} editTodo={editTask} task={data}/>):(<Todo task={data} key={indx} deleteTodo={deleteTodo} editTodo={editTodo}/>) ))
        ]}
    </div>
  )
}

export default Form