<template>
  <div class="max300">
    <md-table v-model="users" table-header-color="orange">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell> <!-- posted dapat di napapalitan -->
        <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell> <!-- need mag input -->
        <md-table-cell md-label="University Agenda">{{ item.univAgenda }}</md-table-cell> <!-- need mag input (dropdown)-->
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
  name: 'uro-to-oup',
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
          univAgenda: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null
        },
        {
          time_date: null,
          tracking_number: null,
          title: null,
          gradeCol: null,
          gradeIn: null,
          incentive: null,
          univAgenda: null
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
