import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Client,
  UserCreateClientInput,
  UserUpdateClientInput,
} from '../lib/graphql/client.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_CLIENTS,
  GET_CLIENT,
  CREATE_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT,
} from '../lib/graphql/client.queries'

const QUERY_KEY = 'clients'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useClients() {
  return useQuery<Client[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ clients: Client[] }>(GET_CLIENTS).then(
        (d) => d.clients,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useClient(id: string) {
  return useQuery<Client>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ client: Client }>(GET_CLIENT, { id }).then(
        (d) => d.client,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateClient() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateClientInput) =>
      graphqlRequest<{ userCreateClient: Client }>(CREATE_CLIENT, { input }).then(
        (d) => d.userCreateClient,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateClient() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateClientInput }) =>
      graphqlRequest<{ userUpdateClient: Client }>(UPDATE_CLIENT, { id, input }).then(
        (d) => d.userUpdateClient,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteClient() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteClient: { id: string } }>(DELETE_CLIENT, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
