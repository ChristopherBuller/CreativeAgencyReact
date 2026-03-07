// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: Campaign

export interface Campaign {
  id: string
  
    
    name: string
    
    
    
    objective?: string
    
    
    
    startDate?: string
    
    
    
    endDate?: string
    
    
    
    budget?: number
    
    
    
    currency?: string
    
    
    
    status: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type CampaignWithAgency = Campaign & {
  FK_Campaign_Agency: import('./agency').Agency | null
}


export type CampaignWithClient = Campaign & {
  FK_Campaign_Client: import('./client').Client | null
}


export type CampaignWithWorkspace = Campaign & {
  FK_Campaign_Workspace: import('./workspace').Workspace | null
}


export type CampaignWithCreatedBy = Campaign & {
  FK_Campaign_CreatedBy: import('./user').User | null
}


