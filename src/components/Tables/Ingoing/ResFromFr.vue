<template>
  <div class="max300">
    <md-table v-model="documentsState8" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{item}">
        <md-table-cell md-label="Time Date">{{ item.prev_release }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Authors">{{ item.authors }}</md-table-cell>
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
  name: 'res-from-fr',
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
      documentsState8: [
        {
          prev_release: '10:30:02 05/15/18',
          tracking_number: '80cd9201-7e2e-457b',
          authors: 'Ivan Badbaden, Anjeanette Francia',
          title: 'Faculty Research Management System'
        },
        {
          prev_release: '10:30:02 05/12/18',
          tracking_number: '80rt9251-7d8e-857b',
          authors: 'Nomar Lapitan, Michelle Quibuyen',
          title: 'Faculty Research Tracking System'
        },
        {
          prev_release: '10:30:02 05/14/18',
          tracking_number: '84cd1221-7s1w-523c',
          authors: 'Isaiah Cruz, Kristine Turato',
          title: 'POS for TSU Canteen'
        },
        {
          prev_release: '10:30:02 04/08/18',
          tracking_number: '90gh9562-5e4d-217r',
          authors: 'Erandy Magdaleno, Joshua Manalo',
          title: 'Antitrust Law and the Promotion of Democracy and Economic Growth'
        },
        {
          prev_release: '10:30:02 04/07/18',
          tracking_number: '79tt9451-7e2e-987j',
          authors: 'Kevin Morales, Justine Yusi',
          title: 'An Analysis of Keynesian Economics'
        },
        {
          prev_release: '10:30:02 04/04/18',
          tracking_number: '73du2148-9f6g-124f',
          title: 'Who Will Pay to Reduce Global Warming?  A Multivariate Analysis of Concern, Efficacy, and Action'
        },
        {
          prev_release: '10:30:02 04/15/18',
          tracking_number: '84ip6484-3j0s-123pj',
          title: 'Evaluating the Impact of Supply-side Factors on Conditional Cash Transfer Programs: The Case of Nicaragua '
        }
      ]
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
