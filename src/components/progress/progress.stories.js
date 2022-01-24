import progress from './progress.vue'

export default {
  title: 'progress',
  components: { progress },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fired after transition'
    }
  }
}

const template = args => ({
  data () {
    return {
      args
    }
  },
  components: { xProgress: progress },
  template: `
    <xProgress @onFinish="args.onFinish">
  `
})

export const Default = template.bind({})
