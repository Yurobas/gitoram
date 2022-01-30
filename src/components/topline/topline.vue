<template>
  <header class="topline" :class="{dark : isDark}">
    <div class="container">
      <div class="topline__row">
        <slot name="top"/>
      </div>
      <div class="topline__row" v-if="$slots.bottom">
        <slot name="bottom"/>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'topline',
  props: {
    isDark: Boolean
  }
}
</script>

<style src="./topline.scss" lang="scss"></style>
