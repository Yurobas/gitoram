<template>
  <button class="user" @click="$emit('onClick')">
    <div class="user__pic">
      <avatar :size="size" :border="border" :image="avatar"/>
    </div>
    <div class="user__name">{{ name }}</div>
  </button>
</template>

<script>
import { avatar } from '../../components/avatar'

export default {
  name: 'user',
  components: {
    avatar
  },
  emits: ['onClick'],
  props: {
    size: String,
    border: Boolean,
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./user.scss" lang="scss" scoped></style>
