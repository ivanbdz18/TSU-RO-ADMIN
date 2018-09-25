<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Education Department Research List</h4>
          </md-card-header>
          <md-card-content>
            <edu-dept class="md-body-2" table-header-color="orange"></edu-dept>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  EduDept
} from '@/components'

export default{
  components: {
    EduDept
  },
  data () {
    return {

    }
  }
}
</script>
