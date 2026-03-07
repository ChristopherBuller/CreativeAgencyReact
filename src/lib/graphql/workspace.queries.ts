import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const WORKSPACE_FIELDS = gql`
  fragment WorkspaceFields on Workspace {
    id
    
        
        name
        
        
        
        description
        
        
        
        color
        
        
        
        icon
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_WORKSPACES = gql`
  query GetWorkspaces {
    workspaces {
      ...WorkspaceFields
    }
  }
  ${WORKSPACE_FIELDS}
`

export const GET_WORKSPACE = gql`
  query GetWorkspace($id: ID!) {
    workspace(id: $id) {
      ...WorkspaceFields
    }
  }
  ${WORKSPACE_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_WORKSPACE = gql`
  mutation CreateWorkspace($input: UserCreateWorkspaceInput!) {
    userCreateWorkspace(input: $input) {
      ...WorkspaceFields
    }
  }
  ${WORKSPACE_FIELDS}
`

export const UPDATE_WORKSPACE = gql`
  mutation UpdateWorkspace($id: ID!, $input: UserUpdateWorkspaceInput!) {
    userUpdateWorkspace(id: $id, input: $input) {
      ...WorkspaceFields
    }
  }
  ${WORKSPACE_FIELDS}
`

export const DELETE_WORKSPACE = gql`
  mutation DeleteWorkspace($id: ID!) {
    userDeleteWorkspace(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Workspace {
  id: string
  
    
    name: string
    
    
    
    description?: string
    
    
    
    color?: string
    
    
    
    icon?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateWorkspaceInput {
  
    
    name: string
    
    
    
    description?: string
    
    
    
    color?: string
    
    
    
    icon?: string
    
    
    
    
    
    
}

export interface UserUpdateWorkspaceInput {
  
    
    name?: string
    
    
    
    description?: string
    
    
    
    color?: string
    
    
    
    icon?: string
    
    
    
    
    
    
}
