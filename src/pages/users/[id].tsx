import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useUser, useDeleteUser } from '../../hooks/use-users'
import { UserForm } from '../../components/user/user-form'

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useUser(id!)
  const deleteItem = useDeleteUser()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this User?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/users')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">User not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">User Detail</h1>
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
                  <dt className="text-sm font-medium text-gray-500">First name</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.firstName ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Last name</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.lastName ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.email ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Avatar url</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.avatarUrl ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Job title</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.jobTitle ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Hourly rate</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.hourlyRate ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.status ?? '—')}</dd>
                </div>
                
                
                
                
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK User Agency
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_User_Agency?.id ?? 'None'}
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
        <UserForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
