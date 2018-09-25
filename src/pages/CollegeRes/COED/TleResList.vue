<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Technology and Livelihood Education Department Research List</h4>
          </md-card-header>
          <md-card-content>
            <tle-dept class="md-body-2" table-header-color="orange"></tle-dept>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TleDept
} from '@/components'

export default{
  components: {
    TleDept
  },
  data () {
    return {

    }
  }
}
</script>
