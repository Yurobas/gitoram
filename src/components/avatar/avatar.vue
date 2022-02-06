<template>
  <div :class="[size, {border}]" class="avatar">
    <img class="avatar__image" :src=image alt="User Avatar">
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    image: String,
    size: String,
    border: Boolean
  }
}
</script>

<style src="./avatar.scss" lang="scss" scoped></style>
