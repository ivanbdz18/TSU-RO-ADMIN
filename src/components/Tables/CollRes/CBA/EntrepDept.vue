<template>
  <div>
    <md-button @click="goBack" class="md-raised md-danger">Go Back</md-button>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Track No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Author">{{ item.author }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button to="tracking" class="md-just-icon md-simple md-primary">
            <md-icon>remove_red_eye</md-icon>
            <md-tooltip md-direction="bottom">View Tracking</md-tooltip>
          </md-button>
          <md-button to="progressreport" class="md-just-icon md-simple md-primary">
            <md-icon>ballot</md-icon>
            <md-tooltip md-direction="bottom">Progress Report</md-tooltip>
          </md-button>
          <md-button to="fullresdetail" class="md-just-icon md-simple md-primary">
            <md-icon>assignment</md-icon>
            <md-tooltip md-direction="bottom">Full Research Detail</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'entrep-dept',
  data () {
    return {
      selected: [],
      users: [
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
        },
        {
          track: null,
          title: null,
          author: null
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
