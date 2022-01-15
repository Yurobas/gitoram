<template>
  <div class="feeds page">
    <div class="feeds__topline">
      <topline>
        <template #top>
          <logo/>
          <navigation :profile="data.profile"/>
        </template>
        <template #bottom>
          <ul class="users">
            <li class="users__item" v-for="item in data.users" :key="item.key">
              <user :avatar="item.avatar" :name="item.name" @onClick="handleClick(item.id)"/>
            </li>
          </ul>
        </template>
      </topline>
    </div>
    <div class="feeds__content">
      <div class="container">
        <ul class="feeds__list">
          <li class="feeds__item" v-for="item in data.feeds" :key="item.key">
            <feed :data="item">
              <template #content v-if="item.content">
                <h2 class="feed__title">{{ item.content.title }}</h2>
                <p class="feed__description">{{ item.content.description }}</p>
                <div class="feed__stats">
                  <stats :stars="item.content.stars" :forks="item.content.forks"/>
                </div>
              </template>
            </feed>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data.json'
import { navigation } from '../../components/navigation'
import { topline } from '../../components/topline'
import { stats } from '../../components/stats'
import { logo } from '../../components/logo'
import { user } from '../../components/user'
import { feed } from '../../components/feed'

export default {
  name: 'feeds',
  components: {
    navigation,
    topline,
    stats,
    logo,
    user,
    feed
  },
  data () {
    return {
      data
    }
  },
  methods: {
    handleClick (id) {
      console.log(id)
    }
  }
}
</script>

<style>
  .users:hover .user__pic {
    border-color: transparent;
  }
</style>

<style scoped>

  .users {
    display: flex;
  }

  .users__item:not(:last-of-type) {
    margin-right: 30px;
  }

  .feeds__content {
    max-width: 980px;
    margin: 0 auto;
    padding: 30px 0 60px;
  }

  .feeds__item + .feeds__item {
    margin-top: 25px;
  }

  .feed__stats {
    margin-top: 32px;
  }

</style>
