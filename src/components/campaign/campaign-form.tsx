import React, { useState } from 'react'
import { useCreateCampaign, useUpdateCampaign } from '../../hooks/use-campaigns'
import { Campaign, UserCreateCampaignInput, UserUpdateCampaignInput } from '../../lib/graphql/campaign'

interface Props {
  initial?: Campaign | null
  onClose: () => void
}

export function CampaignForm({ initial, onClose }: Props) {
  const isEdit = !!initial?.id
  const create = useCreateCampaign()
  const update = useUpdateCampaign()

  const [form, setForm] = useState<UserCreateCampaignInput>({
    
        
        name: initial?.name ?? '',
        
        
        
        objective: initial?.objective ?? '',
        
        
        
        startDate: initial?.startDate ?? '',
        
        
        
        endDate: initial?.endDate ?? '',
        
        
        
        budget: initial?.budget ?? 0,
        
        
        
        currency: initial?.currency ?? '',
        
        
        
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
      await update.mutateAsync({ id: initial!.id, input: form as UserUpdateCampaignInput })
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
            {isEdit ? 'Edit Campaign' : 'New Campaign'}
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
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="objective">
                        Objective
                      </label>
                      
                        <input
                          id="objective"
                          name="objective"
                          type="text"
                          value={(form.objective ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="startDate">
                        Start date
                      </label>
                      
                        <input
                          id="startDate"
                          name="startDate"
                          type="text"
                          value={(form.startDate ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="endDate">
                        End date
                      </label>
                      
                        <input
                          id="endDate"
                          name="endDate"
                          type="text"
                          value={(form.endDate ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="budget">
                        Budget
                      </label>
                      
                        <input
                          id="budget"
                          name="budget"
                          type="number"
                          value={form.budget as number}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="currency">
                        Currency
                      </label>
                      
                        <input
                          id="currency"
                          name="currency"
                          type="text"
                          value={(form.currency ?? '') as string}
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
              {isBusy ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Campaign'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
