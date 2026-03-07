// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: TaskComment

export interface TaskComment {
  id: string
  
    
    body: string
    
    
    
    isInternal: boolean
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type TaskCommentWithTask = TaskComment & {
  FK_TaskComment_Task: import('./task').Task | null
}


export type TaskCommentWithUser = TaskComment & {
  FK_TaskComment_User: import('./user').User | null
}


