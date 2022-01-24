import stats from './stats.vue'

export default {
  title: 'stats',
  component: { stats }
}

const template = () => ({
  data () {
    return {
      stars: '156k',
      forks: 4
    }
  },
  components: { stats: stats },
  template: `
    <stats :stars="stars" :forks="forks"/>
  `
})

export const Default = template.bind({})
