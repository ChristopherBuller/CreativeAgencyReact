import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useAgency, useDeleteAgency } from '../../hooks/use-agencies'
import { AgencyForm } from '../../components/agency/agency-form'

export default function AgencyDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useAgency(id!)
  const deleteItem = useDeleteAgency()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this Agency?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/agencies')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">Agency not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Agency Detail</h1>
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
                  <dt className="text-sm font-medium text-gray-500">Slug</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.slug ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Plan</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.plan ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Timezone</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.timezone ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Website</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.website ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Logo url</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.logoUrl ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Default currency</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.defaultCurrency ?? '—')}</dd>
                </div>
                
                
                
                
                
                
      </dl>

      

      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back
        </button>
      </div>

      {showEdit && (
        <AgencyForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
