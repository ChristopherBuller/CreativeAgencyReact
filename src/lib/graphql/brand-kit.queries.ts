import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const BRANDKIT_FIELDS = gql`
  fragment BrandKitFields on BrandKit {
    id
    
        
        brandName
        
        
        
        primaryColor
        
        
        
        secondaryColor
        
        
        
        accentColor
        
        
        
        fontPrimary
        
        
        
        fontSecondary
        
        
        
        logoUrl
        
        
        
        guidelinesUrl
        
        
        
        notes
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_BRANDKITS = gql`
  query GetBrandKits {
    brandKits {
      ...BrandKitFields
    }
  }
  ${BRANDKIT_FIELDS}
`

export const GET_BRANDKIT = gql`
  query GetBrandKit($id: ID!) {
    brandKit(id: $id) {
      ...BrandKitFields
    }
  }
  ${BRANDKIT_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_BRANDKIT = gql`
  mutation CreateBrandKit($input: UserCreateBrandKitInput!) {
    userCreateBrandKit(input: $input) {
      ...BrandKitFields
    }
  }
  ${BRANDKIT_FIELDS}
`

export const UPDATE_BRANDKIT = gql`
  mutation UpdateBrandKit($id: ID!, $input: UserUpdateBrandKitInput!) {
    userUpdateBrandKit(id: $id, input: $input) {
      ...BrandKitFields
    }
  }
  ${BRANDKIT_FIELDS}
`

export const DELETE_BRANDKIT = gql`
  mutation DeleteBrandKit($id: ID!) {
    userDeleteBrandKit(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BrandKit {
  id: string
  
    
    brandName: string
    
    
    
    primaryColor?: string
    
    
    
    secondaryColor?: string
    
    
    
    accentColor?: string
    
    
    
    fontPrimary?: string
    
    
    
    fontSecondary?: string
    
    
    
    logoUrl?: string
    
    
    
    guidelinesUrl?: string
    
    
    
    notes?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateBrandKitInput {
  
    
    brandName: string
    
    
    
    primaryColor?: string
    
    
    
    secondaryColor?: string
    
    
    
    accentColor?: string
    
    
    
    fontPrimary?: string
    
    
    
    fontSecondary?: string
    
    
    
    logoUrl?: string
    
    
    
    guidelinesUrl?: string
    
    
    
    notes?: string
    
    
    
    
    
    
}

export interface UserUpdateBrandKitInput {
  
    
    brandName?: string
    
    
    
    primaryColor?: string
    
    
    
    secondaryColor?: string
    
    
    
    accentColor?: string
    
    
    
    fontPrimary?: string
    
    
    
    fontSecondary?: string
    
    
    
    logoUrl?: string
    
    
    
    guidelinesUrl?: string
    
    
    
    notes?: string
    
    
    
    
    
    
}
