<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Department">{{ item.dept }}</md-table-cell>
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

<script>
export default {
  name: 'coed-dept',
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
          dept: 'Elementary Education'
        },
        {
          dept: 'Secondary Education'
        },
        {
          dept: 'Education'
        },
        {
          dept: 'Early Childhood Education'
        },
        {
          dept: 'Technical Vocational Teacher Education'
        },
        {
          dept: 'Cultural and Arts Education'
        },
        {
          dept: 'Technology and Livelihood Education'
        },
        {
          dept: 'Physical Education'
        },
        {
          dept: 'Special Needs Education'
        }
      ]
    }
  }
}
</script>
