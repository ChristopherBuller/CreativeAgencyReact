import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  BrandKit,
  UserCreateBrandKitInput,
  UserUpdateBrandKitInput,
} from '../lib/graphql/brand-kit.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_BRANDKITS,
  GET_BRANDKIT,
  CREATE_BRANDKIT,
  UPDATE_BRANDKIT,
  DELETE_BRANDKIT,
} from '../lib/graphql/brand-kit.queries'

const QUERY_KEY = 'brandKits'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useBrandKits() {
  return useQuery<BrandKit[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ brandKits: BrandKit[] }>(GET_BRANDKITS).then(
        (d) => d.brandKits,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useBrandKit(id: string) {
  return useQuery<BrandKit>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ brandKit: BrandKit }>(GET_BRANDKIT, { id }).then(
        (d) => d.brandKit,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateBrandKit() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateBrandKitInput) =>
      graphqlRequest<{ userCreateBrandKit: BrandKit }>(CREATE_BRANDKIT, { input }).then(
        (d) => d.userCreateBrandKit,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateBrandKit() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateBrandKitInput }) =>
      graphqlRequest<{ userUpdateBrandKit: BrandKit }>(UPDATE_BRANDKIT, { id, input }).then(
        (d) => d.userUpdateBrandKit,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteBrandKit() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteBrandKit: { id: string } }>(DELETE_BRANDKIT, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
