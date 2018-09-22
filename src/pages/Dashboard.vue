<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Audit Trail</h4>
          </md-card-header>
          <md-card-content class="md-body-2">
            <audit-trail table-header-color="orange"></audit-trail>
          </md-card-content>
        </md-card>
      </div>
       <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Request Forms/Forms From Researchers</h4>
          </md-card-header>
          <md-card-content class="md-body-2">
            <ingoing-forms table-header-color="orange"></ingoing-forms>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>
<style scoped>
.md-table-head-label {
   font-weight: 500;
 }
</style>

<script>
import {
  AuditTrail,
  IngoingForms
} from '@/components'

export default{
  components: {
    AuditTrail,
    IngoingForms
  },
  data () {
    return {

    }
  }
}
</script>
