import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const BRIEF_FIELDS = gql`
  fragment BriefFields on Brief {
    id
    
        
        title
        
        
        
        objective
        
        
        
        targetAudience
        
        
        
        keyMessages
        
        
        
        tone
        
        
        
        mandatories
        
        
        
        restrictions
        
        
        
        referenceUrls
        
        
        
        status
        
        
        
        approvedAt
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_BRIEFS = gql`
  query GetBriefs {
    briefs {
      ...BriefFields
    }
  }
  ${BRIEF_FIELDS}
`

export const GET_BRIEF = gql`
  query GetBrief($id: ID!) {
    brief(id: $id) {
      ...BriefFields
    }
  }
  ${BRIEF_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_BRIEF = gql`
  mutation CreateBrief($input: UserCreateBriefInput!) {
    userCreateBrief(input: $input) {
      ...BriefFields
    }
  }
  ${BRIEF_FIELDS}
`

export const UPDATE_BRIEF = gql`
  mutation UpdateBrief($id: ID!, $input: UserUpdateBriefInput!) {
    userUpdateBrief(id: $id, input: $input) {
      ...BriefFields
    }
  }
  ${BRIEF_FIELDS}
`

export const DELETE_BRIEF = gql`
  mutation DeleteBrief($id: ID!) {
    userDeleteBrief(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Brief {
  id: string
  
    
    title: string
    
    
    
    objective?: string
    
    
    
    targetAudience?: string
    
    
    
    keyMessages?: string
    
    
    
    tone?: string
    
    
    
    mandatories?: string
    
    
    
    restrictions?: string
    
    
    
    referenceUrls?: string
    
    
    
    status: string
    
    
    
    approvedAt?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateBriefInput {
  
    
    title: string
    
    
    
    objective?: string
    
    
    
    targetAudience?: string
    
    
    
    keyMessages?: string
    
    
    
    tone?: string
    
    
    
    mandatories?: string
    
    
    
    restrictions?: string
    
    
    
    referenceUrls?: string
    
    
    
    status: string
    
    
    
    approvedAt?: string
    
    
    
    
    
    
}

export interface UserUpdateBriefInput {
  
    
    title?: string
    
    
    
    objective?: string
    
    
    
    targetAudience?: string
    
    
    
    keyMessages?: string
    
    
    
    tone?: string
    
    
    
    mandatories?: string
    
    
    
    restrictions?: string
    
    
    
    referenceUrls?: string
    
    
    
    status?: string
    
    
    
    approvedAt?: string
    
    
    
    
    
    
}
