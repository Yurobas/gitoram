<template>
  <button class="user" @click="$emit('onClick')">
    <div class="user__pic">
      <avatar :image="avatar"/>
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
  props: {
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
