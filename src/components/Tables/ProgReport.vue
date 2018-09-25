<template>
  <div class="max300">
      <md-button @click="goBack" class="md-raised md-danger">Go Back</md-button>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Posted">{{ item.time_posted }}</md-table-cell>
        <md-table-cell md-label="Message">{{ item.message }}</md-table-cell>
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

<script> // TODO
export default {
  name: 'fr-to-uro2',
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
          time_posted: '01/15/2018 12:30:02',
          message: 'Revised the objectives'
        },
        {
          time_posted: '01/08/2018 01:02:35',
          message: 'Revised the section 8'
        },
        {
          time_posted: '01/02/2018 11:20:05',
          message: 'Revised the section 7'
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

<style scoped>
.max300 {
  max-height: 500px !important;
  overflow: scroll;
}
</style>
