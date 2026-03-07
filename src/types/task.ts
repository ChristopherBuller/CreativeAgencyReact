// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: Task

export interface Task {
  id: string
  
    
    title: string
    
    
    
    description?: string
    
    
    
    status: string
    
    
    
    priority: string
    
    
    
    startDate?: string
    
    
    
    dueDate?: string
    
    
    
    estimatedHours?: number
    
    
    
    completedAt?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type TaskWithProject = Task & {
  FK_Task_Project: import('./project').Project | null
}


export type TaskWithPhase = Task & {
  FK_Task_Phase: import('./project-phase').ProjectPhase | null
}


export type TaskWithParentTask = Task & {
  FK_Task_ParentTask: import('./task').Task | null
}


export type TaskWithBrief = Task & {
  FK_Task_Brief: import('./brief').Brief | null
}


export type TaskWithAssignedTo = Task & {
  FK_Task_AssignedTo: import('./user').User | null
}


export type TaskWithCreatedBy = Task & {
  FK_Task_CreatedBy: import('./user').User | null
}


