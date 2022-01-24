import avatar from './avatar.vue'

export default {
  title: 'avatar',
  component: { avatar }
}

const template = () => ({
  data () {
    return {
      image: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg'
    }
  },
  components: { avatar: avatar },
  template: `
    <avatar :image="image"/>
  `
})

export const Default = template.bind({})
