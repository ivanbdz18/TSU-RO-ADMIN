<template>
  <div class="max300">
    <md-table v-model="users" table-header-color="orange">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
        <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
        <md-table-cell md-label="University Agenda">{{ item.univAgenda }}</md-table-cell>
        <md-table-cell md-label="Funding Type">
          <md-field>
              <label for="funding">Funding</label>
              <md-select v-model="item.funding" name="funding" id="funding">
                <md-option value="Internal Funding">Internal Funding</md-option>
                <md-option value="External Funding">External Funding</md-option>
              </md-select>
            </md-field>
        </md-table-cell>
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
  name: 'uro-to-fr2',
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
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null,
          funding: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null,
          funding: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null,
          funding: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null,
          funding: null
        }
      ]
    }
  }
}
</script>

<style scoped>
.max300 {
  max-height: 500px !important;
  overflow: scroll;
}
</style>
