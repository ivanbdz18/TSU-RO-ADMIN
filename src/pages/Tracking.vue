<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="md-title">Tracking System</h4>
            <p class="category">The tracking system is a step by step process</p>
          </md-card-header>
          <div class="md-layout-item md-size-100 text-right">
          <md-button @click="goBack" class="md-raised md-danger">Go Back</md-button>
      </div>
          <md-card-content>
            <track-table class="md-body-2" table-header-color="orange"></track-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  TrackTable
} from '@/components'

export default{
  components: {
    TrackTable
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>
