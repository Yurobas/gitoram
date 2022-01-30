<template>
  <div class="logo" @click="$router.push('/')">
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

<style src="./logo.scss" lang="scss" scoped></style>
