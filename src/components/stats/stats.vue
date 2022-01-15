<template>
  <ul class="stats">
    <li class="stats__item --stars">
      <button class="stats__block">
        <icon class="stats__icon" name="star"/>
        Star
      </button>
      <div class="stats__block">{{ stars }}</div>
    </li>
    <li class="stats__item --forks">
      <button class="stats__block">
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
  props: {
    stars: {
      type: String || Number,
      required: true
    },
    forks: {
      type: String || Number,
      required: true
    }
  }
}
</script>

<style scoped>

  .stats,
  .stats__item {
    display: inline-flex;
  }

  .stats {
    border-radius: 6px;
    border: 1px solid rgba(27, 31, 35, 0.15);
    overflow: hidden;
  }

  .stats__block {
    display: flex;
    align-items: center;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.28;
  }

  .stats__item:not(:last-child),
  .stats__block:not(:last-child) {
    border-right: 1px solid rgba(27, 31, 35, 0.15);
  }

  button.stats__block {
    background: #FAFBFC;
  }

  button.stats__block:hover .stats__icon {
    color: #31AE54;
  }

  .stats__item.--stars .stats__icon {
    width: 16px;
  }

  .stats__item.--forks .stats__icon {
    width: 12px;
  }

  .stats__icon {
    margin-right: 5px;
    color: #586069;
    transition: color .25s ease;
  }

</style>
