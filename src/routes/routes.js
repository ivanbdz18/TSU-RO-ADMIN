import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Ingoing from '@/pages/Ingoing.vue'
import Outgoing from '@/pages/Outgoing.vue'
import Accounts from '@/pages/Accounts.vue'
import Forms from '@/pages/Forms.vue'
import Typography from '@/pages/Typography.vue'
import Notifications from '@/pages/Notifications.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'ingoing',
        name: 'Ingoing',
        component: Ingoing
      },
      {
        path: 'outgoing',
        name: 'Outgoing',
        component: Outgoing
      },
      {
        path: 'accounts',
        name: 'Accounts',
        component: Accounts
      },
      {
        path: 'forms',
        name: 'Forms',
        component: Forms
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      }
    ]
  }
]

export default routes
