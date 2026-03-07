import React, { useState } from 'react'
import { useUserRoles, useDeleteUserRole } from '../../hooks/use-user-roles'
import { UserRole } from '../../lib/graphql/user-role'
import { UserRoleForm } from '../../components/user-role/user-role-form'

export default function UserRolesPage() {
  const { data: items = [], isLoading } = useUserRoles()
  const deleteItem = useDeleteUserRole()

  const [selected, setSelected] = useState<UserRole | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: UserRole) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this User Role?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading User Roles…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">User roles</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New User Role
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Assigned at</th>
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.assignedAt ?? '')}</td>
                            
                            
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
        <UserRoleForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
