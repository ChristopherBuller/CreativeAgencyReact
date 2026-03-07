import React, { useState } from 'react'
import { useClientRevisions, useDeleteClientRevision } from '../../hooks/use-client-revisions'
import { ClientRevision } from '../../lib/graphql/client-revision'
import { ClientRevisionForm } from '../../components/client-revision/client-revision-form'

export default function ClientRevisionsPage() {
  const { data: items = [], isLoading } = useClientRevisions()
  const deleteItem = useDeleteClientRevision()

  const [selected, setSelected] = useState<ClientRevision | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: ClientRevision) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Client Revision?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Client Revisions…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Client revisions</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Client Revision
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Requested by name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Requested by email</th>
                        
                        
                        
                        <th className="p-2 text-left border">Feedback</th>
                        
                        
                        
                        <th className="p-2 text-left border">Priority</th>
                        
                        
                        
                        <th className="p-2 text-left border">Status</th>
                        
                        
                        
                        <th className="p-2 text-left border">Due date</th>
                        
                        
                        
                        <th className="p-2 text-left border">Resolved at</th>
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.requestedByName ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.requestedByEmail ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.feedback ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.priority ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.status ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.dueDate ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.resolvedAt ?? '')}</td>
                            
                            
                            
                            
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
        <ClientRevisionForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
