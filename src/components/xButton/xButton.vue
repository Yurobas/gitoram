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

<style src="./xButton.scss" lang="scss"></style>
