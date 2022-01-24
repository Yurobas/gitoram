<template>
  <div class="slide">
    <div class="slide__header">
      <div class="slide__progress">
        <xProgress @onFinish="handleFinish"/>
      </div>
      <div class="slide__user">
        <user class="--inline" :avatar="data.user.avatar" :name="data.user.name" @onClick="handleClick(data.id)"/>
      </div>
    </div>
    <div class="slide__content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia blanditiis dolore omnis beatae nobis numquam voluptate deleniti, ea dolorum quasi aliquam molestias et amet dolores. Dolorum cum tempora maiores officiis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quae delectus distinctio recusandae quibusdam, quia alias pariatur aut fuga in? Ipsum quidem quod mollitia, qui dicta temporibus voluptatem. Debitis, ad?
        Provident voluptate eligendi, accusantium optio assumenda incidunt eaque aliquid necessitatibus, asperiores omnis pariatur ex molestias, illum maiores! Sed omnis, aliquid distinctio molestiae non quaerat dolorum, aliquam exercitationem neque mollitia ab.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sequi non accusantium quaerat fugiat ullam, explicabo inventore veritatis sint modi ex eveniet fuga laboriosam. Deserunt debitis sequi veritatis pariatur architecto?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus aliquid minima labore ab sed quisquam unde beatae ullam, architecto, impedit ducimus ea? Nam optio autem quod quisquam provident commodi voluptatum?
      </p>
    </div>
    <div class="slide__footer">
      <div class="slide__button">
        <xButton :text="data.button"/>
      </div>
    </div>
  </div>
</template>

<script>
import { user } from '../../components/user'
import { progress } from '../../components/progress'
import { button } from '../../components/button'

export default {
  data () {
    return {
      data: {
        user: {
          avatar: 'https://yurobas.github.io/gitoram/dist/images/user-04.svg',
          name: 'Marselle'
        },
        button: 'Follow'
      }
    }
  },
  name: 'slide',
  components: {
    user,
    xProgress: progress,
    xButton: button
  },
  methods: {
    handleClick (id) {
      console.log(id)
    },
    handleFinish () {
      console.log('finished')
    }
  }
}
</script>

<style src="./slide.scss" lang="scss"></style>
