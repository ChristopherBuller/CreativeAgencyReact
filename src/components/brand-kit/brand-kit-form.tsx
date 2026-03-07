import React, { useState } from 'react'
import { useCreateBrandKit, useUpdateBrandKit } from '../../hooks/use-brand-kits'
import { BrandKit, UserCreateBrandKitInput, UserUpdateBrandKitInput } from '../../lib/graphql/brand-kit'

interface Props {
  initial?: BrandKit | null
  onClose: () => void
}

export function BrandKitForm({ initial, onClose }: Props) {
  const isEdit = !!initial?.id
  const create = useCreateBrandKit()
  const update = useUpdateBrandKit()

  const [form, setForm] = useState<UserCreateBrandKitInput>({
    
        
        brandName: initial?.brandName ?? '',
        
        
        
        primaryColor: initial?.primaryColor ?? '',
        
        
        
        secondaryColor: initial?.secondaryColor ?? '',
        
        
        
        accentColor: initial?.accentColor ?? '',
        
        
        
        fontPrimary: initial?.fontPrimary ?? '',
        
        
        
        fontSecondary: initial?.fontSecondary ?? '',
        
        
        
        logoUrl: initial?.logoUrl ?? '',
        
        
        
        guidelinesUrl: initial?.guidelinesUrl ?? '',
        
        
        
        notes: initial?.notes ?? '',
        
        
        
        
        
        
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
      await update.mutateAsync({ id: initial!.id, input: form as UserUpdateBrandKitInput })
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
            {isEdit ? 'Edit Brand Kit' : 'New Brand Kit'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="brandName">
                        Brand name *
                      </label>
                      
                        <input
                          id="brandName"
                          name="brandName"
                          type="text"
                          value={(form.brandName ?? '') as string}
                          onChange={handleChange}
                          required
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="primaryColor">
                        Primary color
                      </label>
                      
                        <input
                          id="primaryColor"
                          name="primaryColor"
                          type="text"
                          value={(form.primaryColor ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="secondaryColor">
                        Secondary color
                      </label>
                      
                        <input
                          id="secondaryColor"
                          name="secondaryColor"
                          type="text"
                          value={(form.secondaryColor ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="accentColor">
                        Accent color
                      </label>
                      
                        <input
                          id="accentColor"
                          name="accentColor"
                          type="text"
                          value={(form.accentColor ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fontPrimary">
                        Font primary
                      </label>
                      
                        <input
                          id="fontPrimary"
                          name="fontPrimary"
                          type="text"
                          value={(form.fontPrimary ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fontSecondary">
                        Font secondary
                      </label>
                      
                        <input
                          id="fontSecondary"
                          name="fontSecondary"
                          type="text"
                          value={(form.fontSecondary ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="logoUrl">
                        Logo url
                      </label>
                      
                        <input
                          id="logoUrl"
                          name="logoUrl"
                          type="text"
                          value={(form.logoUrl ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="guidelinesUrl">
                        Guidelines url
                      </label>
                      
                        <input
                          id="guidelinesUrl"
                          name="guidelinesUrl"
                          type="text"
                          value={(form.guidelinesUrl ?? '') as string}
                          onChange={handleChange}
                          
                          className="block w-full rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                    </div>
                    
                    
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="notes">
                        Notes
                      </label>
                      
                        <input
                          id="notes"
                          name="notes"
                          type="text"
                          value={(form.notes ?? '') as string}
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
              {isBusy ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Brand Kit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
