<template>
  <div class="feed">
    <div class="feed__profile">
      <user class="--inline" size="small" :avatar="userpic" :name="username"/>
    </div>
    <div class="feed__content" v-if="$slots.content">
      <slot name="content"/>
    </div>
    <div class="feed__toggler">
      <toggler @onToggle="toggle"/>
    </div>
    <div class="feed__issues" v-if="shown">
      <contentPlaceholder v-if="loading" :paragraphs="1"/>
      <ul class="feed__comments" v-else>
        <li class="feed__comment" v-if="!issues.length">
          <comment author="No issues" text=" "/>
        </li>
        <li class="feed__comment" v-else v-for="item in issues" :key="item.id">
          <comment :author="item.user.login" :text="item.title"/>
        </li>
      </ul>
    </div>
    <div class="feed__date">{{ date }}</div>
  </div>
</template>

<script>
import { contentPlaceholder } from '../../components/contentPlaceholder'
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
import { user } from '../../components/user'

export default {
  name: 'feed',
  components: {
    contentPlaceholder,
    toggler,
    comment,
    user
  },
  emits: ['loadContent'],
  props: {
    userpic: String,
    username: String,
    issues: Array,
    date: Date,
    loading: Boolean
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    loadContent (isOpened) {
      this.shown = isOpened
    },
    toggle (isOpened) {
      this.shown = isOpened
      this.$emit('loadContent')
    }
  }
}
</script>

<style src="./feed.scss" lang="scss"></style>
