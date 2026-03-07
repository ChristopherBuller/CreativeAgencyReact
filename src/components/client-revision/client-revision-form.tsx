import React, { useState } from 'react'
import { useCreateClientRevision, useUpdateClientRevision } from '../../hooks/use-client-revisions'
import { ClientRevision, UserCreateClientRevisionInput, UserUpdateClientRevisionInput } from '../../lib/graphql/client-revision'

interface Props {
  initial?: ClientRevision | null
  onClose: () => void
}

export function ClientRevisionForm({ initial, onClose }: Props) {
  const isEdit = !!initial?.id
  const create = useCreateClientRevision()
  const update = useUpdateClientRevision()

  const [form, setForm] = useState<UserCreateClientRevisionInput>({
    
        
        requestedByName: initial?.requestedByName ?? '',
        
        
        
        requestedByEmail: initial?.requestedByEmail ?? '',
        
        
        
        feedback: initial?.feedback ?? '',
        
        
        
        priority: initial?.priority ?? '',
        
        
        
        status: initial?.status ?? '',
        
        
        
        dueDate: initial?.dueDate ?? '',
        
        
        
        resolvedAt: initial?.resolvedAt ?? '',
        
        
        
        
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
      await update.mutateAsync({ id: initial!.id, input: form as UserUpdateClientRevisionInput })
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
            {isEdit ? 'Edit Client Revision' : 'New Client Revision'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="requestedByName">
                        Requested by name *
                      </label>
                      
                        <input
                          id="requestedByName"
                          name="requestedByName"
                          type="text"
                          value={(form.requestedByName ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="requestedByEmail">
                        Requested by email
                      </label>
                      
                        <input
                          id="requestedByEmail"
                          name="requestedByEmail"
                          type="text"
                          value={(form.requestedByEmail ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="feedback">
                        Feedback *
                      </label>
                      
                        <input
                          id="feedback"
                          name="feedback"
                          type="text"
                          value={(form.feedback ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="priority">
                        Priority *
                      </label>
                      
                        <input
                          id="priority"
                          name="priority"
                          type="text"
                          value={(form.priority ?? '') as string}
                          onChange={handleChange}
                          required
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
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dueDate">
                        Due date
                      </label>
                      
                        <input
                          id="dueDate"
                          name="dueDate"
                          type="text"
                          value={(form.dueDate ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="resolvedAt">
                        Resolved at
                      </label>
                      
                        <input
                          id="resolvedAt"
                          name="resolvedAt"
                          type="text"
                          value={(form.resolvedAt ?? '') as string}
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
              {isBusy ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Client Revision'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
