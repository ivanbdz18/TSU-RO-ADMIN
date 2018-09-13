<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
        <md-table-cell md-label="Grade in InHouse Review">{{ item.gradeIn }}</md-table-cell>
        <md-table-cell md-label="Incentive">{{ item.incentive }}</md-table-cell>
        <md-table-cell md-label="University Agenda">{{ item.univAgenda }}</md-table-cell>
        <md-table-cell md-label="Funding Type">{{ item.funding }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="bottom">Download</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'college-research',
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
          trackNo: 1001,
          ResTitle: 'Dakota Rice',
          time_date: '10:30:02/02/15/18',
          transaction: 'Niger'
        },
        {
          trackNo: 1002,
          ResTitle: 'Dakota Rice',
          time_date: '10:30:02/02/15/18',
          transaction: 'Niger'
        },
        {
          trackNo: 1003,
          ResTitle: 'Dakota Rice',
          time_date: '10:30:02/02/15/18',
          transaction: 'Niger'
        },
        {
          trackNo: 1004,
          ResTitle: 'Dakota Rice',
          time_date: '10:30:02/02/15/18',
          transaction: 'Niger'
        }
      ]
    }
  }
}
</script>
