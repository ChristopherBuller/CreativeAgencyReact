import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const USER_FIELDS = gql`
  fragment UserFields on User {
    id
    
        
        firstName
        
        
        
        lastName
        
        
        
        email
        
        
        
        avatarUrl
        
        
        
        jobTitle
        
        
        
        hourlyRate
        
        
        
        status
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_USERS = gql`
  query GetUsers {
    users {
      ...UserFields
    }
  }
  ${USER_FIELDS}
`

export const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      ...UserFields
    }
  }
  ${USER_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_USER = gql`
  mutation CreateUser($input: UserCreateUserInput!) {
    userCreateUser(input: $input) {
      ...UserFields
    }
  }
  ${USER_FIELDS}
`

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UserUpdateUserInput!) {
    userUpdateUser(id: $id, input: $input) {
      ...UserFields
    }
  }
  ${USER_FIELDS}
`

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    userDeleteUser(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface User {
  id: string
  
    
    firstName: string
    
    
    
    lastName: string
    
    
    
    email: string
    
    
    
    avatarUrl?: string
    
    
    
    jobTitle?: string
    
    
    
    hourlyRate?: number
    
    
    
    status: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateUserInput {
  
    
    firstName: string
    
    
    
    lastName: string
    
    
    
    email: string
    
    
    
    avatarUrl?: string
    
    
    
    jobTitle?: string
    
    
    
    hourlyRate?: number
    
    
    
    status: string
    
    
    
    
    
    
}

export interface UserUpdateUserInput {
  
    
    firstName?: string
    
    
    
    lastName?: string
    
    
    
    email?: string
    
    
    
    avatarUrl?: string
    
    
    
    jobTitle?: string
    
    
    
    hourlyRate?: number
    
    
    
    status?: string
    
    
    
    
    
    
}
