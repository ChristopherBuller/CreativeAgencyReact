// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: TimesheetEntry

export interface TimesheetEntry {
  id: string
  
    
    description?: string
    
    
    
    date: string
    
    
    
    hours: number
    
    
    
    isBillable: boolean
    
    
    
    hourlyRate?: number
    
    
    
    invoiceRef?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type TimesheetEntryWithUser = TimesheetEntry & {
  FK_TimesheetEntry_User: import('./user').User | null
}


export type TimesheetEntryWithProject = TimesheetEntry & {
  FK_TimesheetEntry_Project: import('./project').Project | null
}


export type TimesheetEntryWithTask = TimesheetEntry & {
  FK_TimesheetEntry_Task: import('./task').Task | null
}


