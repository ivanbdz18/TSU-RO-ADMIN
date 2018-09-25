<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Research From Faculty Researcher</h4>
          </md-card-header>
          <md-card-content class="md-body-2">
            <res-from-urec class="md-body-2" table-header-color="orange"></res-from-urec>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Research From Faculty Researcher</h4>
          </md-card-header>
          <md-card-content>
            <fr-to-uro2 class="md-body-2" table-header-color="orange"></fr-to-uro2>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Ingoing Research From OUP</h4>
          </md-card-header>
          <md-card-content>
           <res-from-oup class="md-body-2" table-header-color="orange"></res-from-oup>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ResFromUrec,
  FrToUro,
  FrToUro2,
  ResFromOup
} from '@/components'

export default{
  components: {
    ResFromUrec,
    FrToUro,
    FrToUro2,
    ResFromOup
  },
  data () {
    return {

    }
  }
}
</script>
