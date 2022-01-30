import storyPostItem from './storyPostItem.vue'

export default {
  title: 'storyPostItem',
  components: { storyPostItem }
}

const template = () => ({
  components: { storyPostItem: storyPostItem },
  template: `
    <storyPostItem/>
  `
})

export const Default = template.bind({})
