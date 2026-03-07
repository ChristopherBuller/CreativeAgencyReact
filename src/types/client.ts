// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: Client

export interface Client {
  id: string
  
    
    companyName: string
    
    
    
    contactName?: string
    
    
    
    contactEmail?: string
    
    
    
    contactPhone?: string
    
    
    
    website?: string
    
    
    
    industry?: string
    
    
    
    timezone?: string
    
    
    
    notes?: string
    
    
    
    status: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type ClientWithAgency = Client & {
  FK_Client_Agency: import('./agency').Agency | null
}


