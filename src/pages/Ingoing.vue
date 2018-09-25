<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Incoming Research From Faculty Researcher</h4>
          </md-card-header>
          <md-card-content class="md-body-2">
            <res-from-fr class="md-body-2" table-header-color="orange"></res-from-fr>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Incoming Research From OUP</h4>
          </md-card-header>
          <md-card-content>
           <oup-to-uro class="md-body-2" table-header-color="orange"></oup-to-uro>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Incoming Research From Faculty Researcher</h4>
          </md-card-header>
          <md-card-content>
            <fr-to-uro2 class="md-body-2" table-header-color="orange"></fr-to-uro2>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ResFromFr,
  OupToUro,
  FrToUro2
} from '@/components'

export default{
  components: {
    ResFromFr,
    OupToUro,
    FrToUro2
  },
  data () {
    return {

    }
  }
}
</script>
