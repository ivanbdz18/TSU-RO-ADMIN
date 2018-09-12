<template>
  <div class="content">
    <div class="md-layout">

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">Tarlac State University</h4>
            <p class="category">Research Office Forms</p>
          </md-card-header>
          <md-card-content>
            <forms-table table-header-color="blue"></forms-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  FormsTable
} from '@/components'

export default{
  components: {
    FormsTable
  },
  data () {
    return {

    }
  }
}
</script>
