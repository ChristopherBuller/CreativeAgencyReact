import React, { useState } from 'react'
import { useRoles, useDeleteRole } from '../../hooks/use-roles'
import { Role } from '../../lib/graphql/role'
import { RoleForm } from '../../components/role/role-form'

export default function RolesPage() {
  const { data: items = [], isLoading } = useRoles()
  const deleteItem = useDeleteRole()

  const [selected, setSelected] = useState<Role | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: Role) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Role?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Roles…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Roles</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Role
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Description</th>
                        
                        
                        
                        <th className="p-2 text-left border">Is admin</th>
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.name ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.description ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.isAdmin ?? '')}</td>
                            
                            
                            
                            
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
        <RoleForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
