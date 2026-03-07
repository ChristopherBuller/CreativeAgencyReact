import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Agency,
  UserCreateAgencyInput,
  UserUpdateAgencyInput,
} from '../lib/graphql/agency.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_AGENCYS,
  GET_AGENCY,
  CREATE_AGENCY,
  UPDATE_AGENCY,
  DELETE_AGENCY,
} from '../lib/graphql/agency.queries'

const QUERY_KEY = 'agencies'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useAgencies() {
  return useQuery<Agency[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ agencies: Agency[] }>(GET_AGENCYS).then(
        (d) => d.agencies,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useAgency(id: string) {
  return useQuery<Agency>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ agency: Agency }>(GET_AGENCY, { id }).then(
        (d) => d.agency,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateAgency() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateAgencyInput) =>
      graphqlRequest<{ userCreateAgency: Agency }>(CREATE_AGENCY, { input }).then(
        (d) => d.userCreateAgency,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateAgency() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateAgencyInput }) =>
      graphqlRequest<{ userUpdateAgency: Agency }>(UPDATE_AGENCY, { id, input }).then(
        (d) => d.userUpdateAgency,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteAgency() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteAgency: { id: string } }>(DELETE_AGENCY, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
