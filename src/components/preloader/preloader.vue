<template>
  <div class="preloader">
    <div class="preloader__icon">
      <icon name="preloader"/>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'preloader',
  components: { icon }
}
</script>

<style src="./preloader.scss" lang="scss"></style>
