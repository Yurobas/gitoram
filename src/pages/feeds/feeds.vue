<template>
  <div class="feeds page">
    <div class="feeds__topline">
      <topline>
        <template #top>
          <logo/>
          <!-- <navigation :profile=""/> -->
        </template>
        <template #bottom>
          <ul class="users">
            <li class="users__item" v-for="{id, owner, name} in items" :key="id">
              <user 
                :avatar="owner.avatar_url" 
                :name="name" 
                @onClick="$router.push({ name: 'stories', params: { initialSlide: id } })"
              />
            </li>
          </ul>
        </template>
      </topline>
    </div>
    <div class="feeds__content">
      <div class="container">
        <ul class="feeds__list">
          <li class="feeds__item">
            <!-- <feed :data="item">
              <template #content v-if="item.content">
                <h2 class="feed__title">{{ item.content.title }}</h2>
                <p class="feed__description">{{ item.content.description }}</p>
                <div class="feed__stats">
                  <stats :stars="item.content.stars" :forks="item.content.forks"/>
                </div>
              </template>
            </feed> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import { navigation } from '../../components/navigation'
import { topline } from '../../components/topline'
// import { stats } from '../../components/stats'
import { logo } from '../../components/logo'
import { user } from '../../components/user'
// import { feed } from '../../components/feed'

import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    // navigation,
    topline,
    // stats,
    logo,
    user
    // feed
  },
  data () {
    return {
      items: []
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss"></style>
