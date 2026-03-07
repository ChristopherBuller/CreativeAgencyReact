import React, { useState } from 'react'
import { useTasks, useDeleteTask } from '../../hooks/use-tasks'
import { Task } from '../../lib/graphql/task'
import { TaskForm } from '../../components/task/task-form'

export default function TasksPage() {
  const { data: items = [], isLoading } = useTasks()
  const deleteItem = useDeleteTask()

  const [selected, setSelected] = useState<Task | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: Task) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Task?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Tasks…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Task
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Title</th>
                        
                        
                        
                        <th className="p-2 text-left border">Description</th>
                        
                        
                        
                        <th className="p-2 text-left border">Status</th>
                        
                        
                        
                        <th className="p-2 text-left border">Priority</th>
                        
                        
                        
                        <th className="p-2 text-left border">Start date</th>
                        
                        
                        
                        <th className="p-2 text-left border">Due date</th>
                        
                        
                        
                        <th className="p-2 text-left border">Estimated hours</th>
                        
                        
                        
                        <th className="p-2 text-left border">Completed at</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.title ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.description ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.status ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.priority ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.startDate ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.dueDate ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.estimatedHours ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.completedAt ?? '')}</td>
                            
                            
                            
                            
                            
                            
              <td className="p-2 border space-x-2">
                <button onClick={() => handleEdit(item)} className="text-blue-600 hover:underline">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <TaskForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
