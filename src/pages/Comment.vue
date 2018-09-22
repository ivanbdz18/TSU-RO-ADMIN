<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <comments data-background-color="purple">

        </comments>
      </div>
    </div>
  </div>
</template>
<style>
.md-menu-content{
  max-width: 750px !important;
}
</style>

<script>
import {
  Comments
} from '@/components'

export default{
  components: {
    Comments
  }
}
</script>
