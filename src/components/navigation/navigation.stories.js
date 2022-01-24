import navigation from './navigation.vue'

export default {
  title: 'navigation',
  components: { navigation }
}

const template = () => ({
  data () {
    return {
      data: {
        avatar: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg'
      }
    }
  },
  components: { navigation: navigation },
  template: `
    <navigation :profile=data>
  `
})

export const Default = template.bind({})
