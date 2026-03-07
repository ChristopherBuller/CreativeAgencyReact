// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: Workspace

export interface Workspace {
  id: string
  
    
    name: string
    
    
    
    description?: string
    
    
    
    color?: string
    
    
    
    icon?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type WorkspaceWithAgency = Workspace & {
  FK_Workspace_Agency: import('./agency').Agency | null
}


export type WorkspaceWithCreatedBy = Workspace & {
  FK_Workspace_CreatedBy: import('./user').User | null
}


