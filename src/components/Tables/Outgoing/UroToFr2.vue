<template>
  <div class="max300">
    <md-table v-model="documentsState14" table-header-color="orange">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
        <md-table-cell md-label="Grade in UREC">{{ item.gradeUrec }}</md-table-cell>
        <md-table-cell md-label="University Agenda">{{ item.univAgenda }}</md-table-cell>
        <md-table-cell md-label="Funding Type">
          <md-field>
              <label for="funding">Funding</label>
              <md-select v-model="item.funding" name="funding" id="funding">
                <md-option value="Internal Funding">Internal Funding</md-option>
                <md-option value="External Funding">External Funding</md-option>
              </md-select>
            </md-field>
        </md-table-cell>
        <md-table-cell md-label="Actions">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="top">Download</md-tooltip>
          </md-button>
          <md-button to="/comment" class="md-just-icon md-simple md-primary">
            <md-icon>add_comment</md-icon>
            <md-tooltip md-direction="top">Comment</md-tooltip>
          </md-button>
        </md-table-cell>
        <md-table-cell md-label="Proceed">
          <md-button class="md-raised md-success" @click.native="proceed(item.id)">Proceed</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'uro-to-fr2',
  props: {
    tableHeaderColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selected: [],
      documents: [],
      documentsState14: []
    }
  },
  created: async function () {
    await this.getDocuments()
  },
  methods: {
    proceed: async function (documentId) {
      const rootApi = process.env.VUE_APP_ROOT_API
      await axios.post(`${rootApi}/documents/${documentId}/release`)
      await this.getDocuments()
    },
    getDocuments: async function () {
      const rootApi = process.env.VUE_APP_ROOT_API
      this.documents = (await axios.get(`${rootApi}/documents`)).data
      this.documentsState14 = this.documents.filter(d => d.state === 14 && d.received !== null)
    }
  }
}
</script>

<style scoped>
.max300 {
  max-height: 300px !important;
  overflow: scroll;
}
</style>
