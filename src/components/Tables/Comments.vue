<template>
  <form>
    <md-card>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Message / Comment:</label>
              <md-textarea v-model="message"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button @click="goBack" class="md-raised md-danger">Go Back</md-button>
            <md-button class="md-raised md-success">Send</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>
<script>
export default {
  name: 'comments',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    }
  }
}

</script>
