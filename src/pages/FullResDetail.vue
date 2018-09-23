<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Whole Research Detail</h4>
          </md-card-header>
          <md-card-content>
            <up-res-det class="md-body-2" table-header-color="blue"></up-res-det>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  UpResDet
} from '@/components'

export default{
  components: {
    UpResDet
  },
  data () {
    return {

    }
  }
}
</script>
