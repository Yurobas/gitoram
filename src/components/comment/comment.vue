<template>
  <p class="comment">
    <span class="comment__author">{{ author }}</span>
    <span class="comment__text">{{ text }}</span>
  </p>
</template>

<script>
export default {
  name: 'comment',
  props: {
    author: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./comment.scss" lang="scss" scoped></style>
