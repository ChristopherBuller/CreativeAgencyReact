import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Deliverable,
  UserCreateDeliverableInput,
  UserUpdateDeliverableInput,
} from '../lib/graphql/deliverable.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_DELIVERABLES,
  GET_DELIVERABLE,
  CREATE_DELIVERABLE,
  UPDATE_DELIVERABLE,
  DELETE_DELIVERABLE,
} from '../lib/graphql/deliverable.queries'

const QUERY_KEY = 'deliverables'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useDeliverables() {
  return useQuery<Deliverable[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ deliverables: Deliverable[] }>(GET_DELIVERABLES).then(
        (d) => d.deliverables,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useDeliverable(id: string) {
  return useQuery<Deliverable>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ deliverable: Deliverable }>(GET_DELIVERABLE, { id }).then(
        (d) => d.deliverable,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateDeliverable() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateDeliverableInput) =>
      graphqlRequest<{ userCreateDeliverable: Deliverable }>(CREATE_DELIVERABLE, { input }).then(
        (d) => d.userCreateDeliverable,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateDeliverable() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateDeliverableInput }) =>
      graphqlRequest<{ userUpdateDeliverable: Deliverable }>(UPDATE_DELIVERABLE, { id, input }).then(
        (d) => d.userUpdateDeliverable,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteDeliverable() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteDeliverable: { id: string } }>(DELETE_DELIVERABLE, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
