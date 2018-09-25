<template>
  <form>
    <md-card>
      <md-card-header data-background-color="orange">
        <h4 class="md-title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>ID Number</label>
              <md-input v-model="id_number" type="text" disabled></md-input>
            </md-field>
          </div>
          <!-- <div class="md-layout-item">
            <md-field>
              <label for="college">College and Department</label>
              <md-select v-model="dac" name="dac" id="dac" disabled>
                <md-option value="CCS - Information Technology Department">CCS - Information Technology Department</md-option>
              </md-select>
            </md-field>
          </div> -->
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>First Name</label>
              <md-input v-model="fname" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Middle Name</label>
              <md-input v-model="mname" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Last Name</label>
              <md-input v-model="lname" type="text" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-40">
            <md-field>
              <label>Email</label>
              <md-input v-model="email" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Contact Number</label>
              <md-input v-model="contact_num" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-30">
            <md-field>
              <label>Password</label>
              <md-input v-model="nPass" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success md-body-2">Update Profile</md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from 'axios'
import store from './../../../stores/store'

export default {
  name: 'edit-profile-form',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      id_number: '17-20159',
      lname: 'Campos',
      fname: 'Stiffi',
      mname: 'Ong',
      college: 'College of Computer Studies',
      email: 'stiffi.campos@gmail.com',
      contact_num: '09773798525',
      nPass: ''
    }
  },
  methods: {
    async update () {
      const userId = store.getters.user.id
      const data = {
        new_contact_num: this.contact_num,
        new_pwd: this.nPass
      }
      try {
        await axios.post(`http://172.16.1.63:3000/users/${userId}/new-profile`, data)
        this.$router.push('/profile')
      } catch (e) {
      }
    }
  }
}

</script>
<style>

</style>
