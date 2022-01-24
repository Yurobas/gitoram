import slide from './slide.vue'

export default {
  title: 'slide',
  components: { slide }
}

const template = () => ({
  components: { slide: slide },
  template: `
    <slide/>
  `
})

export const Default = template.bind({})
