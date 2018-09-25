<<<<<<< HEAD
<template>
  <div class="max300">
    <md-table v-model="users" table-header-color="orange">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.time_date }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Authors">{{ item.authors }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell> <!-- posted dapat di napapalitan -->
        <md-table-cell md-label="Grade in UREC">
          <md-field>
              <label>Input Grade</label>
              <md-input v-model="item.gradeUrec" type="text"></md-input>
          </md-field>
        </md-table-cell> <!-- need mag input -->
        <md-table-cell md-label="University Agenda">
          <md-field>
              <label for="agenda">Agenda</label>
              <md-select v-model="univAgenda" name="agenda" id="agenda">
                <md-option value="Environment and Climate Change Mitigation">Environment and Climate Change Mitigation</md-option>
                <md-option value="Foods, Natural Products and Health Research">Foods, Natural Products and Health Research</md-option>
                <md-option value="Industry, Energy, and Emerging Technologies">Industry, Energy, and Emerging Technologies</md-option>
                <md-option value="Sustainability Technology">Sustainability Technology</md-option>
                <md-option value="Public Policy and Social Praxis">Public Policy and Social Praxis</md-option>
                <md-option value="Design and Validation of Software">Design and Validation of Software</md-option>
                <md-option value="Gender and Development Studies">Gender and Development Studies</md-option>
              </md-select>
            </md-field>
        </md-table-cell> <!-- need mag input (dropdown)-->
        <md-table-cell md-label="Actions">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="top">Download</md-tooltip> <!--notify sender na na'receive request nia-->
          </md-button>
          <md-button to="/comment" class="md-just-icon md-simple md-primary">
            <md-icon>add_comment</md-icon>
            <md-tooltip md-direction="top">Comment</md-tooltip>
          </md-button>
        </md-table-cell>
        <md-table-cell md-label="Proceed">
          <md-button class="md-raised md-success">Proceed</md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script> //TODO
export default {
  name: 'uro-to-fr1',
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
          time_date: '02:14:02 05/15/18',
          tracking_number: '80cd9201-7e2e-457b',
          title: 'The Impact of Decimalization on Market Volatility and Liquidity ',
          authors: 'Jamaica Hellen',
          gradeCol: '85.25'
        },
        {
          time_date: '09:25:15 05/11/18',
          tracking_number: '02kd1239-0d9g-127b',
          title: 'Exchange Rate Market Pressure and The Quality of Governance ',
          authors: 'Domino Abella',
          gradeCol: '75.52'
        },
        {
          time_date: '08:52:15 05/08/18',
          tracking_number: '96sd4513-os9d-748b',
          title: 'Changes in Perceived Risk and Liquidity Shocks and Its Impact on Risk Premiums ',
          authors: 'Hannah Dominic',
          gradeCol: '78.15'
        },
        {
          time_date: '11:26:14 04/24/18',
          tracking_number: '89ks3186-8ss8-asd9',
          title: 'Can Online Word of Mouth Assign a Product Price? ',
          authors: 'Phillip Torres',
          gradeCol: '75.38'
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
    <md-table v-model="documentsState8" table-header-color="orange">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Time Date">{{ item.received }}</md-table-cell>
        <md-table-cell md-label="Tracking No.">{{ item.tracking_number }}</md-table-cell>
        <md-table-cell md-label="Research Title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell> <!-- posted dapat di napapalitan -->
        <md-table-cell md-label="Grade in UREC">
          <md-field>
              <label>Input Grade</label>
              <md-input v-model="item.gradeUrec" type="text"></md-input>
          </md-field>
        </md-table-cell> <!-- need mag input -->
        <md-table-cell md-label="University Agenda">
          <md-field>
              <label for="agenda">Agenda</label>
              <md-select v-model="univAgenda" name="agenda" id="agenda">
                <md-option value="Environment and Climate Change Mitigation">Environment and Climate Change Mitigation</md-option>
                <md-option value="Foods, Natural Products and Health Research">Foods, Natural Products and Health Research</md-option>
                <md-option value="Industry, Energy, and Emerging Technologies">Industry, Energy, and Emerging Technologies</md-option>
                <md-option value="Sustainability Technology">Sustainability Technology</md-option>
                <md-option value="Public Policy and Social Praxis">Public Policy and Social Praxis</md-option>
                <md-option value="Design and Validation of Software">Design and Validation of Software</md-option>
                <md-option value="Gender and Development Studies">Gender and Development Studies</md-option>
              </md-select>
            </md-field>
        </md-table-cell> <!-- need mag input (dropdown)-->
        <md-table-cell md-label="Actions">
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>get_app</md-icon>
            <md-tooltip md-direction="top">Download</md-tooltip> <!--notify sender na na'receive request nia-->
          </md-button>
          <md-button to="/comment" class="md-just-icon md-simple md-primary">
            <md-icon>add_comment</md-icon>
            <md-tooltip md-direction="top" :to="`/comment?document=${item.id}&state=8`">Comment</md-tooltip>
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
  name: 'uro-to-fr1',
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
    proceed: async function (documentId) {
      const rootApi = process.env.VUE_APP_ROOT_API
      await axios.post(`${rootApi}/documents/${documentId}/release`)
      await this.getDocuments()
    },
    getDocuments: async function () {
      const rootApi = process.env.VUE_APP_ROOT_API
      this.documents = (await axios.get(`${rootApi}/documents`)).data
      this.documentsState8 = this.documents.filter(d => d.state === 8 && d.received !== null)
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
>>>>>>> 16c1a65dc68a8ccf48e8db9e421cc11dc2764a08
