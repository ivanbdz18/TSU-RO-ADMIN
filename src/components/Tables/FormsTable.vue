<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.form }}</md-table-cell>
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
      selected: [],
      users: [
        {
          form: 'TSU-URO-SF-01 Capsule Proposal Form'
        },
        {
          form: 'TSU-URO-SF-02 College Research Evaluation Committee Form (STEM)'
        },
        {
          form: 'TSU-URO-SF-03 Researcher’s Profile Form'
        },
        {
          form: 'TSU-URO-SF-04 Request for Incentive of Research Output'
        },
        {
          form: 'TSU-URO-SF-06 Submission of Completed Researches for In-House'
        },
        {
          form: 'TSU-URO-SF-07 Authenticity of Authorship & Commitment to Revise'
        },
        {
          form: 'TSU-URO-SF-11 Research Status Monitoring Form'
        },
        {
          form: 'TSU-URO-SF-16 Turnitin Software Application Form'
        },
        {
          form: 'TSU-URO-SF-19 Request of Fund for Research Related Activity'
        },
        {
          form: 'TSU-URO-SF-24 Research Revision Report'
        },
        {
          form: 'TSU-URO-SF-26 College Research Evaluation Committee Form (SocSci)'
        },
        {
          form: 'TSU-URO-SF-32 Revised Research Capsule Proposal'
        },
        {
          form: 'TSU-URO-SF-33 Checklist of Documents from FR to URO through DRC'
        },
        {
          form: 'TSU-URO-SF-34 Checklist of Documents from DRC to URO'
        },
        {
          form: 'TSU-URO-SF-36 Summary of Evaluators Suggestions and Ratings'
        },
        {
          form: 'TSU-URO-SF-39 Appointment Form'
        },
        {
          form: 'TSU-URO-SF-40 Consultation Report Form'
        },
        {
          form: 'TSU-URO-SF-41 Request for Funding of Paper Publication'
        },
        {
          form: 'TSU-URO-SF-42 Request for Funding of Paper Presentation'
        },
        {
          form: 'TSU-URO-SF-44 Tracer Study Questionnaire'
        },
        {
          form: 'TSU-URO-SF-45 Turnitin Run Request Form'
        }
      ]
    }
  }
}
</script>
