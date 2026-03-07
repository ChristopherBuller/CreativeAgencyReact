// Auto-generated — do not edit by hand
// Stack: react-supabase  |  Entity: ClientRevision

export interface ClientRevision {
  id: string
  
    
    requestedByName: string
    
    
    
    requestedByEmail?: string
    
    
    
    feedback: string
    
    
    
    priority: string
    
    
    
    status: string
    
    
    
    dueDate?: string
    
    
    
    resolvedAt?: string
    
    
    
    
  createdAt: string
  updatedAt: string
}


export type ClientRevisionWithDeliverable = ClientRevision & {
  FK_ClientRevision_Deliverable: import('./deliverable').Deliverable | null
}


export type ClientRevisionWithAssetVersion = ClientRevision & {
  FK_ClientRevision_AssetVersion: import('./asset-version').AssetVersion | null
}


export type ClientRevisionWithResolvedBy = ClientRevision & {
  FK_ClientRevision_ResolvedBy: import('./user').User | null
}


