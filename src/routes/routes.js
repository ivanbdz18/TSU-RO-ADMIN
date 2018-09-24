import DashboardLayout from '@/pages/Layout/DashboardLayout.vue'
import LoginLayout from '@/pages/Layout/LoginLayout.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Ingoing from '@/pages/Ingoing.vue'
import Outgoing from '@/pages/Outgoing.vue'
import Research from '@/pages/Research.vue'
import Accounts from '@/pages/Accounts.vue'
import Forms from '@/pages/Forms.vue'
import Typography from '@/pages/Typography.vue'
import Notifications from '@/pages/Notifications.vue'
import Tracking from '@/pages/Tracking.vue'
import ResList from '@/pages/ResList.vue'
import Comment from '@/pages/Comment.vue'
import ProgressReport from '@/pages/ProgressReport.vue'
import FullResDetail from '@/pages/FullResDetail.vue'
import Terms from '@/pages/Terms.vue'
import Login from '@/pages/Login.vue'
import PasswordChange from '@/pages/PasswordChange.vue'
import Profile from '@/pages/Profile.vue'

import FrList from '@/pages/AccList/FrList.vue'
import DrcList from '@/pages/AccList/DrcList.vue'
import OfficeList from '@/pages/AccList/OfficeList.vue'

const routes = [
  {
    path: '/',
    component: LoginLayout,
    redirect: '/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'terms',
        name: 'Terms',
        component: Terms
      },
      {
        path: 'pwdchange',
        name: 'change',
        component: PasswordChange
      }
    ]
  },
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
        path: 'research',
        name: 'Research',
        component: Research
      },
      {
        path: 'accounts',
        name: 'Accounts',
        component: Accounts
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      },
      {
        path: 'forms',
        name: 'Forms',
        component: Forms
      },
      {
        path: 'tracking',
        name: 'Tracking',
        component: Tracking
      },
      {
        path: 'comment',
        name: 'Comment',
        component: Comment
      },
      {
        path: 'fullresdetail',
        name: 'Update Research Detail',
        component: FullResDetail
      },
      {
        path: 'progressreport',
        name: 'Progress Report',
        component: ProgressReport
      },
      {
        path: 'reslist',
        name: 'Research list',
        component: ResList
      },
      {
        path: 'fracclist',
        name: 'Faculty Researcher List',
        component: FrList
      },
      {
        path: 'drcacclist',
        name: 'Department Research Chairperson List',
        component: OfficeList
      },
      {
        path: 'drcacclist',
        name: 'Office Clerk List',
        component: DrcList
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
