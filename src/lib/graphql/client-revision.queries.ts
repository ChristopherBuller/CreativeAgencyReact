import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const CLIENTREVISION_FIELDS = gql`
  fragment ClientRevisionFields on ClientRevision {
    id
    
        
        requestedByName
        
        
        
        requestedByEmail
        
        
        
        feedback
        
        
        
        priority
        
        
        
        status
        
        
        
        dueDate
        
        
        
        resolvedAt
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_CLIENTREVISIONS = gql`
  query GetClientRevisions {
    clientRevisions {
      ...ClientRevisionFields
    }
  }
  ${CLIENTREVISION_FIELDS}
`

export const GET_CLIENTREVISION = gql`
  query GetClientRevision($id: ID!) {
    clientRevision(id: $id) {
      ...ClientRevisionFields
    }
  }
  ${CLIENTREVISION_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_CLIENTREVISION = gql`
  mutation CreateClientRevision($input: UserCreateClientRevisionInput!) {
    userCreateClientRevision(input: $input) {
      ...ClientRevisionFields
    }
  }
  ${CLIENTREVISION_FIELDS}
`

export const UPDATE_CLIENTREVISION = gql`
  mutation UpdateClientRevision($id: ID!, $input: UserUpdateClientRevisionInput!) {
    userUpdateClientRevision(id: $id, input: $input) {
      ...ClientRevisionFields
    }
  }
  ${CLIENTREVISION_FIELDS}
`

export const DELETE_CLIENTREVISION = gql`
  mutation DeleteClientRevision($id: ID!) {
    userDeleteClientRevision(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

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

export interface UserCreateClientRevisionInput {
  
    
    requestedByName: string
    
    
    
    requestedByEmail?: string
    
    
    
    feedback: string
    
    
    
    priority: string
    
    
    
    status: string
    
    
    
    dueDate?: string
    
    
    
    resolvedAt?: string
    
    
    
    
}

export interface UserUpdateClientRevisionInput {
  
    
    requestedByName?: string
    
    
    
    requestedByEmail?: string
    
    
    
    feedback?: string
    
    
    
    priority?: string
    
    
    
    status?: string
    
    
    
    dueDate?: string
    
    
    
    resolvedAt?: string
    
    
    
    
}
