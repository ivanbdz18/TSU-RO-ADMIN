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

<script> //TODO
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
          user_id: '15-12056',
          user_name: 'Ivan Badbaden',
          time_date: '1:15:22 02/15/18',
          transaction: 'Login'
        },
        {
          user_id: '12-85695',
          user_name: 'Michelle Quibuyen',
          time_date: '5:30:12 01/08/18',
          transaction: 'Login'
        },
        {
          user_id: '17-01382',
          user_name: 'Nomar Lapitan',
          time_date: '10:30:02 12/15/17',
          transaction: 'Update Profile'
        },
        {
          user_id: '05-20159',
          user_name: 'Anjeanette Francia',
          time_date: '11:20:02 12/15/17',
          transaction: 'Received the documents'
        },
        {
          user_id: '11-85469',
          user_name: 'Isaiah Cruz',
          time_date: '10:30:15 12/15/17',
          transaction: 'Uploaded a file'
        },
        {
          user_id: '16-85231',
          user_name: 'Janielle Viadan',
          time_date: '10:30:13 12/15/17',
          transaction: 'Created account'
        },
        {
          user_id: '11-82545',
          user_name: 'Kevein Morales',
          time_date: '05:18:45 12/12/17',
          transaction: 'update profile'
        },
        {
          user_id: '16-24684',
          user_name: 'Erandy Magdaleno',
          time_date: '05:20:25 12/15/17',
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
