<template>
  <div class="container about-page">
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
      full-row
    />

    <history
      v-for="(about, i) in abouts"
      :key="i"
      :img="imgPath + about.img"
      :title="about.title"
      :body="about.body"
      :footer="about.footer"
      :reverse="!!(i % 2)"
    />
  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection'
import History from '~/components/History'
import { IMG_BASE_PATH } from '~/config/constants'
import { mapState } from 'vuex'
export default {
  components: {
    HeaderSection, History
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/about/'
    }
  },
  computed: {
    header () {
      return this.$store.getters.headerSection('About')
    },
    ...mapState({
      abouts: 'abouts'
    })
  }
}
</script>
