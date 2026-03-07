import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const PROJECTPHASE_FIELDS = gql`
  fragment ProjectPhaseFields on ProjectPhase {
    id
    
        
        name
        
        
        
        color
        
        
        
        sortOrder
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_PROJECTPHASES = gql`
  query GetProjectPhases {
    projectPhases {
      ...ProjectPhaseFields
    }
  }
  ${PROJECTPHASE_FIELDS}
`

export const GET_PROJECTPHASE = gql`
  query GetProjectPhase($id: ID!) {
    projectPhase(id: $id) {
      ...ProjectPhaseFields
    }
  }
  ${PROJECTPHASE_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_PROJECTPHASE = gql`
  mutation CreateProjectPhase($input: UserCreateProjectPhaseInput!) {
    userCreateProjectPhase(input: $input) {
      ...ProjectPhaseFields
    }
  }
  ${PROJECTPHASE_FIELDS}
`

export const UPDATE_PROJECTPHASE = gql`
  mutation UpdateProjectPhase($id: ID!, $input: UserUpdateProjectPhaseInput!) {
    userUpdateProjectPhase(id: $id, input: $input) {
      ...ProjectPhaseFields
    }
  }
  ${PROJECTPHASE_FIELDS}
`

export const DELETE_PROJECTPHASE = gql`
  mutation DeleteProjectPhase($id: ID!) {
    userDeleteProjectPhase(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProjectPhase {
  id: string
  
    
    name: string
    
    
    
    color?: string
    
    
    
    sortOrder: number
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateProjectPhaseInput {
  
    
    name: string
    
    
    
    color?: string
    
    
    
    sortOrder: number
    
    
    
    
}

export interface UserUpdateProjectPhaseInput {
  
    
    name?: string
    
    
    
    color?: string
    
    
    
    sortOrder?: number
    
    
    
    
}
