<template>
  <p class="comment">
    <span class="comment__author">{{ author }}</span>
    {{ text }}
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

<style scoped>

  .comment {
    font-size: 14px;
    line-height: 1.57;
  }

  .comment__author {
    display: inline-block;
    margin-right: 5px;
    font-weight: 700;
  }

</style>
