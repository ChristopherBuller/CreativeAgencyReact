import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Brief,
  UserCreateBriefInput,
  UserUpdateBriefInput,
} from '../lib/graphql/brief.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_BRIEFS,
  GET_BRIEF,
  CREATE_BRIEF,
  UPDATE_BRIEF,
  DELETE_BRIEF,
} from '../lib/graphql/brief.queries'

const QUERY_KEY = 'briefs'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useBriefs() {
  return useQuery<Brief[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ briefs: Brief[] }>(GET_BRIEFS).then(
        (d) => d.briefs,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useBrief(id: string) {
  return useQuery<Brief>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ brief: Brief }>(GET_BRIEF, { id }).then(
        (d) => d.brief,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateBrief() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateBriefInput) =>
      graphqlRequest<{ userCreateBrief: Brief }>(CREATE_BRIEF, { input }).then(
        (d) => d.userCreateBrief,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateBrief() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateBriefInput }) =>
      graphqlRequest<{ userUpdateBrief: Brief }>(UPDATE_BRIEF, { id, input }).then(
        (d) => d.userUpdateBrief,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteBrief() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteBrief: { id: string } }>(DELETE_BRIEF, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
