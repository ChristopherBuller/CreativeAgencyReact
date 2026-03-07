import React, { useState } from 'react'
import { useCreateClient, useUpdateClient } from '../../hooks/use-clients'
import { Client, UserCreateClientInput, UserUpdateClientInput } from '../../lib/graphql/client'

interface Props {
  initial?: Client | null
  onClose: () => void
}

export function ClientForm({ initial, onClose }: Props) {
  const isEdit = !!initial?.id
  const create = useCreateClient()
  const update = useUpdateClient()

  const [form, setForm] = useState<UserCreateClientInput>({
    
        
        companyName: initial?.companyName ?? '',
        
        
        
        contactName: initial?.contactName ?? '',
        
        
        
        contactEmail: initial?.contactEmail ?? '',
        
        
        
        contactPhone: initial?.contactPhone ?? '',
        
        
        
        website: initial?.website ?? '',
        
        
        
        industry: initial?.industry ?? '',
        
        
        
        timezone: initial?.timezone ?? '',
        
        
        
        notes: initial?.notes ?? '',
        
        
        
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
      await update.mutateAsync({ id: initial!.id, input: form as UserUpdateClientInput })
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
            {isEdit ? 'Edit Client' : 'New Client'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="companyName">
                        Company name *
                      </label>
                      
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          value={(form.companyName ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contactName">
                        Contact name
                      </label>
                      
                        <input
                          id="contactName"
                          name="contactName"
                          type="text"
                          value={(form.contactName ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contactEmail">
                        Contact email
                      </label>
                      
                        <input
                          id="contactEmail"
                          name="contactEmail"
                          type="text"
                          value={(form.contactEmail ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contactPhone">
                        Contact phone
                      </label>
                      
                        <input
                          id="contactPhone"
                          name="contactPhone"
                          type="text"
                          value={(form.contactPhone ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="website">
                        Website
                      </label>
                      
                        <input
                          id="website"
                          name="website"
                          type="text"
                          value={(form.website ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="industry">
                        Industry
                      </label>
                      
                        <input
                          id="industry"
                          name="industry"
                          type="text"
                          value={(form.industry ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="timezone">
                        Timezone
                      </label>
                      
                        <input
                          id="timezone"
                          name="timezone"
                          type="text"
                          value={(form.timezone ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="notes">
                        Notes
                      </label>
                      
                        <input
                          id="notes"
                          name="notes"
                          type="text"
                          value={(form.notes ?? '') as string}
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
              {isBusy ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Client'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
