// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: BrandKit

export interface BrandKit {
  id: string
  
    
    brandName: string
    
    
    
    primaryColor?: string
    
    
    
    secondaryColor?: string
    
    
    
    accentColor?: string
    
    
    
    fontPrimary?: string
    
    
    
    fontSecondary?: string
    
    
    
    logoUrl?: string
    
    
    
    guidelinesUrl?: string
    
    
    
    notes?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type BrandKitWithClient = BrandKit & {
  FK_BrandKit_Client: import('./client').Client | null
}


