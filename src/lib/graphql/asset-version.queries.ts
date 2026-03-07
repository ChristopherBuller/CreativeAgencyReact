import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const ASSETVERSION_FIELDS = gql`
  fragment AssetVersionFields on AssetVersion {
    id
    
        
        versionNumber
        
        
        
        fileUrl
        
        
        
        thumbnailUrl
        
        
        
        notes
        
        
        
        status
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_ASSETVERSIONS = gql`
  query GetAssetVersions {
    assetVersions {
      ...AssetVersionFields
    }
  }
  ${ASSETVERSION_FIELDS}
`

export const GET_ASSETVERSION = gql`
  query GetAssetVersion($id: ID!) {
    assetVersion(id: $id) {
      ...AssetVersionFields
    }
  }
  ${ASSETVERSION_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_ASSETVERSION = gql`
  mutation CreateAssetVersion($input: UserCreateAssetVersionInput!) {
    userCreateAssetVersion(input: $input) {
      ...AssetVersionFields
    }
  }
  ${ASSETVERSION_FIELDS}
`

export const UPDATE_ASSETVERSION = gql`
  mutation UpdateAssetVersion($id: ID!, $input: UserUpdateAssetVersionInput!) {
    userUpdateAssetVersion(id: $id, input: $input) {
      ...AssetVersionFields
    }
  }
  ${ASSETVERSION_FIELDS}
`

export const DELETE_ASSETVERSION = gql`
  mutation DeleteAssetVersion($id: ID!) {
    userDeleteAssetVersion(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface AssetVersion {
  id: string
  
    
    versionNumber: number
    
    
    
    fileUrl: string
    
    
    
    thumbnailUrl?: string
    
    
    
    notes?: string
    
    
    
    status: string
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateAssetVersionInput {
  
    
    versionNumber: number
    
    
    
    fileUrl: string
    
    
    
    thumbnailUrl?: string
    
    
    
    notes?: string
    
    
    
    status: string
    
    
    
    
}

export interface UserUpdateAssetVersionInput {
  
    
    versionNumber?: number
    
    
    
    fileUrl?: string
    
    
    
    thumbnailUrl?: string
    
    
    
    notes?: string
    
    
    
    status?: string
    
    
    
    
}
