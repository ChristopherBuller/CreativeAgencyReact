import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  ClientRevision,
  UserCreateClientRevisionInput,
  UserUpdateClientRevisionInput,
} from '../lib/graphql/client-revision.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_CLIENTREVISIONS,
  GET_CLIENTREVISION,
  CREATE_CLIENTREVISION,
  UPDATE_CLIENTREVISION,
  DELETE_CLIENTREVISION,
} from '../lib/graphql/client-revision.queries'

const QUERY_KEY = 'clientRevisions'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useClientRevisions() {
  return useQuery<ClientRevision[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ clientRevisions: ClientRevision[] }>(GET_CLIENTREVISIONS).then(
        (d) => d.clientRevisions,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useClientRevision(id: string) {
  return useQuery<ClientRevision>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ clientRevision: ClientRevision }>(GET_CLIENTREVISION, { id }).then(
        (d) => d.clientRevision,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateClientRevision() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateClientRevisionInput) =>
      graphqlRequest<{ userCreateClientRevision: ClientRevision }>(CREATE_CLIENTREVISION, { input }).then(
        (d) => d.userCreateClientRevision,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateClientRevision() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateClientRevisionInput }) =>
      graphqlRequest<{ userUpdateClientRevision: ClientRevision }>(UPDATE_CLIENTREVISION, { id, input }).then(
        (d) => d.userUpdateClientRevision,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteClientRevision() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteClientRevision: { id: string } }>(DELETE_CLIENTREVISION, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
