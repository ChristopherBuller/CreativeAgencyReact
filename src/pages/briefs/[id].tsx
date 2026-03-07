import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useBrief, useDeleteBrief } from '../../hooks/use-briefs'
import { BriefForm } from '../../components/brief/brief-form'

export default function BriefDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useBrief(id!)
  const deleteItem = useDeleteBrief()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this Brief?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/briefs')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">Brief not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Brief Detail</h1>
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
                  <dt className="text-sm font-medium text-gray-500">Title</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.title ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Objective</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.objective ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Target audience</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.targetAudience ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Key messages</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.keyMessages ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Tone</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.tone ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Mandatories</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.mandatories ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Restrictions</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.restrictions ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Reference urls</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.referenceUrls ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.status ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Approved at</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.approvedAt ?? '—')}</dd>
                </div>
                
                
                
                
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Brief Project
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Brief_Project?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Brief Client
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Brief_Client?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Brief ApprovedBy
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Brief_ApprovedBy?.id ?? 'None'}
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
        <BriefForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
