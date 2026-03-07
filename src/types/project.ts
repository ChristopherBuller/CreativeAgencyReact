// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: Project

export interface Project {
  id: string
  
    
    name: string
    
    
    
    description?: string
    
    
    
    status: string
    
    
    
    startDate?: string
    
    
    
    dueDate?: string
    
    
    
    budget?: number
    
    
    
    currency?: string
    
    
    
    isArchived: boolean
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type ProjectWithWorkspace = Project & {
  FK_Project_Workspace: import('./workspace').Workspace | null
}


export type ProjectWithClient = Project & {
  FK_Project_Client: import('./client').Client | null
}


export type ProjectWithCampaign = Project & {
  FK_Project_Campaign: import('./campaign').Campaign | null
}


export type ProjectWithCreatedBy = Project & {
  FK_Project_CreatedBy: import('./user').User | null
}


