// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: ProjectPhase

export interface ProjectPhase {
  id: string
  
    
    name: string
    
    
    
    color?: string
    
    
    
    sortOrder: number
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type ProjectPhaseWithProject = ProjectPhase & {
  FK_ProjectPhase_Project: import('./project').Project | null
}


