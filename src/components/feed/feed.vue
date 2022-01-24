<template>
  <div class="feed">
    <div class="feed__profile">
      <user class="--inline" :avatar="data.author.avatar" :name="data.author.name" @onClick="handleClick(data.id)"/>
    </div>
    <div class="feed__content" v-if="$slots.content">
      <slot name="content"/>
    </div>
    <div class="feed__toggler">
      <toggler @onToggle="toggle"/>
    </div>
    <ul class="feed__comments" v-if="shown">
      <li class="feed__comment" v-for="item in data.comments" :key="item.id">
        <comment :author="item.author" :text="item.text"/>
      </li>
    </ul>
    <div class="feed__date">{{ data.date }}</div>
  </div>
</template>

<script>
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
import { user } from '../../components/user'

export default {
  name: 'feed',
  components: {
    toggler,
    comment,
    user
  },
  props: {
    data: {
      comments: Array
    }
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    handleClick (id) {
      console.log(id)
    },
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style src="./feed.scss" lang="scss"></style>
