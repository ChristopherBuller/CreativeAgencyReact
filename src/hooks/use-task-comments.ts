import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  TaskComment,
  UserCreateTaskCommentInput,
  UserUpdateTaskCommentInput,
} from '../lib/graphql/task-comment.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_TASKCOMMENTS,
  GET_TASKCOMMENT,
  CREATE_TASKCOMMENT,
  UPDATE_TASKCOMMENT,
  DELETE_TASKCOMMENT,
} from '../lib/graphql/task-comment.queries'

const QUERY_KEY = 'taskComments'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useTaskComments() {
  return useQuery<TaskComment[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ taskComments: TaskComment[] }>(GET_TASKCOMMENTS).then(
        (d) => d.taskComments,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useTaskComment(id: string) {
  return useQuery<TaskComment>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ taskComment: TaskComment }>(GET_TASKCOMMENT, { id }).then(
        (d) => d.taskComment,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateTaskComment() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateTaskCommentInput) =>
      graphqlRequest<{ userCreateTaskComment: TaskComment }>(CREATE_TASKCOMMENT, { input }).then(
        (d) => d.userCreateTaskComment,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateTaskComment() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateTaskCommentInput }) =>
      graphqlRequest<{ userUpdateTaskComment: TaskComment }>(UPDATE_TASKCOMMENT, { id, input }).then(
        (d) => d.userUpdateTaskComment,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteTaskComment() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteTaskComment: { id: string } }>(DELETE_TASKCOMMENT, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
