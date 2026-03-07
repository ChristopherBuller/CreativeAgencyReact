import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const USERROLE_FIELDS = gql`
  fragment UserRoleFields on UserRole {
    id
    
        
        assignedAt
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_USERROLES = gql`
  query GetUserRoles {
    userRoles {
      ...UserRoleFields
    }
  }
  ${USERROLE_FIELDS}
`

export const GET_USERROLE = gql`
  query GetUserRole($id: ID!) {
    userRole(id: $id) {
      ...UserRoleFields
    }
  }
  ${USERROLE_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_USERROLE = gql`
  mutation CreateUserRole($input: UserCreateUserRoleInput!) {
    userCreateUserRole(input: $input) {
      ...UserRoleFields
    }
  }
  ${USERROLE_FIELDS}
`

export const UPDATE_USERROLE = gql`
  mutation UpdateUserRole($id: ID!, $input: UserUpdateUserRoleInput!) {
    userUpdateUserRole(id: $id, input: $input) {
      ...UserRoleFields
    }
  }
  ${USERROLE_FIELDS}
`

export const DELETE_USERROLE = gql`
  mutation DeleteUserRole($id: ID!) {
    userDeleteUserRole(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface UserRole {
  id: string
  
    
    assignedAt?: string
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateUserRoleInput {
  
    
    assignedAt?: string
    
    
}

export interface UserUpdateUserRoleInput {
  
    
    assignedAt?: string
    
    
}
