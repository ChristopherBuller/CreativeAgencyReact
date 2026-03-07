import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  User,
  UserCreateUserInput,
  UserUpdateUserInput,
} from '../lib/graphql/user.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from '../lib/graphql/user.queries'

const QUERY_KEY = 'users'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useUsers() {
  return useQuery<User[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ users: User[] }>(GET_USERS).then(
        (d) => d.users,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useUser(id: string) {
  return useQuery<User>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ user: User }>(GET_USER, { id }).then(
        (d) => d.user,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateUserInput) =>
      graphqlRequest<{ userCreateUser: User }>(CREATE_USER, { input }).then(
        (d) => d.userCreateUser,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateUserInput }) =>
      graphqlRequest<{ userUpdateUser: User }>(UPDATE_USER, { id, input }).then(
        (d) => d.userUpdateUser,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteUser() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteUser: { id: string } }>(DELETE_USER, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
