<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Technical Vocational Teacher Education Department Research List</h4>
          </md-card-header>
          <md-card-content>
            <tvte-dept class="md-body-2" table-header-color="orange"></tvte-dept>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TvteDept
} from '@/components'

export default{
  components: {
    TvteDept
  },
  data () {
    return {

    }
  }
}
</script>
