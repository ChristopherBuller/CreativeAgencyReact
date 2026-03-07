// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: User

export interface User {
  id: string
  
    
    firstName: string
    
    
    
    lastName: string
    
    
    
    email: string
    
    
    
    avatarUrl?: string
    
    
    
    jobTitle?: string
    
    
    
    hourlyRate?: number
    
    
    
    status: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type UserWithAgency = User & {
  FK_User_Agency: import('./agency').Agency | null
}


