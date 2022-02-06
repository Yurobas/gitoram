<template>
  <div class="preloader">
    <div :style="{width: `${size}px`}" class="preloader__icon">
      <icon name="preloader"/>
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'preloader',
  props: {
    size: Number
  },
  components: { icon }
}
</script>

<style src="./preloader.scss" lang="scss"></style>
