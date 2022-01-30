<template>
  <div class="contentPlaceholder">
    <div class="contentPlaceholder__image"></div>
    <ul class="contentPlaceholder__list">
      <li class="contentPlaceholder__item" v-for="n of paragraphs" :key="paragraphs[n]">
        <span></span>
        <span></span>
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'contentPlaceholder',
  props: {
    paragraphs: Number
  }
}
</script>

<style src="./contentPlaceholder.scss" lang="scss"></style>
