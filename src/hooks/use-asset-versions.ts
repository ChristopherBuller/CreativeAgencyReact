import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  AssetVersion,
  UserCreateAssetVersionInput,
  UserUpdateAssetVersionInput,
} from '../lib/graphql/asset-version.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_ASSETVERSIONS,
  GET_ASSETVERSION,
  CREATE_ASSETVERSION,
  UPDATE_ASSETVERSION,
  DELETE_ASSETVERSION,
} from '../lib/graphql/asset-version.queries'

const QUERY_KEY = 'assetVersions'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useAssetVersions() {
  return useQuery<AssetVersion[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ assetVersions: AssetVersion[] }>(GET_ASSETVERSIONS).then(
        (d) => d.assetVersions,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useAssetVersion(id: string) {
  return useQuery<AssetVersion>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ assetVersion: AssetVersion }>(GET_ASSETVERSION, { id }).then(
        (d) => d.assetVersion,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateAssetVersion() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateAssetVersionInput) =>
      graphqlRequest<{ userCreateAssetVersion: AssetVersion }>(CREATE_ASSETVERSION, { input }).then(
        (d) => d.userCreateAssetVersion,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateAssetVersion() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateAssetVersionInput }) =>
      graphqlRequest<{ userUpdateAssetVersion: AssetVersion }>(UPDATE_ASSETVERSION, { id, input }).then(
        (d) => d.userUpdateAssetVersion,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteAssetVersion() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteAssetVersion: { id: string } }>(DELETE_ASSETVERSION, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
