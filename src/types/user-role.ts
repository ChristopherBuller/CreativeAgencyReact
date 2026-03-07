// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: UserRole

export interface UserRole {
  id: string
  
    
    assignedAt?: string
    
    
  createdAt: string
  updatedAt: string
}


export type UserRoleWithUser = UserRole & {
  FK_UserRole_User: import('./user').User | null
}


export type UserRoleWithRole = UserRole & {
  FK_UserRole_Role: import('./role').Role | null
}


export type UserRoleWithAssignedBy = UserRole & {
  FK_UserRole_AssignedBy: import('./user').User | null
}


