import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useTaskComment, useDeleteTaskComment } from '../../hooks/use-task-comments'
import { TaskCommentForm } from '../../components/task-comment/task-comment-form'

export default function TaskCommentDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useTaskComment(id!)
  const deleteItem = useDeleteTaskComment()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this Task Comment?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/task-comments')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">TaskComment not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Task Comment Detail</h1>
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
                  <dt className="text-sm font-medium text-gray-500">Body</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.body ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Is internal</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.isInternal ?? '—')}</dd>
                </div>
                
                
                
                
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK TaskComment Task
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_TaskComment_Task?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK TaskComment User
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_TaskComment_User?.id ?? 'None'}
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
        <TaskCommentForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
