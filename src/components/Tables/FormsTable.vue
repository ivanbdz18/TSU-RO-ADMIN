<template>
  <div>
    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Do You Really Want To Update/Replace?"
      md-content="Replacing the current file."
      md-confirm-text="Yes"
      md-cancel-text="No"
      @md-cancel="onCancel"
      @md-confirm="onConfirm" />
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Form Name">{{ item.forms }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="bottom">Download</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-primary" @click="active = true">
            <md-icon>vertical_align_top</md-icon>
            <md-tooltip md-direction="bottom">Update/Replace</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>delete_forever</md-icon>
            <md-tooltip md-direction="bottom">Delete</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'forms-table',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      active: false,
      selected: [],
      users: [
        {
          forms: 'TSU-URO-SF-01 Capsule Proposal Form'
        },
        {
          forms: 'TSU-URO-SF-02 College Research Evaluation Committee Form (STEM)'
        },
        {
          forms: 'TSU-URO-SF-03 Researcher’s Profile Form'
        },
        {
          forms: 'TSU-URO-SF-05 UREC Evaluation'
        },
        {
          forms: 'TSU-URO-SF-11 Research Status Monitoring Form'
        },
        {
          forms: 'TSU-URO-SF-26 College Research Evaluation Committee Form (SocSci)'
        },
        {
          forms: 'TSU-URO-SF-29 Notice of Research Proposal Disapproval'
        },
        {
          forms: 'TSU-URO-SF-30 Notice to Proceed'
        },
        {
          forms: 'TSU-URO-SF-32 Revised Research Capsule Proposal'
        },
        {
          forms: 'TSU-URO-SF-33 Checklist of Documents from FR to URO through DRC'
        },
        {
          forms: 'TSU-URO-SF-34 Checklist of Documents from DRC to URO'
        },
        {
          forms: 'TSU-URO-SF-36 Summary of Evaluators Suggestions and Ratings'
        },
        {
          forms: 'TSU-URO-SF-45 Turnitin Run Request Form'
        }
      ]
    }
  },
  methods: {
    onConfirm () {
      this.value = 'Agreed'
    },
    onCancel () {
      this.value = 'Disagreed'
    }
  }
}
</script>
