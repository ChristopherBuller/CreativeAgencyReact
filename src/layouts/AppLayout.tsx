import React from 'react'
import { NavLink, Outlet, Link } from 'react-router'
import { IS_PREVIEW } from '../lib/graphql/client'

const NAV_ITEMS = [
  
    { label: 'Agencies', path: '/agencies' },
    
    { label: 'Users', path: '/users' },
    
    { label: 'Roles', path: '/roles' },
    
    { label: 'User roles', path: '/user-roles' },
    
    { label: 'Workspaces', path: '/workspaces' },
    
    { label: 'Clients', path: '/clients' },
    
    { label: 'Campaigns', path: '/campaigns' },
    
    { label: 'Projects', path: '/projects' },
    
    { label: 'Project phases', path: '/project-phases' },
    
    { label: 'Tasks', path: '/tasks' },
    
    { label: 'Task comments', path: '/task-comments' },
    
    { label: 'Briefs', path: '/briefs' },
    
    { label: 'Deliverables', path: '/deliverables' },
    
    { label: 'Asset versions', path: '/asset-versions' },
    
    { label: 'Client revisions', path: '/client-revisions' },
    
    { label: 'Brand kits', path: '/brand-kits' },
    
    { label: 'Timesheet entries', path: '/timesheet-entries' },
    
] as const

export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {IS_PREVIEW && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center justify-between text-sm text-amber-800 shrink-0">
          <span>Preview mode — data is read-only. <Link to="/" className="underline font-medium">Get early access</Link> to create and edit records.</span>
        </div>
      )}
    <div className="flex flex-1 min-h-0 bg-gray-50">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-4 py-5 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900">creative-agency</h1>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 space-y-0.5">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded-md mx-2 transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
    </div>
  )
}
