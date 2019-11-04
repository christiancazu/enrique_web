<template>
  <div class="container about-page">
    <ul
      id="tabsAbout"
      class="nav nav-pills nav-justified"
      role="tablist"
    >
      <li class="nav-item">
        <a
          id="home-tab"
          class="nav-link active h6 mb-0"
          data-toggle="tab"
          href="#home"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >Biografía</a>
      </li>
      <li class="nav-item">
        <a
          id="profile-tab"
          class="nav-link h6 mb-0"
          data-toggle="tab"
          href="#profile"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >Cartas</a>
      </li>
    </ul>
    <div
      id="myTabContent"
      class="tab-content"
    >
      <div
        id="home"
        class="tab-pane fade show active"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        ...
      </div>
      <div
        id="profile"
        class="tab-pane fade"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        ...
      </div>
    </div>
    <!-- <header-section
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
    /> -->
  </div>
</template>

<script>
// import HeaderSection from '~/components/HeaderSection'
// import History from '~/components/History'
import { IMG_BASE_PATH } from '~/config/constants'
import { mapState } from 'vuex'
export default {
  components: {
    // HeaderSection, History
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
