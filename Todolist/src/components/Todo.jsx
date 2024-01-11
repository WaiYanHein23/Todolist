import React from 'react'
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
function Todo({task,editTodo,deleteTodo}) {
  return (
    <div className='flex justify-between items-center bg-gray-400 text-white py-1 px-1 m-10 w-50 h-20 rounded-md mb-1 cursor-pointer'>
      <p className='font-primary'>{task}</p>
      <div className='flex items-center gap-x-4'>
      <AiFillEdit className='text-xl'onClick={()=>editTodo(task.id)} />
      <BsFillTrashFill className='text-xl' onClick={()=>deleteTodo(task.id)} />
    </div>
    </div>

   
  )
}

export default Todo