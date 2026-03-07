import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  UserRole,
  UserCreateUserRoleInput,
  UserUpdateUserRoleInput,
} from '../lib/graphql/user-role.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_USERROLES,
  GET_USERROLE,
  CREATE_USERROLE,
  UPDATE_USERROLE,
  DELETE_USERROLE,
} from '../lib/graphql/user-role.queries'

const QUERY_KEY = 'userRoles'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useUserRoles() {
  return useQuery<UserRole[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ userRoles: UserRole[] }>(GET_USERROLES).then(
        (d) => d.userRoles,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useUserRole(id: string) {
  return useQuery<UserRole>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ userRole: UserRole }>(GET_USERROLE, { id }).then(
        (d) => d.userRole,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateUserRole() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateUserRoleInput) =>
      graphqlRequest<{ userCreateUserRole: UserRole }>(CREATE_USERROLE, { input }).then(
        (d) => d.userCreateUserRole,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateUserRole() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateUserRoleInput }) =>
      graphqlRequest<{ userUpdateUserRole: UserRole }>(UPDATE_USERROLE, { id, input }).then(
        (d) => d.userUpdateUserRole,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteUserRole() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteUserRole: { id: string } }>(DELETE_USERROLE, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
