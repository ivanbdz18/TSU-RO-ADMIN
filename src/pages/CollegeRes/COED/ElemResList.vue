<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Elementart Education Department Research List</h4>
          </md-card-header>
          <md-card-content>
            <elem-dept class="md-body-2" table-header-color="orange"></elem-dept>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ElemDept
} from '@/components'

export default{
  components: {
    ElemDept
  },
  data () {
    return {

    }
  }
}
</script>
