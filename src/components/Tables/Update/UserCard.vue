<template>
  <md-card>
    <md-card-content>
      <h6 class="category text-gray">Administrator</h6>
      <h4 class="card-title">Ivan Dale D. Badbaden</h4>
      <md-button class="md-round md-danger" @click="signOut">Sign Out</md-button>
    </md-card-content>
  </md-card>
</template>
<script> // TODO
export default {
  name: 'user-card',
  props: {
    cardUserImage: {
      type: String,
      default: require('@/assets/img/tim_80x80.png')
    }
  },
  data () {
    return {
    }
  },
  methods: {
    async signOut () {
      this.$router.push('/login')
    }
  }
}

</script>
<style>

</style>
