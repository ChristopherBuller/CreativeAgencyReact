import React, { useState } from 'react'
import { useCreateTimesheetEntry, useUpdateTimesheetEntry } from '../../hooks/use-timesheet-entries'
import { TimesheetEntry, UserCreateTimesheetEntryInput, UserUpdateTimesheetEntryInput } from '../../lib/graphql/timesheet-entry'

interface Props {
  initial?: TimesheetEntry | null
  onClose: () => void
}

export function TimesheetEntryForm({ initial, onClose }: Props) {
  const isEdit = !!initial?.id
  const create = useCreateTimesheetEntry()
  const update = useUpdateTimesheetEntry()

  const [form, setForm] = useState<UserCreateTimesheetEntryInput>({
    
        
        description: initial?.description ?? '',
        
        
        
        date: initial?.date ?? '',
        
        
        
        hours: initial?.hours ?? 0,
        
        
        
        isBillable: initial?.isBillable ?? false,
        
        
        
        hourlyRate: initial?.hourlyRate ?? 0,
        
        
        
        invoiceRef: initial?.invoiceRef ?? '',
        
        
        
        
        
        
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
      await update.mutateAsync({ id: initial!.id, input: form as UserUpdateTimesheetEntryInput })
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
            {isEdit ? 'Edit Timesheet Entry' : 'New Timesheet Entry'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
                    
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
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date">
                        Date *
                      </label>
                      
                        <input
                          id="date"
                          name="date"
                          type="text"
                          value={(form.date ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="hours">
                        Hours *
                      </label>
                      
                        <input
                          id="hours"
                          name="hours"
                          type="number"
                          value={form.hours as number}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="isBillable">
                        Is billable *
                      </label>
                      
                        <input
                          id="isBillable"
                          name="isBillable"
                          type="checkbox"
                          checked={!!form.isBillable}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600"
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
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="invoiceRef">
                        Invoice ref
                      </label>
                      
                        <input
                          id="invoiceRef"
                          name="invoiceRef"
                          type="text"
                          value={(form.invoiceRef ?? '') as string}
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
              {isBusy ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Timesheet Entry'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
