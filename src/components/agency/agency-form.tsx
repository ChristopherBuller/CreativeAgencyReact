import React, { useState } from 'react'
import { useCreateAgency, useUpdateAgency } from '../../hooks/use-agencies'
import { Agency, UserCreateAgencyInput, UserUpdateAgencyInput } from '../../lib/graphql/agency'

interface Props {
  initial?: Agency | null
  onClose: () => void
}

export function AgencyForm({ initial, onClose }: Props) {
  const isEdit = !!initial?.id
  const create = useCreateAgency()
  const update = useUpdateAgency()

  const [form, setForm] = useState<UserCreateAgencyInput>({
    
        
        name: initial?.name ?? '',
        
        
        
        slug: initial?.slug ?? '',
        
        
        
        plan: initial?.plan ?? '',
        
        
        
        timezone: initial?.timezone ?? '',
        
        
        
        website: initial?.website ?? '',
        
        
        
        logoUrl: initial?.logoUrl ?? '',
        
        
        
        defaultCurrency: initial?.defaultCurrency ?? '',
        
        
        
        
        
        
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
      await update.mutateAsync({ id: initial!.id, input: form as UserUpdateAgencyInput })
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
            {isEdit ? 'Edit Agency' : 'New Agency'}
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
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="slug">
                        Slug *
                      </label>
                      
                        <input
                          id="slug"
                          name="slug"
                          type="text"
                          value={(form.slug ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="plan">
                        Plan *
                      </label>
                      
                        <input
                          id="plan"
                          name="plan"
                          type="text"
                          value={(form.plan ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="timezone">
                        Timezone *
                      </label>
                      
                        <input
                          id="timezone"
                          name="timezone"
                          type="text"
                          value={(form.timezone ?? '') as string}
                          onChange={handleChange}
                          required
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
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="logoUrl">
                        Logo url
                      </label>
                      
                        <input
                          id="logoUrl"
                          name="logoUrl"
                          type="text"
                          value={(form.logoUrl ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="defaultCurrency">
                        Default currency *
                      </label>
                      
                        <input
                          id="defaultCurrency"
                          name="defaultCurrency"
                          type="text"
                          value={(form.defaultCurrency ?? '') as string}
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
              {isBusy ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Agency'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
