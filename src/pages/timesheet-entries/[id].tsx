import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useTimesheetEntry, useDeleteTimesheetEntry } from '../../hooks/use-timesheet-entries'
import { TimesheetEntryForm } from '../../components/timesheet-entry/timesheet-entry-form'

export default function TimesheetEntryDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useTimesheetEntry(id!)
  const deleteItem = useDeleteTimesheetEntry()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this Timesheet Entry?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/timesheet-entries')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">TimesheetEntry not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Timesheet Entry Detail</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowEdit(true)}
            className="px-3 py-1.5 text-sm rounded border border-gray-300 hover:bg-gray-50"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-3 py-1.5 text-sm rounded bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>

      <dl className="divide-y divide-gray-200">
        
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Description</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.description ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Date</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.date ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Hours</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.hours ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Is billable</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.isBillable ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Hourly rate</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.hourlyRate ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Invoice ref</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.invoiceRef ?? '—')}</dd>
                </div>
                
                
                
                
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK TimesheetEntry User
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_TimesheetEntry_User?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK TimesheetEntry Project
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_TimesheetEntry_Project?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK TimesheetEntry Task
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_TimesheetEntry_Task?.id ?? 'None'}
              </p>
            </div>
            
            

      <div className="mt-6">
        <button
          onClick={() => navigate(-1)}
          className="text-sm text-blue-600 hover:underline"
        >
          ← Back
        </button>
      </div>

      {showEdit && (
        <TimesheetEntryForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
