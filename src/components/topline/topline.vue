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

<style scoped>
  .topline {
    padding: 44px 0 32px;
    background-color: #fafafa;
    box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
  }
  .topline__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .topline__row + .topline__row {
    margin-top: 28px;
  }
</style>
