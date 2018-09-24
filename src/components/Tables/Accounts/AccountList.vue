<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Accounts">{{ item.accounts }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button to="reslist" class="md-just-icon md-simple md-primary">
            <md-icon>remove_red_eye</md-icon>
            <md-tooltip md-direction="bottom">View</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script> // TODO
export default {
  name: 'account-list',
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
          accounts: 'Faculty Researcher'
        },
        {
          accounts: 'Department Research Chairperson'
        },
        {
          accounts: 'Office Clerks'
        }
      ]
    }
  }
}
</script>
