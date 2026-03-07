import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router'

// ─── Lazy-loaded entity pages ──────────────────────────────────────────────────

const AgenciesPage = lazy(() => import('./pages/agencies/index'))
const AgencyDetailPage  = lazy(() => import('./pages/agencies/[id]'))

const UsersPage = lazy(() => import('./pages/users/index'))
const UserDetailPage  = lazy(() => import('./pages/users/[id]'))

const RolesPage = lazy(() => import('./pages/roles/index'))
const RoleDetailPage  = lazy(() => import('./pages/roles/[id]'))

const UserRolesPage = lazy(() => import('./pages/user-roles/index'))
const UserRoleDetailPage  = lazy(() => import('./pages/user-roles/[id]'))

const WorkspacesPage = lazy(() => import('./pages/workspaces/index'))
const WorkspaceDetailPage  = lazy(() => import('./pages/workspaces/[id]'))

const ClientsPage = lazy(() => import('./pages/clients/index'))
const ClientDetailPage  = lazy(() => import('./pages/clients/[id]'))

const CampaignsPage = lazy(() => import('./pages/campaigns/index'))
const CampaignDetailPage  = lazy(() => import('./pages/campaigns/[id]'))

const ProjectsPage = lazy(() => import('./pages/projects/index'))
const ProjectDetailPage  = lazy(() => import('./pages/projects/[id]'))

const ProjectPhasesPage = lazy(() => import('./pages/project-phases/index'))
const ProjectPhaseDetailPage  = lazy(() => import('./pages/project-phases/[id]'))

const TasksPage = lazy(() => import('./pages/tasks/index'))
const TaskDetailPage  = lazy(() => import('./pages/tasks/[id]'))

const TaskCommentsPage = lazy(() => import('./pages/task-comments/index'))
const TaskCommentDetailPage  = lazy(() => import('./pages/task-comments/[id]'))

const BriefsPage = lazy(() => import('./pages/briefs/index'))
const BriefDetailPage  = lazy(() => import('./pages/briefs/[id]'))

const DeliverablesPage = lazy(() => import('./pages/deliverables/index'))
const DeliverableDetailPage  = lazy(() => import('./pages/deliverables/[id]'))

const AssetVersionsPage = lazy(() => import('./pages/asset-versions/index'))
const AssetVersionDetailPage  = lazy(() => import('./pages/asset-versions/[id]'))

const ClientRevisionsPage = lazy(() => import('./pages/client-revisions/index'))
const ClientRevisionDetailPage  = lazy(() => import('./pages/client-revisions/[id]'))

const BrandKitsPage = lazy(() => import('./pages/brand-kits/index'))
const BrandKitDetailPage  = lazy(() => import('./pages/brand-kits/[id]'))

const TimesheetEntriesPage = lazy(() => import('./pages/timesheet-entries/index'))
const TimesheetEntryDetailPage  = lazy(() => import('./pages/timesheet-entries/[id]'))


// ─── Router ───────────────────────────────────────────────────────────────────

export default function AppRouter() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading…</div>}>
      <Routes>
        <Route index element={<Navigate to="/agencies" replace />} />

        
                <Route path="/agencies"     element={<AgenciesPage />} />
                <Route path="/agencies/:id" element={<AgencyDetailPage />} />
                
                <Route path="/users"     element={<UsersPage />} />
                <Route path="/users/:id" element={<UserDetailPage />} />
                
                <Route path="/roles"     element={<RolesPage />} />
                <Route path="/roles/:id" element={<RoleDetailPage />} />
                
                <Route path="/user-roles"     element={<UserRolesPage />} />
                <Route path="/user-roles/:id" element={<UserRoleDetailPage />} />
                
                <Route path="/workspaces"     element={<WorkspacesPage />} />
                <Route path="/workspaces/:id" element={<WorkspaceDetailPage />} />
                
                <Route path="/clients"     element={<ClientsPage />} />
                <Route path="/clients/:id" element={<ClientDetailPage />} />
                
                <Route path="/campaigns"     element={<CampaignsPage />} />
                <Route path="/campaigns/:id" element={<CampaignDetailPage />} />
                
                <Route path="/projects"     element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                
                <Route path="/project-phases"     element={<ProjectPhasesPage />} />
                <Route path="/project-phases/:id" element={<ProjectPhaseDetailPage />} />
                
                <Route path="/tasks"     element={<TasksPage />} />
                <Route path="/tasks/:id" element={<TaskDetailPage />} />
                
                <Route path="/task-comments"     element={<TaskCommentsPage />} />
                <Route path="/task-comments/:id" element={<TaskCommentDetailPage />} />
                
                <Route path="/briefs"     element={<BriefsPage />} />
                <Route path="/briefs/:id" element={<BriefDetailPage />} />
                
                <Route path="/deliverables"     element={<DeliverablesPage />} />
                <Route path="/deliverables/:id" element={<DeliverableDetailPage />} />
                
                <Route path="/asset-versions"     element={<AssetVersionsPage />} />
                <Route path="/asset-versions/:id" element={<AssetVersionDetailPage />} />
                
                <Route path="/client-revisions"     element={<ClientRevisionsPage />} />
                <Route path="/client-revisions/:id" element={<ClientRevisionDetailPage />} />
                
                <Route path="/brand-kits"     element={<BrandKitsPage />} />
                <Route path="/brand-kits/:id" element={<BrandKitDetailPage />} />
                
                <Route path="/timesheet-entries"     element={<TimesheetEntriesPage />} />
                <Route path="/timesheet-entries/:id" element={<TimesheetEntryDetailPage />} />
                

        <Route path="*" element={<div className="p-8 text-gray-500">Page not found</div>} />
      </Routes>
    </Suspense>
  )
}
