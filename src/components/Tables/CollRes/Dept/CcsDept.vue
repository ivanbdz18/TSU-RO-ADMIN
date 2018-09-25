<template>
  <div>
    <!-- <md-button @click="goBack" class="md-raised md-danger">Go Back</md-button> -->
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Department">{{ item.department }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button to="tracking" class="md-just-icon md-simple md-primary">
            <md-icon>remove_red_eye</md-icon>
            <md-tooltip md-direction="bottom">View Tracking</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script> // TODO
export default {
  name: 'ccs-dept',
  data () {
    return {
      selected: [],
      users: [
        {
          department: 'Information Technology Department'
        },
        {
          department: 'Computer Science Department'
        },
        {
          department: 'Information System Department'
        }
      ]
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}
</script>
