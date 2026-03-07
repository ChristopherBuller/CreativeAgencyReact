import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Campaign,
  UserCreateCampaignInput,
  UserUpdateCampaignInput,
} from '../lib/graphql/campaign.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_CAMPAIGNS,
  GET_CAMPAIGN,
  CREATE_CAMPAIGN,
  UPDATE_CAMPAIGN,
  DELETE_CAMPAIGN,
} from '../lib/graphql/campaign.queries'

const QUERY_KEY = 'campaigns'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useCampaigns() {
  return useQuery<Campaign[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ campaigns: Campaign[] }>(GET_CAMPAIGNS).then(
        (d) => d.campaigns,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useCampaign(id: string) {
  return useQuery<Campaign>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ campaign: Campaign }>(GET_CAMPAIGN, { id }).then(
        (d) => d.campaign,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateCampaign() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateCampaignInput) =>
      graphqlRequest<{ userCreateCampaign: Campaign }>(CREATE_CAMPAIGN, { input }).then(
        (d) => d.userCreateCampaign,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateCampaign() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateCampaignInput }) =>
      graphqlRequest<{ userUpdateCampaign: Campaign }>(UPDATE_CAMPAIGN, { id, input }).then(
        (d) => d.userUpdateCampaign,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteCampaign() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteCampaign: { id: string } }>(DELETE_CAMPAIGN, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
