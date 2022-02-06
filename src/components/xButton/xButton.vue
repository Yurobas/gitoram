<template>
  <button :class="[theme, {wide}, {disabled}, {loading}, {'row' : iconName}]" class="button">
    <preloader v-if="loading"/>
    <slot></slot>
    <icon v-if="iconName" :class="iconName" class="button__icon" :name="iconName"/>
  </button>
</template>

<script>
import { icon } from '../../icons'
import { preloader } from '../preloader'

export default {
  name: 'xButton',
  props: {
    wide: Boolean,
    loading: Boolean,
    disabled: Boolean,
    theme: String,
    iconName: String
  },
  components: {
    icon,
    preloader
  }
}
</script>

<style src="./xButton.scss" lang="scss"></style>
