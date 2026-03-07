import React, { useState } from 'react'
import { useCreateBrief, useUpdateBrief } from '../../hooks/use-briefs'
import { Brief, UserCreateBriefInput, UserUpdateBriefInput } from '../../lib/graphql/brief'

interface Props {
  initial?: Brief | null
  onClose: () => void
}

export function BriefForm({ initial, onClose }: Props) {
  const isEdit = !!initial?.id
  const create = useCreateBrief()
  const update = useUpdateBrief()

  const [form, setForm] = useState<UserCreateBriefInput>({
    
        
        title: initial?.title ?? '',
        
        
        
        objective: initial?.objective ?? '',
        
        
        
        targetAudience: initial?.targetAudience ?? '',
        
        
        
        keyMessages: initial?.keyMessages ?? '',
        
        
        
        tone: initial?.tone ?? '',
        
        
        
        mandatories: initial?.mandatories ?? '',
        
        
        
        restrictions: initial?.restrictions ?? '',
        
        
        
        referenceUrls: initial?.referenceUrls ?? '',
        
        
        
        status: initial?.status ?? '',
        
        
        
        approvedAt: initial?.approvedAt ?? '',
        
        
        
        
        
        
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
      await update.mutateAsync({ id: initial!.id, input: form as UserUpdateBriefInput })
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
            {isEdit ? 'Edit Brief' : 'New Brief'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">
                        Title *
                      </label>
                      
                        <input
                          id="title"
                          name="title"
                          type="text"
                          value={(form.title ?? '') as string}
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
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="targetAudience">
                        Target audience
                      </label>
                      
                        <input
                          id="targetAudience"
                          name="targetAudience"
                          type="text"
                          value={(form.targetAudience ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="keyMessages">
                        Key messages
                      </label>
                      
                        <input
                          id="keyMessages"
                          name="keyMessages"
                          type="text"
                          value={(form.keyMessages ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tone">
                        Tone
                      </label>
                      
                        <input
                          id="tone"
                          name="tone"
                          type="text"
                          value={(form.tone ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="mandatories">
                        Mandatories
                      </label>
                      
                        <input
                          id="mandatories"
                          name="mandatories"
                          type="text"
                          value={(form.mandatories ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="restrictions">
                        Restrictions
                      </label>
                      
                        <input
                          id="restrictions"
                          name="restrictions"
                          type="text"
                          value={(form.restrictions ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="referenceUrls">
                        Reference urls
                      </label>
                      
                        <input
                          id="referenceUrls"
                          name="referenceUrls"
                          type="text"
                          value={(form.referenceUrls ?? '') as string}
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
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="approvedAt">
                        Approved at
                      </label>
                      
                        <input
                          id="approvedAt"
                          name="approvedAt"
                          type="text"
                          value={(form.approvedAt ?? '') as string}
                          onChange={handleChange}
                          
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
              {isBusy ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Brief'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
