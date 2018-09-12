<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }"> <!--if you want the rows like a check list "md-selectable="multiple" md-auto-select"-->
        <md-table-cell md-label="Titles">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'nav-tabs-table-Urec',
  data () {
    return {
      selected: [],
      users: [
        {
          name: 'Batman'
        },
        {
          name: 'Superman'
        },
        {
          name: 'Wonderwoman'
        }
      ]
    }
  }
}
</script>
