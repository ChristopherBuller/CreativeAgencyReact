import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { useProject, useDeleteProject } from '../../hooks/use-projects'
import { ProjectForm } from '../../components/project/project-form'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: item, isLoading } = useProject(id!)
  const deleteItem = useDeleteProject()
  const [showEdit, setShowEdit] = useState(false)

  async function handleDelete() {
    if (!confirm('Delete this Project?')) return
    await deleteItem.mutateAsync(id!)
    navigate('/projects')
  }

  if (isLoading) return <div className="p-4">Loading…</div>
  if (!item)     return <div className="p-4 text-red-600">Project not found.</div>

  return (
    <div className="p-6 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Project Detail</h1>
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
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.name ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Description</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.description ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.status ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Start date</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.startDate ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Due date</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.dueDate ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Budget</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.budget ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Currency</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.currency ?? '—')}</dd>
                </div>
                
                
                
                <div className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-sm font-medium text-gray-500">Is archived</dt>
                  <dd className="text-sm text-gray-900 col-span-2">{String(item.isArchived ?? '—')}</dd>
                </div>
                
                
                
                
                
                
      </dl>

      
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Project Workspace
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Project_Workspace?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Project Client
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Project_Client?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Project Campaign
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Project_Campaign?.id ?? 'None'}
              </p>
            </div>
            
            
            
            <div className="mt-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                FK Project CreatedBy
              </h2>
              <p className="text-sm text-gray-700">
                {(item as any)?.FK_Project_CreatedBy?.id ?? 'None'}
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
        <ProjectForm
          initial={item}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  )
}
