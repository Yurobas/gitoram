<template>
  <div class="storiesSlider">
    <div class="storiesSlider__container">
      <ul class="storiesSlider__list" ref="slider">
        <li class="storiesSlider__item" v-for="(trending, ndx) in trendings" :key="trending.id" ref="item">
          <storyPostItem 
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx & loading"
            :btnsShown="activeBtns"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onNextSlide="handleSlide(ndx + 1)"
            @handleProgressFinish="handleSlide(ndx + 1)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { storyPostItem } from '../storyPostItem'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'storiesSlider',
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      btnsShown: true
    }
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  components: {
    storyPostItem
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      loading: state => state.trendings.loading
    }),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['prev', 'next']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        useravatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(
        getComputedStyle(item[0]).getPropertyValue('width'),
        10
      )

      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)

      slider.style.transform = `translate3d(${this.sliderPosition}px, 0, 0)`
    },
    async loadReadme () {
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.error(e)
        throw e
      } finally {
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(item => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }

    await this.fetchTrendings()
    await this.loadReadme()
  }
}
</script>

<style src="./storiesSlider.scss" lang="scss"></style>
