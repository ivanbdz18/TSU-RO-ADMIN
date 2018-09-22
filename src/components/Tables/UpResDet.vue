<template>
   <md-table v-model="users" table-header-color="orange">
                  <md-table-row slot="md-table-row" slot-scope="{ item }">
                  <md-table-cell md-label="Tracking Number">{{ item.posted }}</md-table-cell>
                  <md-table-cell md-label="Research Title">{{ item.released }}</md-table-cell>
                  <md-table-cell md-label="Authors">{{ item.authors }}</md-table-cell>
                  <md-table-cell md-label="Grade in Colloquium">{{ item.gradeCol }}</md-table-cell>
                  <md-table-cell md-label="Grade in UREC">
                    <md-input v-model="gradeUrec" type="number"></md-input>
                  </md-table-cell>
                  <md-table-cell md-label="Incentives">
                    <md-input v-model="incentive" type="number"></md-input>
                  </md-table-cell>
                  <md-table-cell md-label="University Research Agenda">
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
                  </md-table-cell>
                  <md-table-cell md-label="Funding">
                    <md-field>
                      <label for="funding">Funding</label>
                        <md-select v-model="item.funding" name="funding" id="funding">
                          <md-option value="Internal Funding">Internal Funding</md-option>
                          <md-option value="External Funding">External Funding</md-option>
                        </md-select>
                    </md-field>
                  </md-table-cell>
                  </md-table-row>
                </md-table>
</template>
<script>
export default {
  name: 'up-res-det',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      id_number: '',
      lname: '',
      fname: '',
      mname: '',
      college: 'College of Computer Studies',
      email: '',
      contact_num: '',
      nPass: ''
    }
  }
}
</script>
