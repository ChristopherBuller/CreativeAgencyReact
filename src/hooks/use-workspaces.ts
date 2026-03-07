import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Workspace,
  UserCreateWorkspaceInput,
  UserUpdateWorkspaceInput,
} from '../lib/graphql/workspace.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_WORKSPACES,
  GET_WORKSPACE,
  CREATE_WORKSPACE,
  UPDATE_WORKSPACE,
  DELETE_WORKSPACE,
} from '../lib/graphql/workspace.queries'

const QUERY_KEY = 'workspaces'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useWorkspaces() {
  return useQuery<Workspace[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ workspaces: Workspace[] }>(GET_WORKSPACES).then(
        (d) => d.workspaces,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useWorkspace(id: string) {
  return useQuery<Workspace>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ workspace: Workspace }>(GET_WORKSPACE, { id }).then(
        (d) => d.workspace,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateWorkspace() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateWorkspaceInput) =>
      graphqlRequest<{ userCreateWorkspace: Workspace }>(CREATE_WORKSPACE, { input }).then(
        (d) => d.userCreateWorkspace,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateWorkspace() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateWorkspaceInput }) =>
      graphqlRequest<{ userUpdateWorkspace: Workspace }>(UPDATE_WORKSPACE, { id, input }).then(
        (d) => d.userUpdateWorkspace,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteWorkspace() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteWorkspace: { id: string } }>(DELETE_WORKSPACE, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
