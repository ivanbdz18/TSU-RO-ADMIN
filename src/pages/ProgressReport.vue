<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Progress Report</h4>
          </md-card-header>
          <md-card-content>
            <prog-report class="md-body-2" table-header-color="orange"></prog-report>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ProgReport
} from '@/components'

export default{
  components: {
    ProgReport
  }
}
</script>
