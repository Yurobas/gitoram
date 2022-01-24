<template>
  <header class="topline">
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
  name: 'topline'
}
</script>

<style src="./topline.scss" lang="scss" scoped></style>
