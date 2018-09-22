<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College of Arts and Social Sciences</h4>
          </md-card-header>
          <md-card-content>
            <cass-dept class="md-body-2" table-header-color="orange"></cass-dept>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md  -xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College of Business and Accountancy</h4>
          </md-card-header>
          <md-card-content>
           <cba-dept class="md-body-2" table-header-color="orange"></cba-dept>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College of Computer Studies</h4>
          </md-card-header>
          <md-card-content>
            <ccs-dept class="md-body-2" table-header-color="orange"></ccs-dept>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College of Engineering and Technology</h4>
          </md-card-header>
          <md-card-content>
            <cet-dept class="md-body-2" table-header-color="orange"></cet-dept>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College of Criminal Justice and Education</h4>
          </md-card-header>
          <md-card-content>
            <ccje-dept class="md-body-2" table-header-color="orange"></ccje-dept>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College of Public Administration and Governance</h4>
          </md-card-header>
          <md-card-content>
            <cpag-dept class="md-body-2" table-header-color="orange"></cpag-dept>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College of Education</h4>
          </md-card-header>
          <md-card-content>
            <coed-dept class="md-body-2" table-header-color="orange"></coed-dept>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College of Science</h4>
          </md-card-header>
          <md-card-content>
            <cos-dept class="md-body-2" table-header-color="orange"></cos-dept>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="md-title">College of Architecture and Fine Arts</h4>
          </md-card-header>
          <md-card-content>
            <cafa-dept class="md-body-2" table-header-color="orange"></cafa-dept>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CcsDept,
  CassDept,
  CetDept,
  CafaDept,
  CpagDept,
  CbaDept,
  CosDept,
  CcjeDept,
  CoedDept
} from '@/components'

export default{
  components: {
    CcsDept,
    CassDept,
    CetDept,
    CafaDept,
    CpagDept,
    CbaDept,
    CosDept,
    CcjeDept,
    CoedDept
  },
  data () {
    return {

    }
  }
}
</script>
