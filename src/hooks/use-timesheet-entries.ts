import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  TimesheetEntry,
  UserCreateTimesheetEntryInput,
  UserUpdateTimesheetEntryInput,
} from '../lib/graphql/timesheet-entry.queries'
import { graphqlRequest } from '../lib/graphql/client'
import {
  GET_TIMESHEETENTRYS,
  GET_TIMESHEETENTRY,
  CREATE_TIMESHEETENTRY,
  UPDATE_TIMESHEETENTRY,
  DELETE_TIMESHEETENTRY,
} from '../lib/graphql/timesheet-entry.queries'

const QUERY_KEY = 'timesheetEntries'

// ─── List ─────────────────────────────────────────────────────────────────────

export function useTimesheetEntries() {
  return useQuery<TimesheetEntry[]>({
    queryKey: [QUERY_KEY],
    queryFn: () =>
      graphqlRequest<{ timesheetEntries: TimesheetEntry[] }>(GET_TIMESHEETENTRYS).then(
        (d) => d.timesheetEntries,
      ),
  })
}

// ─── Detail ───────────────────────────────────────────────────────────────────

export function useTimesheetEntry(id: string) {
  return useQuery<TimesheetEntry>({
    queryKey: [QUERY_KEY, id],
    queryFn: () =>
      graphqlRequest<{ timesheetEntry: TimesheetEntry }>(GET_TIMESHEETENTRY, { id }).then(
        (d) => d.timesheetEntry,
      ),
    enabled: !!id,
  })
}

// ─── Create ───────────────────────────────────────────────────────────────────

export function useCreateTimesheetEntry() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: UserCreateTimesheetEntryInput) =>
      graphqlRequest<{ userCreateTimesheetEntry: TimesheetEntry }>(CREATE_TIMESHEETENTRY, { input }).then(
        (d) => d.userCreateTimesheetEntry,
      ),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}

// ─── Update ───────────────────────────────────────────────────────────────────

export function useUpdateTimesheetEntry() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, input }: { id: string; input: UserUpdateTimesheetEntryInput }) =>
      graphqlRequest<{ userUpdateTimesheetEntry: TimesheetEntry }>(UPDATE_TIMESHEETENTRY, { id, input }).then(
        (d) => d.userUpdateTimesheetEntry,
      ),
    onSuccess: (_data, { id }) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, id] })
    },
  })
}

// ─── Delete ───────────────────────────────────────────────────────────────────

export function useDeleteTimesheetEntry() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string) =>
      graphqlRequest<{ userDeleteTimesheetEntry: { id: string } }>(DELETE_TIMESHEETENTRY, { id }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
}
