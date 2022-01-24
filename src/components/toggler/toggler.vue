<template>
  <button :class="['toggler', { '--active' : isOpened }]" @click="toggle">
    <span class="toggler__text">
      {{ isOpened ? 'Hide' : 'Show' }} issues
    </span>
    <span class="toggler__icon">
      <icon name="arrow"/>
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'toggler',
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  emits: ['onToggle'],
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style src="./toggler.scss" lang="scss" scoped></style>
