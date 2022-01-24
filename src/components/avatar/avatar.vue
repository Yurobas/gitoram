<template>
  <div class="avatar">
    <img class="avatar__image" :src=image alt="User Avatar">
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    image: String
  }
}
</script>

<style src="./avatar.scss" lang="scss" scoped></style>
