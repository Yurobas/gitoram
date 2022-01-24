import logo from './logo.vue'

export default {
  title: 'logo',
  component: logo
}

const template = () => ({
  components: { logo: logo },
  template: `
    <logo/>
  `
})

export const Default = template.bind({})
