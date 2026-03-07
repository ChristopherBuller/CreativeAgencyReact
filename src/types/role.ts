// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: Role

export interface Role {
  id: string
  
    
    name: string
    
    
    
    description?: string
    
    
    
    isAdmin: boolean
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type RoleWithAgency = Role & {
  FK_Role_Agency: import('./agency').Agency | null
}


