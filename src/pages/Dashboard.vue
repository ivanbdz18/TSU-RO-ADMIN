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
      <!-- <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Offices:</span>
            <md-tabs md-sync-route class="md-success" md-alignment="center">

              <md-tab id="tab-crec" md-label="CREC" md-icon="work">
                <md-card-content>
                <nav-tabs-table-Crec table-header-color="blue"></nav-tabs-table-Crec>
                </md-card-content>
              </md-tab>

              <md-tab id="tab-drc" md-label="DRC" md-icon="work">
                <nav-tabs-table-Drc></nav-tabs-table-Drc>
              </md-tab>

              <md-tab id="tab-urec" md-label="UREC" md-icon="work">
                <nav-tabs-table-Urec></nav-tabs-table-Urec>
              </md-tab>

              <md-tab id="tab-rerc" md-label="RERC" md-icon="work">
                <nav-tabs-table-Rerc></nav-tabs-table-Rerc>
              </md-tab>

              <md-tab id="tab-uro" md-label="URO" md-icon="work">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="OUP" md-icon="work">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div> -->
       <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">From Researchers</h4>
          </md-card-header>
          <md-card-content>
            <from-researcher table-header-color="blue"></from-researcher>
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
