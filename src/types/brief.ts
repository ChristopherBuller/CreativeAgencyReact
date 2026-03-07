// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: Brief

export interface Brief {
  id: string
  
    
    title: string
    
    
    
    objective?: string
    
    
    
    targetAudience?: string
    
    
    
    keyMessages?: string
    
    
    
    tone?: string
    
    
    
    mandatories?: string
    
    
    
    restrictions?: string
    
    
    
    referenceUrls?: string
    
    
    
    status: string
    
    
    
    approvedAt?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type BriefWithProject = Brief & {
  FK_Brief_Project: import('./project').Project | null
}


export type BriefWithClient = Brief & {
  FK_Brief_Client: import('./client').Client | null
}


export type BriefWithApprovedBy = Brief & {
  FK_Brief_ApprovedBy: import('./user').User | null
}


