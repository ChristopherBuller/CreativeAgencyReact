import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useBrandKit, useDeleteBrandKit } from '../../hooks/use-brand-kits'
import { BrandKitForm } from '../../components/brand-kit/brand-kit-form'

export default function BrandKitDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useBrandKit(id!)
  const deleteItem = useDeleteBrandKit()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this Brand Kit?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/brand-kits')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">BrandKit not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Brand Kit Detail</h1>
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
                  <dt className="text-sm font-medium text-gray-500">Brand name</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.brandName ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Primary color</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.primaryColor ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Secondary color</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.secondaryColor ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Accent color</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.accentColor ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Font primary</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.fontPrimary ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Font secondary</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.fontSecondary ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Logo url</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.logoUrl ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Guidelines url</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.guidelinesUrl ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Notes</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.notes ?? '—')}</dd>
                </div>
                
                
                
                
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK BrandKit Client
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_BrandKit_Client?.id ?? 'None'}
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
        <BrandKitForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
