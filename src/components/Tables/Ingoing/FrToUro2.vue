<<<<<<< HEAD
<template>
  <div class="max300">
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Action">
          <md-button class="md-raised md-success">Receive</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
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
          trackNo: 1001,
          ResTitle: 'Dakota Rice',
          time_date: '10:30:02/02/15/18',
          transaction: 'Niger'
        },
        {
          trackNo: 1002,
          ResTitle: 'Dakota Rice',
          time_date: '10:30:02/02/15/18',
          transaction: 'Niger'
        },
        {
          trackNo: 1003,
          ResTitle: 'Dakota Rice',
          time_date: '10:30:02/02/15/18',
          transaction: 'Niger'
        },
        {
          trackNo: 1004,
          ResTitle: 'Dakota Rice',
          time_date: '10:30:02/02/15/18',
          transaction: 'Niger'
        }
      ]
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
=======
<template>
  <div class="max300">
    <md-table v-model="documentsState12" :table-header-color="tableHeaderColor">
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
      documents: [],
      documentsState12: []
    }
  },
  created: async function () {
    await this.getDocuments()
  },
  methods: {
    getDocuments: async function () {
      const rootApi = process.env.VUE_APP_ROOT_API
      this.documents = (await axios.get(`${rootApi}/documents`)).data
      this.documentsState12 = this.documents.filter(d => d.state === 12 && d.received === null)
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
>>>>>>> 16c1a65dc68a8ccf48e8db9e421cc11dc2764a08
