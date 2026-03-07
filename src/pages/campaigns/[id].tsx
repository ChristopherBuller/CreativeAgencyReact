import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useCampaign, useDeleteCampaign } from '../../hooks/use-campaigns'
import { CampaignForm } from '../../components/campaign/campaign-form'

export default function CampaignDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useCampaign(id!)
  const deleteItem = useDeleteCampaign()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this Campaign?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/campaigns')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">Campaign not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Campaign Detail</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowEdit(true)}
            className="px-3 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1.5 text-sm rounded bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      <dl className="divide-y divide-gray-200">
        
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.name ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Objective</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.objective ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Start date</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.startDate ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">End date</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.endDate ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Budget</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.budget ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Currency</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.currency ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.status ?? '—')}</dd>
                </div>
                
                
                
                
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Campaign Agency
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Campaign_Agency?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Campaign Client
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Campaign_Client?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Campaign Workspace
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Campaign_Workspace?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Campaign CreatedBy
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Campaign_CreatedBy?.id ?? 'None'}
              </p>
            </div>
            
            

      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back
        </button>
      </div>

      {showEdit && (
        <CampaignForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
