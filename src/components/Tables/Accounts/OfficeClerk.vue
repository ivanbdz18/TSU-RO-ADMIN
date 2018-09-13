<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="User ID">{{ item.userId }}</md-table-cell>
        <md-table-cell md-label="First Name">{{ item.fname }}</md-table-cell>
        <md-table-cell md-label="Middle Name">{{ item.mname }}</md-table-cell>
        <md-table-cell md-label="Last Name">{{ item.lname }}</md-table-cell>
        <md-table-cell md-label="Office">{{ item.office }}</md-table-cell> <!--names of offices like CREC, RERC, and OUP -->
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Contact Number">{{ item.contactNum }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'office-clerk',
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
