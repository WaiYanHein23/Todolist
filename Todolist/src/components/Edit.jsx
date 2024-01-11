import React, { useState } from 'react'
import Todo from './Todo';

function Edit({editTodo,task}) {
    const [post, setPost] = useState([]);
    const [count, setCount] = useState('');

    const deleteTodo=(id)=>{
        setPost(post.filter((todo)=>todo.id !==id))
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            
            e.preventDefault();
          editTodo(post,task.id);
          setPost();
        }} className='font-primary mb-4 w-full'>
            <input className='outline-none bg-gray-300 border border-gray-500 p-3 w-[300px] mb-4 rounded ' type='text' name='name' id='name'value={count} placeholder='Update Task..' onChange={(e)=>setCount(e.target.value)} />
            <button type='submit'className='rounded rounded-circle m-2 bg-blue-200 cursor-pointer'>Update Tasks</button>
        </form>
        {
            post.map((data,indx)=><p className='p-0 m-1' key={indx}>{<Todo task={data} deleteTodo={deleteTodo} editTodo={editTodo}/>}</p>)
        }
    </div>
  )
}

export default Edit