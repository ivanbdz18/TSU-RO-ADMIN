<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Proceed to Faculty Researcher</h4>
          </md-card-header>
          <md-card-content>
            <outgoing-table table-header-color="blue"></outgoing-table>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Proceed to Office of the University President</h4>
          </md-card-header>
          <md-card-content>
           <outgoing-table table-header-color="blue"></outgoing-table>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Proceed to Faculty Researcher</h4>
          </md-card-header>
          <md-card-content>
            <outgoing-table table-header-color="blue"></outgoing-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  OutgoingTable
} from '@/components'

export default{
  components: {
    OutgoingTable
  },
  data () {
    return {

    }
  }
}
</script>
