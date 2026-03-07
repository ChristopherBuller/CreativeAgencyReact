import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const TIMESHEETENTRY_FIELDS = gql`
  fragment TimesheetEntryFields on TimesheetEntry {
    id
    
        
        description
        
        
        
        date
        
        
        
        hours
        
        
        
        isBillable
        
        
        
        hourlyRate
        
        
        
        invoiceRef
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_TIMESHEETENTRYS = gql`
  query GetTimesheetEntries {
    timesheetEntries {
      ...TimesheetEntryFields
    }
  }
  ${TIMESHEETENTRY_FIELDS}
`

export const GET_TIMESHEETENTRY = gql`
  query GetTimesheetEntry($id: ID!) {
    timesheetEntry(id: $id) {
      ...TimesheetEntryFields
    }
  }
  ${TIMESHEETENTRY_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_TIMESHEETENTRY = gql`
  mutation CreateTimesheetEntry($input: UserCreateTimesheetEntryInput!) {
    userCreateTimesheetEntry(input: $input) {
      ...TimesheetEntryFields
    }
  }
  ${TIMESHEETENTRY_FIELDS}
`

export const UPDATE_TIMESHEETENTRY = gql`
  mutation UpdateTimesheetEntry($id: ID!, $input: UserUpdateTimesheetEntryInput!) {
    userUpdateTimesheetEntry(id: $id, input: $input) {
      ...TimesheetEntryFields
    }
  }
  ${TIMESHEETENTRY_FIELDS}
`

export const DELETE_TIMESHEETENTRY = gql`
  mutation DeleteTimesheetEntry($id: ID!) {
    userDeleteTimesheetEntry(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TimesheetEntry {
  id: string
  
    
    description?: string
    
    
    
    date: string
    
    
    
    hours: number
    
    
    
    isBillable: boolean
    
    
    
    hourlyRate?: number
    
    
    
    invoiceRef?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateTimesheetEntryInput {
  
    
    description?: string
    
    
    
    date: string
    
    
    
    hours: number
    
    
    
    isBillable: boolean
    
    
    
    hourlyRate?: number
    
    
    
    invoiceRef?: string
    
    
    
    
    
    
}

export interface UserUpdateTimesheetEntryInput {
  
    
    description?: string
    
    
    
    date?: string
    
    
    
    hours?: number
    
    
    
    isBillable?: boolean
    
    
    
    hourlyRate?: number
    
    
    
    invoiceRef?: string
    
    
    
    
    
    
}
