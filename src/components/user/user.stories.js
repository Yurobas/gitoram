import user from './user.vue'

export default {
  title: 'user',
  component: user,
  argsTypes: {
    onClick: {
      action: 'onClick',
      description: 'fires when clicked'
    }
  }
}

const template = (args) => ({
  data () {
    return {
      args,
      avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
      name: 'Josh'
    }
  },
  components: { user: user },
  template: `
    <user :avatar="avatar" :name="name" @onClick="args.onClick">
  `
})

const templateInline = (args) => ({
  data () {
    return {
      args,
      avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
      name: 'Josh'
    }
  },
  components: { user: user },
  template: `
    <user class="--inline" :avatar="avatar" :name="name" @onClick="args.onClick">
  `
})

export const Default = template.bind({})
export const Inline = templateInline.bind({})
