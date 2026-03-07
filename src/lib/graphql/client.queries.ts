import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const CLIENT_FIELDS = gql`
  fragment ClientFields on Client {
    id
    
        
        companyName
        
        
        
        contactName
        
        
        
        contactEmail
        
        
        
        contactPhone
        
        
        
        website
        
        
        
        industry
        
        
        
        timezone
        
        
        
        notes
        
        
        
        status
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      ...ClientFields
    }
  }
  ${CLIENT_FIELDS}
`

export const GET_CLIENT = gql`
  query GetClient($id: ID!) {
    client(id: $id) {
      ...ClientFields
    }
  }
  ${CLIENT_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_CLIENT = gql`
  mutation CreateClient($input: UserCreateClientInput!) {
    userCreateClient(input: $input) {
      ...ClientFields
    }
  }
  ${CLIENT_FIELDS}
`

export const UPDATE_CLIENT = gql`
  mutation UpdateClient($id: ID!, $input: UserUpdateClientInput!) {
    userUpdateClient(id: $id, input: $input) {
      ...ClientFields
    }
  }
  ${CLIENT_FIELDS}
`

export const DELETE_CLIENT = gql`
  mutation DeleteClient($id: ID!) {
    userDeleteClient(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Client {
  id: string
  
    
    companyName: string
    
    
    
    contactName?: string
    
    
    
    contactEmail?: string
    
    
    
    contactPhone?: string
    
    
    
    website?: string
    
    
    
    industry?: string
    
    
    
    timezone?: string
    
    
    
    notes?: string
    
    
    
    status: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateClientInput {
  
    
    companyName: string
    
    
    
    contactName?: string
    
    
    
    contactEmail?: string
    
    
    
    contactPhone?: string
    
    
    
    website?: string
    
    
    
    industry?: string
    
    
    
    timezone?: string
    
    
    
    notes?: string
    
    
    
    status: string
    
    
    
    
    
    
}

export interface UserUpdateClientInput {
  
    
    companyName?: string
    
    
    
    contactName?: string
    
    
    
    contactEmail?: string
    
    
    
    contactPhone?: string
    
    
    
    website?: string
    
    
    
    industry?: string
    
    
    
    timezone?: string
    
    
    
    notes?: string
    
    
    
    status?: string
    
    
    
    
    
    
}
