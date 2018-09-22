<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p class="md-body-2">Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/ingoing">
        <md-icon>vertical_align_bottom</md-icon>
        <p>Ingoing Research</p>
      </sidebar-link>
      <sidebar-link to="/outgoing">
        <md-icon>vertical_align_top</md-icon>
        <p>Outgoing Research</p>
      </sidebar-link>
      <sidebar-link to="/forms">
        <md-icon>file_copy</md-icon>
        <p>Forms</p>
      </sidebar-link>
      <sidebar-link to="/research">
        <md-icon>description</md-icon>
        <p>Research</p>
      </sidebar-link>
      <sidebar-link to="/accounts">
        <md-icon>person</md-icon>
        <p>Accounts</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>
    </div>
  </div>
</template>
<style lang="scss">
   .sidebar .nav p {
    font-weight: 500;
}
</style>
<script>
import TopNavbar from './TopNavbar.vue'
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu
  }
}
</script>
