<template>
  <div class="content">
    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-66">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Add Forms</h4>
          </md-card-header>
          <md-card-content>
            <add-form class="md-body-2" table-header-color="orange"></add-form>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">TSU - Research Office Forms</h4>
            <p class="category">List of Forms</p>
          </md-card-header>
          <md-card-content>
            <forms-table class="md-body-2" table-header-color="orange"></forms-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
</template>

<script>
import {
  FormsTable,
  AddForm
} from '@/components'

export default{
  components: {
    FormsTable,
    AddForm
  },
  data () {
    return {

    }
  }
}
</script>
