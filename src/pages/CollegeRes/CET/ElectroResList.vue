<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Electronics Engineering Department Research List</h4>
          </md-card-header>
          <md-card-content>
            <electro-dept class="md-body-2" table-header-color="orange"></electro-dept>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ElectroDept
} from '@/components'

export default{
  components: {
    ElectroDept
  },
  data () {
    return {

    }
  }
}
</script>
