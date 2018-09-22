<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Change Password</h4>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>New Password</label>
              <md-input v-model="nPass" type="password"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Confirm Password</label>
              <md-input v-model="cnPass" type="password"></md-input>
            </md-field>
          </div>
        </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="update">Update Password</md-button>
          </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from 'axios'
import store from './../stores/store'

export default {
  name: 'edit-password',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      nPass: '',
      cnPass: ''
    }
  },
  methods: {
    async update () {
      const userId = store.getters.user.id
      const data = {
        new_pwd: this.nPass
      }
      try {
        await axios.post(`http://172.16.1.63:3000/users/${userId}/new-password`, data)
        this.$router.push('/documents')
      } catch (e) {
      }
    }
  }
}

</script>
<style>

</style>
