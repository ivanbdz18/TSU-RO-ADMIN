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

import ArchResList from '@/pages/CollegeRes/CAFA/ArchResList.vue'
import FaResList from '@/pages/CollegeRes/CAFA/FaResList.vue'

import CommResList from '@/pages/CollegeRes/CASS/CommResList.vue'
import EngResList from '@/pages/CollegeRes/CASS/EngResList.vue'
import PsychResList from '@/pages/CollegeRes/CASS/PsychResList.vue'

import AccResList from '@/pages/CollegeRes/CBA/AccResList.vue'
import AccTechResList from '@/pages/CollegeRes/CBA/AccTechResList.vue'
import BaResList from '@/pages/CollegeRes/CBA/BaResList.vue'
import EntrepResList from '@/pages/CollegeRes/CBA/EntrepResList.vue'
import HrmResList from '@/pages/CollegeRes/CBA/HrmResList.vue'

import CrimResList from '@/pages/CollegeRes/CCJE/CrimResList.vue'

import ItResList from '@/pages/CollegeRes/CCS/ItResList.vue'
import IsResList from '@/pages/CollegeRes/CCS/IsResList.vue'
import CsResList from '@/pages/CollegeRes/CCS/CsResList.vue'

import BitResList from '@/pages/CollegeRes/CET/BitResList.vue'
import CivilResList from '@/pages/CollegeRes/CET/CivilResList.vue'
import ElectriResList from '@/pages/CollegeRes/CET/ElectriResList.vue'
import ElectroResList from '@/pages/CollegeRes/CET/ElectroResList.vue'
import IeResList from '@/pages/CollegeRes/CET/IeResList.vue'
import IndTechResList from '@/pages/CollegeRes/CET/IndTechResList.vue'
import MeResList from '@/pages/CollegeRes/CET/MeResList.vue'

import CaeResList from '@/pages/CollegeRes/COED/CaeResList.vue'
import EduResList from '@/pages/CollegeRes/COED/EduResList.vue'
import ElemResList from '@/pages/CollegeRes/COED/ElemResList.vue'
import PeResList from '@/pages/CollegeRes/COED/PeResList.vue'
import SeconResList from '@/pages/CollegeRes/COED/SeconResList.vue'
import SneResList from '@/pages/CollegeRes/COED/SneResList.vue'
import TleResList from '@/pages/CollegeRes/COED/TleResList.vue'
import TvteResList from '@/pages/CollegeRes/COED/TvteResList.vue'
import EceResList from '@/pages/CollegeRes/COED/EceResList.vue'

import ChemResList from '@/pages/CollegeRes/COS/ChemResList.vue'
import EsResList from '@/pages/CollegeRes/COS/EsResList.vue'
import FtResList from '@/pages/CollegeRes/COS/FtResList.vue'
import MathResList from '@/pages/CollegeRes/COS/MathResList.vue'
import NurseResList from '@/pages/CollegeRes/COS/NurseResList.vue'

import PaResList from '@/pages/CollegeRes/CPAG/PaResList.vue'

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
        name: 'Research List',
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
        path: 'drcacclist',
        name: 'Office Clerk List',
        component: DrcList
      },
      {
        path: 'archreslist',
        name: 'Architecture Department  ',
        component: ArchResList
      },
      {
        path: 'fareslist',
        name: 'Fine Arts Department  ',
        component: FaResList
      },
      {
        path: 'commreslist',
        name: 'Communication Department  ',
        component: CommResList
      },
      {
        path: 'engreslist',
        name: 'English Language Studies Department  ',
        component: EngResList
      },
      {
        path: 'psychreslist',
        name: 'Psychology Department  ',
        component: PsychResList
      },
      {
        path: 'accreslist',
        name: 'Accounting Department  ',
        component: AccResList
      },
      {
        path: 'acctechreslist',
        name: 'Accounting Technology Department  ',
        component: AccTechResList
      },
      {
        path: 'bareslist',
        name: 'Business Administration Department  ',
        component: BaResList
      },
      {
        path: 'entrepreslist',
        name: 'Entreprenuership Department  ',
        component: EntrepResList
      },
      {
        path: 'hrmreslist',
        name: 'Hotel & Restaurant Management Department  ',
        component: HrmResList
      },
      {
        path: 'crimreslist',
        name: 'Criminology Department  ',
        component: CrimResList
      },
      {
        path: 'itreslist',
        name: 'Information Technology Department  ',
        component: ItResList
      },
      {
        path: 'isreslist',
        name: 'Information System Department  ',
        component: IsResList
      },
      {
        path: 'csreslist',
        name: 'Computer Science Department  ',
        component: CsResList
      },
      {
        path: 'csreslist',
        name: 'Computer Science Department  ',
        component: CsResList
      },
      {
        path: 'bitreslist',
        name: 'Bachelor of Industrial Technology Department  ',
        component: BitResList
      },
      {
        path: 'civilreslist',
        name: 'Civil Engineering Department  ',
        component: CivilResList
      },
      {
        path: 'electrireslist',
        name: 'Electrical Engineering Department  ',
        component: ElectriResList
      },
      {
        path: 'electroreslist',
        name: 'Electronics Engineering Department  ',
        component: ElectroResList
      },
      {
        path: 'iereslist',
        name: 'Industrial Engineering Department  ',
        component: IeResList
      },
      {
        path: 'IndTechreslist',
        name: 'Industrial Technology Department  ',
        component: IndTechResList
      },
      {
        path: 'mereslist',
        name: 'Mechanical Engineering Department  ',
        component: MeResList
      },
      {
        path: 'caereslist',
        name: 'Cultural and Arts Education Department  ',
        component: CaeResList
      },
      {
        path: 'ecereslist',
        name: 'Early Childhood Education Department  ',
        component: EceResList
      },
      {
        path: 'edureslist',
        name: 'Education Department  ',
        component: EduResList
      },
      {
        path: 'elemreslist',
        name: 'Elementary Education Department  ',
        component: ElemResList
      },
      {
        path: 'pereslist',
        name: 'Physical Education Department  ',
        component: PeResList
      },
      {
        path: 'seconreslist',
        name: 'Secondary Engineering Department  ',
        component: SeconResList
      },
      {
        path: 'tlereslist',
        name: 'Technology and Livelihood Education Department  ',
        component: TleResList
      },
      {
        path: 'snereslist',
        name: 'Special Needs Education Department  ',
        component: SneResList
      },
      {
        path: 'tvtereslist',
        name: 'Technical Vocational Teacher Education Department  ',
        component: TvteResList
      },
      {
        path: 'chemreslist',
        name: 'Chemistry Department  ',
        component: ChemResList
      },
      {
        path: 'esreslist',
        name: 'Environmental Science Department  ',
        component: EsResList
      },
      {
        path: 'ftreslist',
        name: 'Food Technology Department  ',
        component: FtResList
      },
      {
        path: 'mathreslist',
        name: 'Mathematics Department  ',
        component: MathResList
      },
      {
        path: 'nursereslist',
        name: 'Nursing Department  ',
        component: NurseResList
      },
      {
        path: 'pareslist',
        name: 'Public Administration Department  ',
        component: PaResList
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
