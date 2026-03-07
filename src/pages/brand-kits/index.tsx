import React, { useState } from 'react'
import { useBrandKits, useDeleteBrandKit } from '../../hooks/use-brand-kits'
import { BrandKit } from '../../lib/graphql/brand-kit'
import { BrandKitForm } from '../../components/brand-kit/brand-kit-form'

export default function BrandKitsPage() {
  const { data: items = [], isLoading } = useBrandKits()
  const deleteItem = useDeleteBrandKit()

  const [selected, setSelected] = useState<BrandKit | null>(null)
  const [showForm, setShowForm] = useState(false)

  function handleCreate() {
    setSelected(null)
    setShowForm(true)
  }

  function handleEdit(item: BrandKit) {
    setSelected(item)
    setShowForm(true)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this Brand Kit?')) return
    await deleteItem.mutateAsync(id)
  }

  if (isLoading) return <div className="p-4">Loading Brand Kits…</div>

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Brand kits</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          New Brand Kit
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            
                        
                        <th className="p-2 text-left border">Brand name</th>
                        
                        
                        
                        <th className="p-2 text-left border">Primary color</th>
                        
                        
                        
                        <th className="p-2 text-left border">Secondary color</th>
                        
                        
                        
                        <th className="p-2 text-left border">Accent color</th>
                        
                        
                        
                        <th className="p-2 text-left border">Font primary</th>
                        
                        
                        
                        <th className="p-2 text-left border">Font secondary</th>
                        
                        
                        
                        <th className="p-2 text-left border">Logo url</th>
                        
                        
                        
                        <th className="p-2 text-left border">Guidelines url</th>
                        
                        
                        
                        <th className="p-2 text-left border">Notes</th>
                        
                        
                        
                        
                        
                        
            <th className="p-2 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              
                            
                            <td className="p-2 border">{String(item.brandName ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.primaryColor ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.secondaryColor ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.accentColor ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.fontPrimary ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.fontSecondary ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.logoUrl ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.guidelinesUrl ?? '')}</td>
                            
                            
                            
                            <td className="p-2 border">{String(item.notes ?? '')}</td>
                            
                            
                            
                            
                            
                            
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
        <BrandKitForm
          initial={selected}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  )
}
