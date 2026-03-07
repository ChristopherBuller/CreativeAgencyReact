import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const DELIVERABLE_FIELDS = gql`
  fragment DeliverableFields on Deliverable {
    id
    
        
        name
        
        
        
        deliverableType
        
        
        
        format
        
        
        
        dimensions
        
        
        
        notes
        
        
        
        status
        
        
        
        dueDate
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_DELIVERABLES = gql`
  query GetDeliverables {
    deliverables {
      ...DeliverableFields
    }
  }
  ${DELIVERABLE_FIELDS}
`

export const GET_DELIVERABLE = gql`
  query GetDeliverable($id: ID!) {
    deliverable(id: $id) {
      ...DeliverableFields
    }
  }
  ${DELIVERABLE_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_DELIVERABLE = gql`
  mutation CreateDeliverable($input: UserCreateDeliverableInput!) {
    userCreateDeliverable(input: $input) {
      ...DeliverableFields
    }
  }
  ${DELIVERABLE_FIELDS}
`

export const UPDATE_DELIVERABLE = gql`
  mutation UpdateDeliverable($id: ID!, $input: UserUpdateDeliverableInput!) {
    userUpdateDeliverable(id: $id, input: $input) {
      ...DeliverableFields
    }
  }
  ${DELIVERABLE_FIELDS}
`

export const DELETE_DELIVERABLE = gql`
  mutation DeleteDeliverable($id: ID!) {
    userDeleteDeliverable(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

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

export interface UserCreateDeliverableInput {
  
    
    name: string
    
    
    
    deliverableType: string
    
    
    
    format?: string
    
    
    
    dimensions?: string
    
    
    
    notes?: string
    
    
    
    status: string
    
    
    
    dueDate?: string
    
    
    
    
    
    
}

export interface UserUpdateDeliverableInput {
  
    
    name?: string
    
    
    
    deliverableType?: string
    
    
    
    format?: string
    
    
    
    dimensions?: string
    
    
    
    notes?: string
    
    
    
    status?: string
    
    
    
    dueDate?: string
    
    
    
    
    
    
}
