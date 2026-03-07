import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const AGENCY_FIELDS = gql`
  fragment AgencyFields on Agency {
    id
    
        
        name
        
        
        
        slug
        
        
        
        plan
        
        
        
        timezone
        
        
        
        website
        
        
        
        logoUrl
        
        
        
        defaultCurrency
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_AGENCYS = gql`
  query GetAgencies {
    agencies {
      ...AgencyFields
    }
  }
  ${AGENCY_FIELDS}
`

export const GET_AGENCY = gql`
  query GetAgency($id: ID!) {
    agency(id: $id) {
      ...AgencyFields
    }
  }
  ${AGENCY_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_AGENCY = gql`
  mutation CreateAgency($input: UserCreateAgencyInput!) {
    userCreateAgency(input: $input) {
      ...AgencyFields
    }
  }
  ${AGENCY_FIELDS}
`

export const UPDATE_AGENCY = gql`
  mutation UpdateAgency($id: ID!, $input: UserUpdateAgencyInput!) {
    userUpdateAgency(id: $id, input: $input) {
      ...AgencyFields
    }
  }
  ${AGENCY_FIELDS}
`

export const DELETE_AGENCY = gql`
  mutation DeleteAgency($id: ID!) {
    userDeleteAgency(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Agency {
  id: string
  
    
    name: string
    
    
    
    slug: string
    
    
    
    plan: string
    
    
    
    timezone: string
    
    
    
    website?: string
    
    
    
    logoUrl?: string
    
    
    
    defaultCurrency: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateAgencyInput {
  
    
    name: string
    
    
    
    slug: string
    
    
    
    plan: string
    
    
    
    timezone: string
    
    
    
    website?: string
    
    
    
    logoUrl?: string
    
    
    
    defaultCurrency: string
    
    
    
    
    
    
}

export interface UserUpdateAgencyInput {
  
    
    name?: string
    
    
    
    slug?: string
    
    
    
    plan?: string
    
    
    
    timezone?: string
    
    
    
    website?: string
    
    
    
    logoUrl?: string
    
    
    
    defaultCurrency?: string
    
    
    
    
    
    
}
