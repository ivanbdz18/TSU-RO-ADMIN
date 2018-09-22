<template>
  <div class="wrapper">
      <dashboard-content>
      </dashboard-content>
  </div>
</template>
<style lang="scss">

</style>
<script>
import DashboardContent from './Content.vue'
import MobileMenu from '@/pages/Layout/MobileMenu.vue'

export default {
  components: {
    DashboardContent,
    MobileMenu
  }
}
</script>
