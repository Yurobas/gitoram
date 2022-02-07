<template>
  <ul class="stats">
    <li class="stats__item --stars">
      <button class="stats__block stats__button" @click="$emit('handleStar')">
        <icon class="stats__icon" name="star"/>
        Star
      </button>
      <div class="stats__block">{{ stars }}</div>
    </li>
    <li class="stats__item --forks">
      <button class="stats__block stats__button">
        <icon class="stats__icon" name="fork"/>
        Fork
      </button>
      <div class="stats__block">{{ forks }}</div>
    </li>
  </ul>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'stats',
  components: {
    icon
  },
  emits: ['handleStar'],
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>

<style src="./stats.scss" lang="scss" scoped></style>
