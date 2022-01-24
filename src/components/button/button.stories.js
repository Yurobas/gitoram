import button from './button.vue'

export default {
  title: 'button',
  component: { button }
}

const template = () => ({
  data () {
    return {
      name: 'Follow'
    }
  },
  components: { xButton: button },
  template: `
    <xButton :text="name">
  `
})

export const Default = template.bind({})
