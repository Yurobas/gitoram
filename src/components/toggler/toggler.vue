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
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style scoped>

  .toggler {
    display: flex;
    align-items: center;
  }

  .toggler.--active .toggler__icon {
    transform: rotate3d(0, 0, 1, 0deg);
  }

  .toggler__text {
    margin-right: 5px;
    font-size: 14px;
  }

  .toggler__icon {
    width: 10px;
    transform: rotate3d(0, 0, 1, 180deg);
  }

</style>
