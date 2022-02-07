<template>
  <div class="feeds page">
    <div class="feeds__topline">
      <topline>
        <template #top>
          <logo/>
          <navigation :avatar_url="user.avatar_url" @logout="logout"/>
        </template>
        <template #bottom>
          <ul class="users">
            <li 
              class="users__item" 
              v-for="{id, useravatar, username} in getStoryData(trendings)" 
              :key="id">
              <user
                border
                :avatar="useravatar" 
                :name="username"
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
          <li 
            class="feeds__item"
            v-for="{
              id,
              name,
              owner,
              description,
              stargazers_count,
              forks,
              issues,
              created_at,
            } in starred"
            :key="id"
          >
            <feed
              :userpic="owner.avatar_url"
              :username="owner.login"
              :issues="issues.data.content"
              :date="new Date(created_at)"
              :loading="issues.loading"
              @loadContent="loadIssues({ id, owner: owner.login, repo: name })"
            >
              <template #content>
                <h2 class="feed__title">{{ name }}</h2>
                <p class="feed__description">{{ description }}</p>
                <div class="feed__stats">
                  <stats :stars="stargazers_count" :forks="forks" @handleStar="handleStar(id)"/>
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
import { mapState, mapActions } from 'vuex'
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
      items: []
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.data,
      trendings: state => state.trendings.data,
      starred: state => state.starred.data
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
      fetchUser: 'user/fetchUser',
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      fetchIssues: 'starred/fetchIssues',
      unStarRepo: 'starred/unStarRepo'
    }),
    handleStar (id) {
      const isStarred = this.starred.some(item => item.id === id)
      isStarred ? this.unStarRepo(id) : this.starRepo(id)
    },
    loadIssues ({ id, owner, repo }) {
      this.fetchIssues({ id, owner, repo })
    },
    getStoryData (array) {
      if (!array.length) return
      const result = array.map(obj => {
        return {
          id: obj.id,
          useravatar: obj.owner?.avatar_url,
          username: obj.owner?.login
        }
      })
      return result
    }
  },
  async created () {
    await this.fetchUser()
    await this.fetchTrendings()
    await this.fetchStarred()
  }
}
</script>

<style src="./feeds.scss" lang="scss"></style>
