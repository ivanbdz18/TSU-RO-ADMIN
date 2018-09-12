<template>
  <div>
    <md-table v-model="users" @md-selected="onSelect">
      <md-table-row slot="md-table-row" slot-scope="{ item }">  <!--slot-scope="{ item }" md-selectable="multiple" md-auto-select-->
        <md-table-cell>{{ item.name }}</md-table-cell>
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
  name: 'nav-tabs-table-Rerc',
  data () {
    return {
      selected: [],
      users: [
        {
          name: 'Power Ranger Red'
        },
        {
          name: 'Power Ranger Blue'
        },
        {
          name: 'Power Range Black'
        }
      ]
    }
  },
  methods: {
    onSelect: function (items) {
      this.selected = items
    }
  }
}
</script>
