import React, { useState } from 'react'
import { useClients, useDeleteClient } from '../../hooks/use-clients'
import { Client } from '../../lib/graphql/client'
import { ClientForm } from '../../components/client/client-form'

export default function ClientsPage() {
  const { data: items = [], isLoading } = useClients()
  const deleteItem = useDeleteClient()

  const [selected, setSelected] = useState<Client | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: Client) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Client?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Clients…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Client
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Company name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Contact name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Contact email</th>
                        
                        
                        
                        <th className="p-2 text-left border">Contact phone</th>
                        
                        
                        
                        <th className="p-2 text-left border">Website</th>
                        
                        
                        
                        <th className="p-2 text-left border">Industry</th>
                        
                        
                        
                        <th className="p-2 text-left border">Timezone</th>
                        
                        
                        
                        <th className="p-2 text-left border">Notes</th>
                        
                        
                        
                        <th className="p-2 text-left border">Status</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.companyName ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.contactName ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.contactEmail ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.contactPhone ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.website ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.industry ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.timezone ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.notes ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.status ?? '')}</td>
                            
                            
                            
                            
                            
                            
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
        <ClientForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
