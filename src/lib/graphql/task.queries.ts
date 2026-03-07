import { gql } from '@apollo/client'

// ─── Fragment ────────────────────────────────────────────────────────────────

export const TASK_FIELDS = gql`
  fragment TaskFields on Task {
    id
    
        
        title
        
        
        
        description
        
        
        
        status
        
        
        
        priority
        
        
        
        startDate
        
        
        
        dueDate
        
        
        
        estimatedHours
        
        
        
        completedAt
        
        
        
        
        
        
    createdAt
    updatedAt
  }
`

// ─── Queries ─────────────────────────────────────────────────────────────────

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      ...TaskFields
    }
  }
  ${TASK_FIELDS}
`

export const GET_TASK = gql`
  query GetTask($id: ID!) {
    task(id: $id) {
      ...TaskFields
    }
  }
  ${TASK_FIELDS}
`

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_TASK = gql`
  mutation CreateTask($input: UserCreateTaskInput!) {
    userCreateTask(input: $input) {
      ...TaskFields
    }
  }
  ${TASK_FIELDS}
`

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $input: UserUpdateTaskInput!) {
    userUpdateTask(id: $id, input: $input) {
      ...TaskFields
    }
  }
  ${TASK_FIELDS}
`

export const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    userDeleteTask(id: $id) {
      id
    }
  }
`

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Task {
  id: string
  
    
    title: string
    
    
    
    description?: string
    
    
    
    status: string
    
    
    
    priority: string
    
    
    
    startDate?: string
    
    
    
    dueDate?: string
    
    
    
    estimatedHours?: number
    
    
    
    completedAt?: string
    
    
    
    
    
    
  createdAt: string
  updatedAt: string
}

export interface UserCreateTaskInput {
  
    
    title: string
    
    
    
    description?: string
    
    
    
    status: string
    
    
    
    priority: string
    
    
    
    startDate?: string
    
    
    
    dueDate?: string
    
    
    
    estimatedHours?: number
    
    
    
    completedAt?: string
    
    
    
    
    
    
}

export interface UserUpdateTaskInput {
  
    
    title?: string
    
    
    
    description?: string
    
    
    
    status?: string
    
    
    
    priority?: string
    
    
    
    startDate?: string
    
    
    
    dueDate?: string
    
    
    
    estimatedHours?: number
    
    
    
    completedAt?: string
    
    
    
    
    
    
}
