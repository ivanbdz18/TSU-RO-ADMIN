<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Communication Department Research List</h4>
          </md-card-header>
          <md-card-content>
            <comm-dept class="md-body-2" table-header-color="orange"></comm-dept>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CommDept
} from '@/components'

export default{
  components: {
    CommDept
  },
  data () {
    return {

    }
  }
}
</script>
