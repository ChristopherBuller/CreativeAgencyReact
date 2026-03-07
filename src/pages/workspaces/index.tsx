import React, { useState } from 'react'
import { useWorkspaces, useDeleteWorkspace } from '../../hooks/use-workspaces'
import { Workspace } from '../../lib/graphql/workspace'
import { WorkspaceForm } from '../../components/workspace/workspace-form'

export default function WorkspacesPage() {
  const { data: items = [], isLoading } = useWorkspaces()
  const deleteItem = useDeleteWorkspace()

  const [selected, setSelected] = useState<Workspace | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: Workspace) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Workspace?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Workspaces…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Workspaces</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Workspace
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Description</th>
                        
                        
                        
                        <th className="p-2 text-left border">Color</th>
                        
                        
                        
                        <th className="p-2 text-left border">Icon</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.name ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.description ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.color ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.icon ?? '')}</td>
                            
                            
                            
                            
                            
                            
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
        <WorkspaceForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
