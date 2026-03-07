import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useUserRole, useDeleteUserRole } from '../../hooks/use-user-roles'
import { UserRoleForm } from '../../components/user-role/user-role-form'

export default function UserRoleDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useUserRole(id!)
  const deleteItem = useDeleteUserRole()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this User Role?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/user-roles')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">UserRole not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">User Role Detail</h1>
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
                  <dt className="text-sm font-medium text-gray-500">Assigned at</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.assignedAt ?? '—')}</dd>
                </div>
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK UserRole User
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_UserRole_User?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK UserRole Role
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_UserRole_Role?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK UserRole AssignedBy
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_UserRole_AssignedBy?.id ?? 'None'}
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
        <UserRoleForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
