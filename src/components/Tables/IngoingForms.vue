<template>
  <div class="max300">
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="User Name">{{ item.user_name }}</md-table-cell>
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
        <md-table-cell md-label="Action">
          <md-button to="/comment" class="md-raised md-success">Comment</md-button>
        </md-table-cell>
        <md-table-cell md-label="Status">
          <md-button class="md-raised md-success">Approve</md-button> <!--notify sender na na'approve request nia-->
          <md-button class="md-raised md-danger">Disapprove</md-button> <!--notify sender na na'disapprove request nia-->
        </md-table-cell>
      </md-table-row>>
    </md-table>
  </div>
</template>

<script> // TODO
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
          time_date: '2:5:45 02/15/18',
          user_name: 'Stiffi Ramos',
          forms: 'TSU-RO-SF-15'
        },
        {
          time_date: '1:15:15 02/10/18',
          user_name: 'Michelle Quibuyen',
          forms: 'TSU-RO-SF-01'
        },
        {
          time_date: '5:25:22 02/08/18',
          user_name: 'Mikaela Reyes',
          forms: 'TSU-RO-SF-06'
        },
        {
          time_date: '4:25:40 02/08/18',
          user_name: 'Rica Manalang',
          forms: 'TSU-RO-SF-12'
        },
        {
          time_date: '2:12:22 02/08/18',
          user_name: 'Anjeantte Francia',
          forms: 'TSU-RO-SF-14'
        },
        {
          time_date: '5:25:22 02/08/18',
          user_name: 'Joshua Manalo',
          forms: 'TSU-RO-SF-32'
        },
        {
          time_date: '1:30:05 02/07/18',
          user_name: 'Hannah Yabut',
          forms: 'TSU-RO-SF-12'
        }
      ]
    }
  }
}
</script>

<style scoped>
.max300 {
  max-height: 400px !important;
  overflow: scroll;
}
</style>
