import comment from './comment.vue'

export default {
  title: 'comment',
  component: { comment }
}

const template = () => ({
  data () {
    return {
      author: 'John',
      text: 'Comment from John'
    }
  },
  components: { comment: comment },
  template: `
    <comment :author="author" :text="text">
  `
})

export const Default = template.bind({})
