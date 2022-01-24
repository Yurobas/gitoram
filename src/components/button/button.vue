<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: 'xButton',
  props: {
    text: String
  }
}
</script>

<style src="./button.scss" lang="scss"></style>
