import React, { useState } from 'react'
import { useCreateUser, useUpdateUser } from '../../hooks/use-users'
import { User, UserCreateUserInput, UserUpdateUserInput } from '../../lib/graphql/user'

interface Props {
  initial?: User | null
  onClose: () => void
}

export function UserForm({ initial, onClose }: Props) {
  const isEdit = !!initial?.id
  const create = useCreateUser()
  const update = useUpdateUser()

  const [form, setForm] = useState<UserCreateUserInput>({
    
        
        firstName: initial?.firstName ?? '',
        
        
        
        lastName: initial?.lastName ?? '',
        
        
        
        email: initial?.email ?? '',
        
        
        
        avatarUrl: initial?.avatarUrl ?? '',
        
        
        
        jobTitle: initial?.jobTitle ?? '',
        
        
        
        hourlyRate: initial?.hourlyRate ?? 0,
        
        
        
        status: initial?.status ?? '',
        
        
        
        
        
        
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
      await update.mutateAsync({ id: initial!.id, input: form as UserUpdateUserInput })
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
            {isEdit ? 'Edit User' : 'New User'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">
                        First name *
                      </label>
                      
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={(form.firstName ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">
                        Last name *
                      </label>
                      
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={(form.lastName ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        Email *
                      </label>
                      
                        <input
                          id="email"
                          name="email"
                          type="text"
                          value={(form.email ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="avatarUrl">
                        Avatar url
                      </label>
                      
                        <input
                          id="avatarUrl"
                          name="avatarUrl"
                          type="text"
                          value={(form.avatarUrl ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="jobTitle">
                        Job title
                      </label>
                      
                        <input
                          id="jobTitle"
                          name="jobTitle"
                          type="text"
                          value={(form.jobTitle ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="hourlyRate">
                        Hourly rate
                      </label>
                      
                        <input
                          id="hourlyRate"
                          name="hourlyRate"
                          type="number"
                          value={form.hourlyRate as number}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="status">
                        Status *
                      </label>
                      
                        <input
                          id="status"
                          name="status"
                          type="text"
                          value={(form.status ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              {isBusy ? 'Saving…' : isEdit ? 'Save Changes' : 'Create User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
