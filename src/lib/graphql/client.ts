// Auto-generated — do not edit by hand
// Schema: schema  |  App: creative-agency

const SUPABASE_URL  = import.meta.env.VITE_SUPABASE_URL  as string ?? ''
const SUPABASE_ANON = import.meta.env.VITE_SUPABASE_ANON_KEY as string ?? ''

const gqlEndpoint = SUPABASE_URL
  ? `${SUPABASE_URL.replace(/\/$/, '')}/graphql/v1`
  : '/api/graphql'

export type GraphQLRequestOptions = {
  headers?: Record<string, string>
  variables?: Record<string, unknown>
  signal?: AbortSignal
}

export async function graphqlRequest<T = unknown>(
  query: { loc?: { source: { body: string } }; toString(): string },
  variables?: Record<string, unknown>,
  opts: GraphQLRequestOptions = {},
): Promise<T> {
  const body = typeof query === 'string' ? query : query.loc?.source.body ?? query.toString()

  const res = await fetch(gqlEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_ANON,
      Authorization: `Bearer ${SUPABASE_ANON}`,
      ...opts.headers,
    },
    body: JSON.stringify({ query: body, variables }),
    signal: opts.signal,
  })

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}`)
  }

  const json = (await res.json()) as { data?: T; errors?: { message: string }[] }

  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join('; '))
  }

  return json.data as T
}
