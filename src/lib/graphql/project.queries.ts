import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const PROJECT_FIELDS = gql`
  fragment ProjectFields on Project {
    id
    
        
        name
        
        
        
        description
        
        
        
        status
        
        
        
        startDate
        
        
        
        dueDate
        
        
        
        budget
        
        
        
        currency
        
        
        
        isArchived
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      ...ProjectFields
    }
  }
  ${PROJECT_FIELDS}
`

export const GET_PROJECT = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      ...ProjectFields
    }
  }
  ${PROJECT_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_PROJECT = gql`
  mutation CreateProject($input: UserCreateProjectInput!) {
    userCreateProject(input: $input) {
      ...ProjectFields
    }
  }
  ${PROJECT_FIELDS}
`

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: ID!, $input: UserUpdateProjectInput!) {
    userUpdateProject(id: $id, input: $input) {
      ...ProjectFields
    }
  }
  ${PROJECT_FIELDS}
`

export const DELETE_PROJECT = gql`
  mutation DeleteProject($id: ID!) {
    userDeleteProject(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
  id: string
  
    
    name: string
    
    
    
    description?: string
    
    
    
    status: string
    
    
    
    startDate?: string
    
    
    
    dueDate?: string
    
    
    
    budget?: number
    
    
    
    currency?: string
    
    
    
    isArchived: boolean
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateProjectInput {
  
    
    name: string
    
    
    
    description?: string
    
    
    
    status: string
    
    
    
    startDate?: string
    
    
    
    dueDate?: string
    
    
    
    budget?: number
    
    
    
    currency?: string
    
    
    
    isArchived: boolean
    
    
    
    
    
    
}

export interface UserUpdateProjectInput {
  
    
    name?: string
    
    
    
    description?: string
    
    
    
    status?: string
    
    
    
    startDate?: string
    
    
    
    dueDate?: string
    
    
    
    budget?: number
    
    
    
    currency?: string
    
    
    
    isArchived?: boolean
    
    
    
    
    
    
}
