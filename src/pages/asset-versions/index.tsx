import React, { useState } from 'react'
import { useAssetVersions, useDeleteAssetVersion } from '../../hooks/use-asset-versions'
import { AssetVersion } from '../../lib/graphql/asset-version'
import { AssetVersionForm } from '../../components/asset-version/asset-version-form'

export default function AssetVersionsPage() {
  const { data: items = [], isLoading } = useAssetVersions()
  const deleteItem = useDeleteAssetVersion()

  const [selected, setSelected] = useState<AssetVersion | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: AssetVersion) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Asset Version?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Asset Versions…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Asset versions</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Asset Version
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Version number</th>
                        
                        
                        
                        <th className="p-2 text-left border">File url</th>
                        
                        
                        
                        <th className="p-2 text-left border">Thumbnail url</th>
                        
                        
                        
                        <th className="p-2 text-left border">Notes</th>
                        
                        
                        
                        <th className="p-2 text-left border">Status</th>
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.versionNumber ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.fileUrl ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.thumbnailUrl ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.notes ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.status ?? '')}</td>
                            
                            
                            
                            
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
        <AssetVersionForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
