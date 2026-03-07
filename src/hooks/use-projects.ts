import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Project,
  UserCreateProjectInput,
  UserUpdateProjectInput,
} from '../lib/graphql/project.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_PROJECTS,
  GET_PROJECT,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
} from '../lib/graphql/project.queries'

const QUERY_KEY = 'projects'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useProjects() {
  return useQuery<Project[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ projects: Project[] }>(GET_PROJECTS).then(
        (d) => d.projects,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useProject(id: string) {
  return useQuery<Project>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ project: Project }>(GET_PROJECT, { id }).then(
        (d) => d.project,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateProjectInput) =>
      graphqlRequest<{ userCreateProject: Project }>(CREATE_PROJECT, { input }).then(
        (d) => d.userCreateProject,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateProjectInput }) =>
      graphqlRequest<{ userUpdateProject: Project }>(UPDATE_PROJECT, { id, input }).then(
        (d) => d.userUpdateProject,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteProject() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteProject: { id: string } }>(DELETE_PROJECT, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
