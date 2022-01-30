<template>
  <div class="storyPostItem" :class="{active}">
    <div class="storyPostItem__header">
      <div class="storyPostItem__progress">
        <xProgress :active="active" @onProgressFinish="$emit('handleProgressFinish')"/>
      </div>
      <div class="storyPostItem__user">
        <user class="--inline" :avatar="data?.useravatar" :name="data?.username" @onClick="handleClick(data?.id)"/>
      </div>
    </div>
    <div class="storyPostItem__content">
      <preloader v-if="loading"/>
      <div v-else class="storyPostItem__info">
        <div
          class="storyPostItem__description"
          v-if="data?.content?.length"
          v-html="data.content"
        ></div>
        <contentPlaceholder v-else :paragraphs="2"/>
      </div>
    </div>
    <div class="storyPostItem__footer">
      <div class="storyPostItem__button">
        <xButton text="Follow"/>
      </div>
    </div>
    <template v-if="active">
      <button v-if="btnsShown.includes('prev')" class="storyPostItem__arrow --prev" @click="$emit('onPrevSlide')">
        <div class="storyPostItem__arrow-icon">
          <icon name="arrowLong"/>
        </div>
      </button>
      <button v-if="btnsShown.includes('next')" class="storyPostItem__arrow --next" @click="$emit('onNextSlide')">
        <div class="storyPostItem__arrow-icon">
          <icon name="arrowLong"/>
        </div>
      </button>
    </template>
  </div>
</template>

<script>
import { contentPlaceholder } from '../../components/contentPlaceholder'
import { user } from '../../components/user'
import { xProgress } from '../../components/xProgress'
import { xButton } from '../../components/xButton'
import { preloader } from '../../components/preloader'
import { icon } from '../../icons'

export default {
  name: 'storyPostItem',
  components: {
    user,
    xProgress,
    xButton,
    contentPlaceholder,
    preloader,
    icon
  },
  emits: ['onPrevSlide', 'onNextSlide', 'handleProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'prev' || item === 'next')
      }
    },
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style src="./storyPostItem.scss" lang="scss"></style>
