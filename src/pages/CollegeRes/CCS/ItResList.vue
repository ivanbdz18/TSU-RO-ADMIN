<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Information Technology Department Research List</h4>
          </md-card-header>
          <md-card-content>
            <it-dept class="md-body-2" table-header-color="orange"></it-dept>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ItDept
} from '@/components'

export default{
  components: {
    ItDept
  },
  data () {
    return {

    }
  }
}
</script>
