<template>
  <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="md-title">Edit Research Input</h4>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Tracking Number</label>
              <md-input v-model="tracking_number" type="number" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Research Title</label>
              <md-input v-model="research_title" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Co Authors</label>
              <md-input v-model="resear_title" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label for="college">Grade In Colloquium</label>
              <md-input v-model="gradeCol" type="number" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label for="college">Grade In UREC</label>
              <md-input v-model="gradeUrec" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label for="college">Incentive</label>
              <md-input v-model="incentive" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
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
          </div>
          <div class="md-layout-item">
            <md-field>
              <label for="funding">Funding</label>
              <md-select v-model="item.funding" name="funding" id="funding">
                <md-option value="Internal Funding">Internal Funding</md-option>
                <md-option value="External Funding">External Funding</md-option>
              </md-select>
            </md-field>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: 'update-res-detail',
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
<style>

</style>
