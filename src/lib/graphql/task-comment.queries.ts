import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const TASKCOMMENT_FIELDS = gql`
  fragment TaskCommentFields on TaskComment {
    id
    
        
        body
        
        
        
        isInternal
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_TASKCOMMENTS = gql`
  query GetTaskComments {
    taskComments {
      ...TaskCommentFields
    }
  }
  ${TASKCOMMENT_FIELDS}
`

export const GET_TASKCOMMENT = gql`
  query GetTaskComment($id: ID!) {
    taskComment(id: $id) {
      ...TaskCommentFields
    }
  }
  ${TASKCOMMENT_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_TASKCOMMENT = gql`
  mutation CreateTaskComment($input: UserCreateTaskCommentInput!) {
    userCreateTaskComment(input: $input) {
      ...TaskCommentFields
    }
  }
  ${TASKCOMMENT_FIELDS}
`

export const UPDATE_TASKCOMMENT = gql`
  mutation UpdateTaskComment($id: ID!, $input: UserUpdateTaskCommentInput!) {
    userUpdateTaskComment(id: $id, input: $input) {
      ...TaskCommentFields
    }
  }
  ${TASKCOMMENT_FIELDS}
`

export const DELETE_TASKCOMMENT = gql`
  mutation DeleteTaskComment($id: ID!) {
    userDeleteTaskComment(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TaskComment {
  id: string
  
    
    body: string
    
    
    
    isInternal: boolean
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateTaskCommentInput {
  
    
    body: string
    
    
    
    isInternal: boolean
    
    
    
    
    
    
}

export interface UserUpdateTaskCommentInput {
  
    
    body?: string
    
    
    
    isInternal?: boolean
    
    
    
    
    
    
}
