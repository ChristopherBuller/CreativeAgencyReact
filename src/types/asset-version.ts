// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: AssetVersion

export interface AssetVersion {
  id: string
  
    
    versionNumber: number
    
    
    
    fileUrl: string
    
    
    
    thumbnailUrl?: string
    
    
    
    notes?: string
    
    
    
    status: string
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type AssetVersionWithDeliverable = AssetVersion & {
  FK_AssetVersion_Deliverable: import('./deliverable').Deliverable | null
}


export type AssetVersionWithUploadedBy = AssetVersion & {
  FK_AssetVersion_UploadedBy: import('./user').User | null
}


