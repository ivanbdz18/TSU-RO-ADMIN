<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Office Clerks</h4>
          </md-card-header>
          <md-card-content>
            <office-clerk class="md-body-2" table-header-color="orange"></office-clerk>
          </md-card-content>
        </md-card>
      </div>
       <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College Clerks</h4>
          </md-card-header>
          <md-card-content>
            <college-clerk class="md-body-2" table-header-color="orange"></college-clerk>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Department Research Coordinator</h4>
          </md-card-header>
          <md-card-content>
            <acc-drc class="md-body-2" table-header-color="orange"></acc-drc>
          </md-card-content>
        </md-card>
        <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">Faculty Researchers</h4>
          </md-card-header>
          <md-card-content>
            <acc-drc class="md-body-2" table-header-color="orange"></acc-drc>
          </md-card-content>
        </md-card>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  AccDrc,
  OfficeClerk,
  CollegeClerk
} from '@/components'

export default{
  components: {
    AccDrc,
    OfficeClerk,
    CollegeClerk
  },
  data () {
    return {

    }
  }
}
</script>
