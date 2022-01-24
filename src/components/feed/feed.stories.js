import feed from './feed.vue'
import stats from '../stats/stats.vue'

export default {
  title: 'feed',
  component: { feed }
}

const template = () => ({
  data () {
    return {
      item: {
        author: {
          avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
          name: 'joshua_l'
        },
        comments: [
          {
            id: 0,
            author: 'John',
            text: 'Comment from John'
          },
          {
            id: 1,
            author: 'Mike',
            text: 'Comment from Mike'
          },
          {
            id: 2,
            author: 'Sasha',
            text: 'Comment from Sasha'
          }
        ]
      }
    }
  },
  components: { feed: feed },
  template: `
    <feed :data="item">
  `
})

const templateWithContent = () => ({
  data () {
    return {
      item: {
        author: {
          avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
          name: 'joshua_l'
        },
        content: {
          title: 'Vue.js',
          description: 'JavaScript framework for building interactive web applications ⚡',
          date: '15 may',
          stars: '211k',
          forks: 22
        },
        comments: [
          {
            id: 0,
            author: 'John',
            text: 'Comment from John'
          },
          {
            id: 1,
            author: 'Mike',
            text: 'Comment from Mike'
          },
          {
            id: 2,
            author: 'Sasha',
            text: 'Comment from Sasha'
          }
        ]
      }
    }
  },
  components: {
    feed: feed,
    stats: stats
  },
  template: `
    <feed :data="item">
      <template #content v-if="item.content">
        <h2 class="feed__title">{{ item.content.title }}</h2>
        <p class="feed__description">{{ item.content.description }}</p>
        <div class="feed__stats">
          <stats :stars="item.content.stars" :forks="item.content.forks"/>
        </div>
      </template>
    </feed>
  `
})

export const Default = template.bind({})
export const WithContent = templateWithContent.bind({})
