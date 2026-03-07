import React, { useState } from 'react'
import { useDeliverables, useDeleteDeliverable } from '../../hooks/use-deliverables'
import { Deliverable } from '../../lib/graphql/deliverable'
import { DeliverableForm } from '../../components/deliverable/deliverable-form'

export default function DeliverablesPage() {
  const { data: items = [], isLoading } = useDeliverables()
  const deleteItem = useDeleteDeliverable()

  const [selected, setSelected] = useState<Deliverable | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: Deliverable) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Deliverable?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Deliverables…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Deliverables</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Deliverable
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Deliverable type</th>
                        
                        
                        
                        <th className="p-2 text-left border">Format</th>
                        
                        
                        
                        <th className="p-2 text-left border">Dimensions</th>
                        
                        
                        
                        <th className="p-2 text-left border">Notes</th>
                        
                        
                        
                        <th className="p-2 text-left border">Status</th>
                        
                        
                        
                        <th className="p-2 text-left border">Due date</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.name ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.deliverableType ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.format ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.dimensions ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.notes ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.status ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.dueDate ?? '')}</td>
                            
                            
                            
                            
                            
                            
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
        <DeliverableForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
