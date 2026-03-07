import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const CAMPAIGN_FIELDS = gql`
  fragment CampaignFields on Campaign {
    id
    
        
        name
        
        
        
        objective
        
        
        
        startDate
        
        
        
        endDate
        
        
        
        budget
        
        
        
        currency
        
        
        
        status
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_CAMPAIGNS = gql`
  query GetCampaigns {
    campaigns {
      ...CampaignFields
    }
  }
  ${CAMPAIGN_FIELDS}
`

export const GET_CAMPAIGN = gql`
  query GetCampaign($id: ID!) {
    campaign(id: $id) {
      ...CampaignFields
    }
  }
  ${CAMPAIGN_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_CAMPAIGN = gql`
  mutation CreateCampaign($input: UserCreateCampaignInput!) {
    userCreateCampaign(input: $input) {
      ...CampaignFields
    }
  }
  ${CAMPAIGN_FIELDS}
`

export const UPDATE_CAMPAIGN = gql`
  mutation UpdateCampaign($id: ID!, $input: UserUpdateCampaignInput!) {
    userUpdateCampaign(id: $id, input: $input) {
      ...CampaignFields
    }
  }
  ${CAMPAIGN_FIELDS}
`

export const DELETE_CAMPAIGN = gql`
  mutation DeleteCampaign($id: ID!) {
    userDeleteCampaign(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Campaign {
  id: string
  
    
    name: string
    
    
    
    objective?: string
    
    
    
    startDate?: string
    
    
    
    endDate?: string
    
    
    
    budget?: number
    
    
    
    currency?: string
    
    
    
    status: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateCampaignInput {
  
    
    name: string
    
    
    
    objective?: string
    
    
    
    startDate?: string
    
    
    
    endDate?: string
    
    
    
    budget?: number
    
    
    
    currency?: string
    
    
    
    status: string
    
    
    
    
    
    
}

export interface UserUpdateCampaignInput {
  
    
    name?: string
    
    
    
    objective?: string
    
    
    
    startDate?: string
    
    
    
    endDate?: string
    
    
    
    budget?: number
    
    
    
    currency?: string
    
    
    
    status?: string
    
    
    
    
    
    
}
