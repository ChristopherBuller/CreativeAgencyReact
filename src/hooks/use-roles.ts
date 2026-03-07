import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  Role,
  UserCreateRoleInput,
  UserUpdateRoleInput,
} from '../lib/graphql/role.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_ROLES,
  GET_ROLE,
  CREATE_ROLE,
  UPDATE_ROLE,
  DELETE_ROLE,
} from '../lib/graphql/role.queries'

const QUERY_KEY = 'roles'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useRoles() {
  return useQuery<Role[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ roles: Role[] }>(GET_ROLES).then(
        (d) => d.roles,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useRole(id: string) {
  return useQuery<Role>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ role: Role }>(GET_ROLE, { id }).then(
        (d) => d.role,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateRole() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateRoleInput) =>
      graphqlRequest<{ userCreateRole: Role }>(CREATE_ROLE, { input }).then(
        (d) => d.userCreateRole,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateRole() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateRoleInput }) =>
      graphqlRequest<{ userUpdateRole: Role }>(UPDATE_ROLE, { id, input }).then(
        (d) => d.userUpdateRole,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteRole() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteRole: { id: string } }>(DELETE_ROLE, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
