import React, { useState } from 'react'
import { useCampaigns, useDeleteCampaign } from '../../hooks/use-campaigns'
import { Campaign } from '../../lib/graphql/campaign'
import { CampaignForm } from '../../components/campaign/campaign-form'

export default function CampaignsPage() {
  const { data: items = [], isLoading } = useCampaigns()
  const deleteItem = useDeleteCampaign()

  const [selected, setSelected] = useState<Campaign | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: Campaign) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Campaign?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Campaigns…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Campaigns</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Campaign
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Objective</th>
                        
                        
                        
                        <th className="p-2 text-left border">Start date</th>
                        
                        
                        
                        <th className="p-2 text-left border">End date</th>
                        
                        
                        
                        <th className="p-2 text-left border">Budget</th>
                        
                        
                        
                        <th className="p-2 text-left border">Currency</th>
                        
                        
                        
                        <th className="p-2 text-left border">Status</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.name ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.objective ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.startDate ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.endDate ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.budget ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.currency ?? '')}</td>
                            
                            
                            
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
        <CampaignForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
