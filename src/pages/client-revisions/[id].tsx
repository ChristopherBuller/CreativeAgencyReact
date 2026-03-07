import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useClientRevision, useDeleteClientRevision } from '../../hooks/use-client-revisions'
import { ClientRevisionForm } from '../../components/client-revision/client-revision-form'

export default function ClientRevisionDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useClientRevision(id!)
  const deleteItem = useDeleteClientRevision()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this Client Revision?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/client-revisions')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">ClientRevision not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Client Revision Detail</h1>
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
                  <dt className="text-sm font-medium text-gray-500">Requested by name</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.requestedByName ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Requested by email</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.requestedByEmail ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Feedback</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.feedback ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Priority</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.priority ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.status ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Due date</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.dueDate ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Resolved at</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.resolvedAt ?? '—')}</dd>
                </div>
                
                
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK ClientRevision Deliverable
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_ClientRevision_Deliverable?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK ClientRevision AssetVersion
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_ClientRevision_AssetVersion?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK ClientRevision ResolvedBy
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_ClientRevision_ResolvedBy?.id ?? 'None'}
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
        <ClientRevisionForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
