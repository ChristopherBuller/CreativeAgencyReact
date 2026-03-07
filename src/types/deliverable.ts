// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: Deliverable

export interface Deliverable {
  id: string
  
    
    name: string
    
    
    
    deliverableType: string
    
    
    
    format?: string
    
    
    
    dimensions?: string
    
    
    
    notes?: string
    
    
    
    status: string
    
    
    
    dueDate?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type DeliverableWithProject = Deliverable & {
  FK_Deliverable_Project: import('./project').Project | null
}


export type DeliverableWithBrief = Deliverable & {
  FK_Deliverable_Brief: import('./brief').Brief | null
}


export type DeliverableWithTask = Deliverable & {
  FK_Deliverable_Task: import('./task').Task | null
}


