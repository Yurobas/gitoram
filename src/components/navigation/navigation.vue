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
          <img class="nav__image" :src="profile.avatar" alt="User Avatar">
        </a>
      </li>
      <li class="nav__item --logout">
        <a href="#0" class="nav__link">
          <icon name="logout"/>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'navigation',
  components: {
    icon
  },
  props: {
    profile: {
      type: Object
    }
  }
}
</script>

<style src="./navigation.scss" lang="scss" scoped></style>
