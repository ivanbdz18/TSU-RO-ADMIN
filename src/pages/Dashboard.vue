<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Audit Trail</h4>
          </md-card-header>
          <md-card-content>
            <audit-trail table-header-color="blue"></audit-trail>
          </md-card-content>
        </md-card>
      </div>
       <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Ingoing Request Forms/Forms From Researchers</h4>
          </md-card-header>
          <md-card-content>
            <ingoing-forms table-header-color="blue"></ingoing-forms>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

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
