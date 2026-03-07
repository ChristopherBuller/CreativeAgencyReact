import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster, toast } from 'sonner'
import App from './App'
import './styles/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 30_000, retry: 0 },
    mutations: {
      onError: (err: unknown) => {
        const msg = err instanceof Error ? err.message : String(err)
        if (msg === 'PREVIEW_MODE') {
          toast('This is a preview', {
            description: 'Sign up for early access to create and edit records.',
            action: { label: 'Join waitlist', onClick: () => { window.location.href = '/' } },
          })
        } else {
          toast.error('Something went wrong', { description: msg })
        }
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster position="bottom-right" richColors closeButton />
    </QueryClientProvider>
  </React.StrictMode>,
)
