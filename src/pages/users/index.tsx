import React, { useState } from 'react'
import { useUsers, useDeleteUser } from '../../hooks/use-users'
import { User } from '../../lib/graphql/user'
import { UserForm } from '../../components/user/user-form'

export default function UsersPage() {
  const { data: items = [], isLoading } = useUsers()
  const deleteItem = useDeleteUser()

  const [selected, setSelected] = useState<User | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: User) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this User?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Users…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New User
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">First name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Last name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Email</th>
                        
                        
                        
                        <th className="p-2 text-left border">Avatar url</th>
                        
                        
                        
                        <th className="p-2 text-left border">Job title</th>
                        
                        
                        
                        <th className="p-2 text-left border">Hourly rate</th>
                        
                        
                        
                        <th className="p-2 text-left border">Status</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.firstName ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.lastName ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.email ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.avatarUrl ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.jobTitle ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.hourlyRate ?? '')}</td>
                            
                            
                            
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
        <UserForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
