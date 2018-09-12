<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Proceed to Faculty Researcher</h4>
          </md-card-header>
          <md-card-content>
            <uro-to-fr1 table-header-color="blue"></uro-to-fr1>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Proceed to Office of the University President</h4>
          </md-card-header>
          <md-card-content>
           <uro-to-oup table-header-color="blue"></uro-to-oup>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Proceed to Faculty Researcher</h4>
          </md-card-header>
          <md-card-content>
            <uro-to-fr2 table-header-color="blue"></uro-to-fr2>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UroToFr1,
  UroToFr2,
  UroToOup
} from '@/components'

export default{
  components: {
    UroToFr1,
    UroToFr2,
    UroToOup
  },
  data () {
    return {

    }
  }
}
</script>
