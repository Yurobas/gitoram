<template>
  <div class="stories page">
    <topline :isDark="true">
        <template #top>
          <button class="topline__logo">
            <logo/>
          </button>
          <button class="topline__close" @click="$router.push('/')">
            <icon name="close"/>
          </button>
        </template>
      </topline>
      <main class="stories__content">
        <stories-slider :initialSlide="Number($route.params.initialSlide)"/>
      </main>
  </div>
</template>

<script>
import { storiesSlider } from '../../components/storiesSlider'
import { topline } from '../../components/topline'
import { logo } from '../../components/logo'
import { icon } from '../../icons'

export default {
  name: 'stories',
  components: {
    storiesSlider,
    topline,
    logo,
    icon
  }
}
</script>

<style src="./stories.scss" lang="scss"></style>
