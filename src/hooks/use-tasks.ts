import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Task,
  UserCreateTaskInput,
  UserUpdateTaskInput,
} from '../lib/graphql/task.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_TASKS,
  GET_TASK,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from '../lib/graphql/task.queries'

const QUERY_KEY = 'tasks'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useTasks() {
  return useQuery<Task[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ tasks: Task[] }>(GET_TASKS).then(
        (d) => d.tasks,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useTask(id: string) {
  return useQuery<Task>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ task: Task }>(GET_TASK, { id }).then(
        (d) => d.task,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateTask() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateTaskInput) =>
      graphqlRequest<{ userCreateTask: Task }>(CREATE_TASK, { input }).then(
        (d) => d.userCreateTask,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateTask() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateTaskInput }) =>
      graphqlRequest<{ userUpdateTask: Task }>(UPDATE_TASK, { id, input }).then(
        (d) => d.userUpdateTask,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteTask() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteTask: { id: string } }>(DELETE_TASK, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
