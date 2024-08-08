import { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Поход к врачу',
      completed: true,
    },
    {
      id: 2,
      text: 'Собеседование',
      completed: false,
    },
  ])

  const [text, setText] = useState('')

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTasks([...tasks, newTask])
    setText('')
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed }
        } else {
          return task
        }
      }),
    )
  }

  return (
    <div className='todo-list'>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
      ))}
      <input className='todo-input' value={text} onChange={e => setText(e.target.value)} />
      <button className='todo-btn' onClick={() => addTask(text)}>Добавить</button>
    </div>
  )
}

export default TodoList
