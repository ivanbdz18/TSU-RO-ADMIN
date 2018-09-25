<template>
  <form>
    <md-card>
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-80 ">
            <md-field>
              <label>Input Form Name</label>
              <md-input v-model="researchtitle" type="text" required></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-60">
            <!-- <md-input type="file" name="datafile" class="md-raised md-success"></md-input> -->
            <md-field>
              <label>Insert File</label>
              <md-file v-model="files" multiple required/>
              </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">ADD</md-button>
          </div>
        </div>

      </md-card-content>
    </md-card>
  </form>
</template>

<script>
export default {
  name: 'add-form',
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
  }
}

</script>
