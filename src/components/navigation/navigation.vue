<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item --home">
        <a href="#0" class="nav__link">
          <icon name="home"/>
        </a>
      </li>
      <li class="nav__item --profile">
        <a href="#0" class="nav__link">
          <avatar size="mini" :image="avatar_url"/>
        </a>
      </li>
      <li class="nav__item --logout">
        <a href="#0" class="nav__link" @click="$emit('logout')">
          <icon name="logout"/>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { avatar } from '../../components/avatar'
import { icon } from '../../icons'

export default {
  name: 'navigation',
  components: {
    icon,
    avatar
  },
  emits: ['logout'],
  props: {
    avatar_url: String
  }
}
</script>

<style src="./navigation.scss" lang="scss" scoped></style>
