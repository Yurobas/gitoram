<template>
  <div class="logo">
    <icon name="logo"/>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'logo',
  components: {
    icon
  }
}
</script>

<style scoped>
  .logo {
    width: 174px;
  }
</style>
