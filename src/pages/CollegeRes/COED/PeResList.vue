<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Physical Education Department Research List</h4>
          </md-card-header>
          <md-card-content>
            <pe-dept class="md-body-2" table-header-color="orange"></pe-dept>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PeDept
} from '@/components'

export default{
  components: {
    PeDept
  },
  data () {
    return {

    }
  }
}
</script>
