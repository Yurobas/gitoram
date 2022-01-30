<template>
  <div :class={active} class="progress">
    <div ref="indicator" class="progress__line"></div>
  </div>
</template>

<script>
export default {
  name: 'progress',
  props: {
    active: Boolean
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

<style src="./progress.scss" lang="scss"></style>
