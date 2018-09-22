<template>
  <div class="max300">
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-headline md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="User ID">{{ item.user_id }}</md-table-cell>
        <md-table-cell md-label="User Name">{{ item.user_name }}</md-table-cell>
        <md-table-cell md-label="Transaction">{{ item.transaction }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<style scoped>
.max300 {
  max-height: 400px !important;
  overflow: scroll;
}
</style>

<script>
export default {
  name: 'audit-trail',
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
          user_id: '2015101343',
          user_name: 'ivan',
          time_date: '1:15:22 02/15/18',
          transaction: 'Login'
        },
        {
          user_id: '2015102547',
          user_name: 'michelle',
          time_date: '5:30:12 01/08/18',
          transaction: 'Logout'
        },
        {
          user_id: '2015202345',
          user_name: 'nomar',
          time_date: '10:30:02 12/15/17',
          transaction: 'update profile'
        },
        {
          user_id: '2015202345',
          user_name: 'nomar',
          time_date: '10:30:02 12/15/17',
          transaction: 'update profile'
        },
        {
          user_id: '2015202345',
          user_name: 'nomar',
          time_date: '10:30:02 12/15/17',
          transaction: 'update profile'
        },
        {
          user_id: '2015202345',
          user_name: 'nomar',
          time_date: '10:30:02 12/15/17',
          transaction: 'update profile'
        },
        {
          user_id: '2015202345',
          user_name: 'nomar',
          time_date: '10:30:02 12/15/17',
          transaction: 'update profile'
        },
        {
          user_id: '2015202345',
          user_name: 'nomar',
          time_date: '10:30:02 12/15/17',
          transaction: 'update profile'
        },
        {
          user_id: '2015202345',
          user_name: 'nomar',
          time_date: '10:30:02 12/15/17',
          transaction: 'update profile'
        },
        {
          user_id: '2015202345',
          user_name: 'nomar',
          time_date: '10:30:02 12/15/17',
          transaction: 'update profile'
        },
        {
          user_id: '2015202345',
          user_name: 'nomar',
          time_date: '10:30:02 12/15/17',
          transaction: 'update profile'
        },
        {
          user_id: '2014875963',
          user_name: 'anjeanette',
          time_date: '11:30:02 02/15/18',
          transaction: 'Upload File'
        }
      ]
    }
  }
}
</script>
