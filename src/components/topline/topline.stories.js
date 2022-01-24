import navigation from '../navigation/navigation.vue'
import logo from '../logo/logo.vue'
import user from '../user/user.vue'
import topline from './topline.vue'

export default {
  title: 'topline',
  component: topline
}

const template = () => ({
  components: { topline: topline },
  template: `
    <topline/>
  `
})

const templateWithTop = () => ({
  data () {
    return {
      data: {
        avatar: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg'
      }
    }
  },
  components: {
    logo: logo,
    topline: topline,
    navigation: navigation
  },
  template: `
    <topline>
      <template #top>
        <logo/>
        <navigation :profile="data">
      </template>
    </topline>
  `
})

const templateWithBottom = () => ({
  data () {
    return {
      data: {
        users: [
          {
            id: 0,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
            name: 'Josh'
          },
          {
            id: 1,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg',
            name: 'Andrew'
          },
          {
            id: 2,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-03.svg',
            name: 'Camille'
          },
          {
            id: 3,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-04.svg',
            name: 'Marselle'
          },
          {
            id: 4,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
            name: 'Piter'
          },
          {
            id: 5,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg',
            name: 'Can'
          },
          {
            id: 6,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-03.svg',
            name: 'Iloveanime'
          },
          {
            id: 7,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-04.svg',
            name: 'Diself'
          },
          {
            id: 8,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
            name: 'Gartor'
          },
          {
            id: 9,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg',
            name: 'Camilr'
          }
        ]
      }
    }
  },
  components: {
    user: user,
    topline: topline
  },
  template: `
    <topline>
      <template #bottom>
        <ul class="users">
          <li class="users__item" v-for="item in data.users" :key="item.key">
            <user :avatar="item.avatar" :name="item.name" @onClick="handleClick(item.id)"/>
          </li>
        </ul>
      </template>
    </topline>
  `
})

const templateFull = () => ({
  data () {
    return {
      data: {
        avatar: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg',
        users: [
          {
            id: 0,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
            name: 'Josh'
          },
          {
            id: 1,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg',
            name: 'Andrew'
          },
          {
            id: 2,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-03.svg',
            name: 'Camille'
          },
          {
            id: 3,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-04.svg',
            name: 'Marselle'
          },
          {
            id: 4,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
            name: 'Piter'
          },
          {
            id: 5,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg',
            name: 'Can'
          },
          {
            id: 6,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-03.svg',
            name: 'Iloveanime'
          },
          {
            id: 7,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-04.svg',
            name: 'Diself'
          },
          {
            id: 8,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-01.svg',
            name: 'Gartor'
          },
          {
            id: 9,
            avatar: 'https://yurobas.github.io/gitoram/dist/images/user-02.svg',
            name: 'Camilr'
          }
        ]
      }
    }
  },
  components: {
    logo: logo,
    user: user,
    topline: topline,
    navigation: navigation
  },
  template: `
    <topline>
      <template #top>
        <logo/>
        <navigation :profile="data">
      </template>
      <template #bottom>
        <ul class="users">
          <li class="users__item" v-for="item in data.users" :key="item.key">
            <user :avatar="item.avatar" :name="item.name" @onClick="handleClick(item.id)"/>
          </li>
        </ul>
      </template>
    </topline>
  `
})

export const Default = template.bind({})
export const Full = templateFull.bind({})
export const WithTop = templateWithTop.bind({})
export const WithBottom = templateWithBottom.bind({})
