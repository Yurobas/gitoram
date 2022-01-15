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

<style scoped>

  .nav__list {
    display: flex;
    align-items: center;
  }

  .nav__item.--home {
    width: 24px;
  }

  .nav__item.--profile .nav__link {
    display: block;
    width: 53px;
    height: 53px;
    margin: 0 19px 0 24px;
    padding: 6px;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: border-color .25s ease, box-shadow .25s ease;
  }

  .nav__item.--profile:hover .nav__link {
    border-color: #31AE54;;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
  }

  .nav__item.--logout {
    width: 25px;
  }

  .nav__item:hover {
    color: #31AE54;
  }

</style>
