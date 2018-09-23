<template>
  <div>
    <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
                  <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">
                    <md-field>
                      <label>Input Grade</label>
                      <md-input v-model="item.gradeUrec" type="text"></md-input>
                    </md-field>
                  </md-table-cell>
                  <md-table-cell md-label="University Research Agenda">
                    <md-field>
              <label for="agenda">Agenda</label>
              <md-select v-model="univAgenda" name="agenda" id="agenda">
                <md-option value="Environment and Climate Change Mitigation">Environment and Climate Change Mitigation</md-option>
                <md-option value="Foods, Natural Products and Health Research">Foods, Natural Products and Health Research</md-option>
                <md-option value="Industry, Energy, and Emerging Technologies">Industry, Energy, and Emerging Technologies</md-option>
                <md-option value="Sustainability Technology">Sustainability Technology</md-option>
                <md-option value="Public Policy and Social Praxis">Public Policy and Social Praxis</md-option>
                <md-option value="Design and Validation of Software">Design and Validation of Software</md-option>
                <md-option value="Gender and Development Studies">Gender and Development Studies</md-option>
              </md-select>
                  </md-field>
                  </md-table-cell>
              </md-table-row>
            </md-table>
      <md-table v-model="users" table-header-color="orange">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Incentive in Publication">
                    <md-field>
                      <label>Input Incentive</label>
                      <md-input v-model="item.gradeUrec" type="text"></md-input>
                    </md-field>
                  </md-table-cell>
                  <md-table-cell md-label="Incentive in Presentation">
                    <md-field>
                      <label>Input Incentive</label>
                      <md-input v-model="item.gradeUrec" type="text"></md-input>
                    </md-field>
                  </md-table-cell>
                  <md-table-cell md-label="Incentive in Citation">
                    <md-field>
                      <label>Input Incentive</label>
                      <md-input v-model="item.gradeUrec" type="text"></md-input>
                    </md-field>
                  </md-table-cell>
                  <md-table-cell md-label="Incentive in Competition">
                    <md-field>
                      <label>Input Incentive</label>
                      <md-input v-model="item.gradeUrec" type="text"></md-input>
                    </md-field>
                  </md-table-cell>
                  <md-table-cell md-label="Incentive in Completed Research">
                    <md-field>
                      <label>Input Incentive</label>
                      <md-input v-model="item.gradeUrec" type="text"></md-input>
                    </md-field>
                  </md-table-cell>
      </md-table-row>
            </md-table>
          <md-button class="md-raised md-success">Update</md-button>
  </div>
</template>

<script>
export default {
  name: 'up-res-det',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      users: [
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null
        }
      ]
    }
  }
}
</script>
