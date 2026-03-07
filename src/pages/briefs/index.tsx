import React, { useState } from 'react'
import { useBriefs, useDeleteBrief } from '../../hooks/use-briefs'
import { Brief } from '../../lib/graphql/brief'
import { BriefForm } from '../../components/brief/brief-form'

export default function BriefsPage() {
  const { data: items = [], isLoading } = useBriefs()
  const deleteItem = useDeleteBrief()

  const [selected, setSelected] = useState<Brief | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: Brief) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Brief?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Briefs…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Briefs</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Brief
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Title</th>
                        
                        
                        
                        <th className="p-2 text-left border">Objective</th>
                        
                        
                        
                        <th className="p-2 text-left border">Target audience</th>
                        
                        
                        
                        <th className="p-2 text-left border">Key messages</th>
                        
                        
                        
                        <th className="p-2 text-left border">Tone</th>
                        
                        
                        
                        <th className="p-2 text-left border">Mandatories</th>
                        
                        
                        
                        <th className="p-2 text-left border">Restrictions</th>
                        
                        
                        
                        <th className="p-2 text-left border">Reference urls</th>
                        
                        
                        
                        <th className="p-2 text-left border">Status</th>
                        
                        
                        
                        <th className="p-2 text-left border">Approved at</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.title ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.objective ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.targetAudience ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.keyMessages ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.tone ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.mandatories ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.restrictions ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.referenceUrls ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.status ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.approvedAt ?? '')}</td>
                            
                            
                            
                            
                            
                            
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
        <BriefForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
