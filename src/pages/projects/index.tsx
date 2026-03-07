import React, { useState } from 'react'
import { useProjects, useDeleteProject } from '../../hooks/use-projects'
import { Project } from '../../lib/graphql/project'
import { ProjectForm } from '../../components/project/project-form'

export default function ProjectsPage() {
  const { data: items = [], isLoading } = useProjects()
  const deleteItem = useDeleteProject()

  const [selected, setSelected] = useState<Project | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: Project) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Project?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Projects…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Project
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Description</th>
                        
                        
                        
                        <th className="p-2 text-left border">Status</th>
                        
                        
                        
                        <th className="p-2 text-left border">Start date</th>
                        
                        
                        
                        <th className="p-2 text-left border">Due date</th>
                        
                        
                        
                        <th className="p-2 text-left border">Budget</th>
                        
                        
                        
                        <th className="p-2 text-left border">Currency</th>
                        
                        
                        
                        <th className="p-2 text-left border">Is archived</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.name ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.description ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.status ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.startDate ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.dueDate ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.budget ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.currency ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.isArchived ?? '')}</td>
                            
                            
                            
                            
                            
                            
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
        <ProjectForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
