<template>
  <div class="max300">
    <md-table v-model="users" table-header-color="orange">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell> <!-- posted dapat di napapalitan -->
        <md-table-cell md-label="Grade in UREC">
          <md-field>
              <label>Input Grade</label>
              <md-input v-model="item.gradeUrec" type="text"></md-input>
          </md-field>
        </md-table-cell> <!-- need mag input -->
        <md-table-cell md-label="Incentive">
          <md-field>
              <label>Input incentive</label>
              <md-input v-model="item.incentive" type="text"></md-input>
          </md-field>
        </md-table-cell> <!-- need mag input -->
        <md-table-cell md-label="University Agenda">
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
        </md-table-cell> <!-- need mag input (dropdown)-->
        <md-table-cell md-label="Comment">
          <md-button to="/comment" class="md-raised md-success">Comment</md-button>
        </md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-raised md-success">Proceed</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'uro-to-fr1',
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
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null
        },
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

<style scoped>
.max300 {
  max-height: 300px !important;
  overflow: scroll;
}
</style>
