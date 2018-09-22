<template>
    <div class="centered-container">
        <md-content class="md-elevation-3">

            <div class="title">
            <img src="@/assets/img/tsu-logo.png">
            <div class="md-title">TSU - Research Office</div>
            <div class="md-body-1">Faculty Research Management and Tracking</div>
            </div>

            <div class="form">
            <md-field>
            <label>ID Number</label>
            <md-input v-model="login.id" autofocus></md-input>
            </md-field>

            <md-field md-has-password>
            <label>Password</label>
            <md-input v-model="login.password" type="password"></md-input>
            </md-field>
            </div>

            <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success" @click="auth">Log in</md-button>
            </div>
        </md-content>
        <div class="background" />
    </div>
</template>

<script>
import axios from 'axios'
import store from './../stores/store'

export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      login: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    async auth () {
      this.loading = true
      const data = {
        id_number: this.login.id,
        pwd: this.login.password
      }
      const user = await axios.post('http://172.16.1.63:3000/users/login', data)
      store.commit('login', user.data)
      if (user.data.agreed) {
        this.$router.push('/documents')
      } else {
        this.$router.push('/terms')
      }
    }
  }
}
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 80px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 0;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
}
</style>
