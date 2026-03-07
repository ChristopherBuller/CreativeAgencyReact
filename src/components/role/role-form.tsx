import React, { useState } from 'react'
import { useCreateRole, useUpdateRole } from '../../hooks/use-roles'
import { Role, UserCreateRoleInput, UserUpdateRoleInput } from '../../lib/graphql/role'

interface Props {
  initial?: Role | null
  onClose: () => void
}

export function RoleForm({ initial, onClose }: Props) {
  const isEdit = !!initial?.id
  const create = useCreateRole()
  const update = useUpdateRole()

  const [form, setForm] = useState<UserCreateRoleInput>({
    
        
        name: initial?.name ?? '',
        
        
        
        description: initial?.description ?? '',
        
        
        
        isAdmin: initial?.isAdmin ?? false,
        
        
        
        
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (isEdit) {
      await update.mutateAsync({ id: initial!.id, input: form as UserUpdateRoleInput })
    } else {
      await create.mutateAsync(form)
    }
    onClose()
  }

  const isBusy = create.isPending || update.isPending

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {isEdit ? 'Edit Role' : 'New Role'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                        Name *
                      </label>
                      
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={(form.name ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">
                        Description
                      </label>
                      
                        <input
                          id="description"
                          name="description"
                          type="text"
                          value={(form.description ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="isAdmin">
                        Is admin *
                      </label>
                      
                        <input
                          id="isAdmin"
                          name="isAdmin"
                          type="checkbox"
                          checked={!!form.isAdmin}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600"
                        />
                        
                    </div>
                    
                    
                    
                    

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded border border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isBusy}
              className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isBusy ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Role'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
