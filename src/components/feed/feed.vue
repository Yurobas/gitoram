<template>
  <div class="feed">
    <div class="feed__profile">
      <user class="--inline --cut" :avatar="data.author.avatar" :name="data.author.name" @onClick="handleClick(data.id)"/>
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

<style>

  .feed__profile {
    margin-bottom: 16px;
  }

  .feed__content {
    padding: 24px 20px;
    border-radius: 10px;
    border: 1px solid #F1F1F1;
    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
    background-color: #fff;
  }

  .feed__title {
    margin-bottom: 15px;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.07;
  }

  .feed__description {
    font-size: 14px;
    line-height: 1.57;
  }

  .feed__description + .feed__description {
    margin-top: 5px;
  }

  .feed__toggler {
    margin-top: 18px;
  }

  .feed__comments {
    margin-top: 10px;
  }

  .feed__comment + .feed__comment {
    margin-top: 6px;
  }

  .feed__date {
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.4);
    font-size: 12px;
    line-height: 1.16;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

</style>
