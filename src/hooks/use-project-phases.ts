import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  ProjectPhase,
  UserCreateProjectPhaseInput,
  UserUpdateProjectPhaseInput,
} from '../lib/graphql/project-phase.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_PROJECTPHASES,
  GET_PROJECTPHASE,
  CREATE_PROJECTPHASE,
  UPDATE_PROJECTPHASE,
  DELETE_PROJECTPHASE,
} from '../lib/graphql/project-phase.queries'

const QUERY_KEY = 'projectPhases'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useProjectPhases() {
  return useQuery<ProjectPhase[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ projectPhases: ProjectPhase[] }>(GET_PROJECTPHASES).then(
        (d) => d.projectPhases,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useProjectPhase(id: string) {
  return useQuery<ProjectPhase>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ projectPhase: ProjectPhase }>(GET_PROJECTPHASE, { id }).then(
        (d) => d.projectPhase,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateProjectPhase() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateProjectPhaseInput) =>
      graphqlRequest<{ userCreateProjectPhase: ProjectPhase }>(CREATE_PROJECTPHASE, { input }).then(
        (d) => d.userCreateProjectPhase,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateProjectPhase() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateProjectPhaseInput }) =>
      graphqlRequest<{ userUpdateProjectPhase: ProjectPhase }>(UPDATE_PROJECTPHASE, { id, input }).then(
        (d) => d.userUpdateProjectPhase,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteProjectPhase() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteProjectPhase: { id: string } }>(DELETE_PROJECTPHASE, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
