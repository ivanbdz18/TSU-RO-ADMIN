<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Ingoing Research From Faculty Researcher</h4>
          </md-card-header>
          <md-card-content>
            <audit-trail table-header-color="blue"></audit-trail>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Ingoing Research From OUP</h4>
          </md-card-header>
          <md-card-content>
            <audit-trail table-header-color="blue"></audit-trail>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Ingoing Research From Faculty Researcher</h4>
          </md-card-header>
          <md-card-content>
            <ingoing-table table-header-color="blue"></ingoing-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  NavTabsCard,
  NavTabsTableCrec,
  NavTabsTableDrc,
  NavTabsTableUrec,
  NavTabsTableRerc,
  AuditTrail,
  FromResearcher
} from '@/components'

export default{
  components: {
    NavTabsCard,
    NavTabsTableCrec,
    NavTabsTableDrc,
    NavTabsTableUrec,
    NavTabsTableRerc,
    AuditTrail,
    FromResearcher
  },
  data () {
    return {

    }
  }
}
</script>
