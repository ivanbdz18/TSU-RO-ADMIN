<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="User ID">{{ item.user_id }}</md-table-cell>
        <md-table-cell md-label="Form Type">{{ item.forms }}</md-table-cell>
          <md-table-cell md-label="Actions">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="top">Download</md-tooltip> <!--notify sender na na'receive request nia-->
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>delete_forever</md-icon>
            <md-tooltip md-direction="top">Delete</md-tooltip>
          </md-button>
        </md-table-cell>
        <md-table-cell md-label="Status">
          <md-button class="md-raised md-success">Approve</md-button> <!--notify sender na na'approve request nia-->
          <md-button class="md-raised md-danger">Disapprove</md-button> <!--notify sender na na'disapprove request nia-->
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'ingoing-forms',
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
