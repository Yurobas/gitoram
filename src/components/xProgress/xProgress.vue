<template>
  <div :class="{active}" class="progress">
    <div ref="indicator" class="progress__line"></div>
  </div>
</template>

<script>
export default {
  name: 'xProgress',
  props: {
    active: {
      type: Boolean
    }
  },
  emits: ['onProgressFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onProgressFinish')
    }
  },
  mounted () {
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style src="./xProgress.scss" lang="scss"></style>
