import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const ROLE_FIELDS = gql`
  fragment RoleFields on Role {
    id
    
        
        name
        
        
        
        description
        
        
        
        isAdmin
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_ROLES = gql`
  query GetRoles {
    roles {
      ...RoleFields
    }
  }
  ${ROLE_FIELDS}
`

export const GET_ROLE = gql`
  query GetRole($id: ID!) {
    role(id: $id) {
      ...RoleFields
    }
  }
  ${ROLE_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_ROLE = gql`
  mutation CreateRole($input: UserCreateRoleInput!) {
    userCreateRole(input: $input) {
      ...RoleFields
    }
  }
  ${ROLE_FIELDS}
`

export const UPDATE_ROLE = gql`
  mutation UpdateRole($id: ID!, $input: UserUpdateRoleInput!) {
    userUpdateRole(id: $id, input: $input) {
      ...RoleFields
    }
  }
  ${ROLE_FIELDS}
`

export const DELETE_ROLE = gql`
  mutation DeleteRole($id: ID!) {
    userDeleteRole(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Role {
  id: string
  
    
    name: string
    
    
    
    description?: string
    
    
    
    isAdmin: boolean
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateRoleInput {
  
    
    name: string
    
    
    
    description?: string
    
    
    
    isAdmin: boolean
    
    
    
    
}

export interface UserUpdateRoleInput {
  
    
    name?: string
    
    
    
    description?: string
    
    
    
    isAdmin?: boolean
    
    
    
    
}
