import toggler from './toggler.vue'

export default {
  title: 'toggler',
  component: toggler,
  argsTypes: {
    onToggle: {
      action: 'onToggle',
      description: 'fires when toggled'
    }
  }
}

const template = (args) => ({
  data () {
    return { args }
  },
  components: { toggler: toggler },
  template: `
    <toggler @onToggle="args.onToggle">
  `
})

export const Default = template.bind({})
