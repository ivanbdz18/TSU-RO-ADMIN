<template>
  <div class="max300">
    <md-table v-model="documentsState8" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{item}">
        <md-table-cell md-label="Time Date">{{ item.prev_release }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-raised md-success" @click.native="receiveDocument(item.id)">Receive</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'res-from-urec',
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
      documentsState8: []
    }
  },
  created: async function () {
    await this.getDocuments()
  },
  methods: {
    getDocuments: async function () {
      const rootApi = process.env.VUE_APP_ROOT_API
      this.documents = (await axios.get(`${rootApi}/documents`)).data
      this.documentsState8 = this.documents.filter(d => d.state === 8 && d.received === null)
      // this.documentsState12 = this.documents.filter(d => d.state === 12)
      // this.documentsState14 = this.documents.filter(d => d.state === 14)
    },
    receiveDocument: async function (documentId) {
      const rootApi = process.env.VUE_APP_ROOT_API
      await axios.post(`${rootApi}/documents/${documentId}/receive`)
      await this.getDocuments()
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
