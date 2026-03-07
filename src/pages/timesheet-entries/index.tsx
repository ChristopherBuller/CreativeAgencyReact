import React, { useState } from 'react'
import { useTimesheetEntries, useDeleteTimesheetEntry } from '../../hooks/use-timesheet-entries'
import { TimesheetEntry } from '../../lib/graphql/timesheet-entry'
import { TimesheetEntryForm } from '../../components/timesheet-entry/timesheet-entry-form'

export default function TimesheetEntriesPage() {
  const { data: items = [], isLoading } = useTimesheetEntries()
  const deleteItem = useDeleteTimesheetEntry()

  const [selected, setSelected] = useState<TimesheetEntry | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: TimesheetEntry) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Timesheet Entry?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Timesheet Entries…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Timesheet entries</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Timesheet Entry
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Description</th>
                        
                        
                        
                        <th className="p-2 text-left border">Date</th>
                        
                        
                        
                        <th className="p-2 text-left border">Hours</th>
                        
                        
                        
                        <th className="p-2 text-left border">Is billable</th>
                        
                        
                        
                        <th className="p-2 text-left border">Hourly rate</th>
                        
                        
                        
                        <th className="p-2 text-left border">Invoice ref</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.description ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.date ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.hours ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.isBillable ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.hourlyRate ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.invoiceRef ?? '')}</td>
                            
                            
                            
                            
                            
                            
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
        <TimesheetEntryForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
