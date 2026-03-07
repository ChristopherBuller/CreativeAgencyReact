import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useRole, useDeleteRole } from '../../hooks/use-roles'
import { RoleForm } from '../../components/role/role-form'

export default function RoleDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useRole(id!)
  const deleteItem = useDeleteRole()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this Role?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/roles')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">Role not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Role Detail</h1>
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
                  <dt className="text-sm font-medium text-gray-500">Description</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.description ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Is admin</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.isAdmin ?? '—')}</dd>
                </div>
                
                
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Role Agency
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Role_Agency?.id ?? 'None'}
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
        <RoleForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
