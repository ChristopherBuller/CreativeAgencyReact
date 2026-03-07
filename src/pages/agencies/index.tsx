import React, { useState } from 'react'
import { useAgencies, useDeleteAgency } from '../../hooks/use-agencies'
import { Agency } from '../../lib/graphql/agency'
import { AgencyForm } from '../../components/agency/agency-form'

export default function AgenciesPage() {
  const { data: items = [], isLoading } = useAgencies()
  const deleteItem = useDeleteAgency()

  const [selected, setSelected] = useState<Agency | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: Agency) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Agency?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Agencies…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Agencies</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Agency
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Slug</th>
                        
                        
                        
                        <th className="p-2 text-left border">Plan</th>
                        
                        
                        
                        <th className="p-2 text-left border">Timezone</th>
                        
                        
                        
                        <th className="p-2 text-left border">Website</th>
                        
                        
                        
                        <th className="p-2 text-left border">Logo url</th>
                        
                        
                        
                        <th className="p-2 text-left border">Default currency</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.name ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.slug ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.plan ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.timezone ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.website ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.logoUrl ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.defaultCurrency ?? '')}</td>
                            
                            
                            
                            
                            
                            
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
        <AgencyForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
