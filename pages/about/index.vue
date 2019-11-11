<template>
  <div class="container about-page">
    <ul
      id="tabsAbout"
      class="nav nav-pills nav-justified mb-5"
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
        <header-section
          title="Luis enrique Bustamante Pérez"
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
      <div
        id="profile"
        class="tab-pane fade"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <header-section
          :attach="headerTabLetters.attach"
          :title="headerTabLetters.title"
          :description="headerTabLetters.description"
        />
        <LineTime :items="letters" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection'
import History from '~/components/History'
import LineTime from '~/components/base/LineTime'
import { IMG_BASE_PATH } from '~/config/constants'
import { mapState } from 'vuex'
export default {
  components: {
    HeaderSection, History, LineTime
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/about/',
      letters: [
        {
          title: 'Medalla de Honor de la UNAP',
          date: 'Diciembre 20, 2017',
          description: 'La Universidad Nacional del altiplano otorga Medalla de Honor a Luis Enrique Bustamante Pérez.',
          link: '',
          imgSmall: '/images/about/diciembre-20-2017-1-200x200.jpg',
          imgBig: 'diciembre-20-2017-1.jpg'
        },
        {
          title: 'Reconocimiento en Ayaviri',
          date: 'Diciembre 21, 2017',
          description: 'Luis Enrique recibe la Medalla de Honor por parte de la Municipalidad Provincial de Ayaviri.',
          link: '',
          imgSmall: '/images/about/diciembre-21-2017-1-200x200.jpg',
          imgBig: 'diciembre-21-2017-1.jpg'
        },
        {
          title: 'Joven arequipeño dio emotivo discurso utilizando un puntero y una computadora',
          date: 'Octubre 28, 2018',
          description: 'Luis Enrique Bustamante Perez (32) fue hoy el protagonista de un momento emotivo en el compartir de personas con discapacidad que se llevó a cabo ayer en el comedor de la Universidad Nacional de San Agustín, donde estuvo a cargo del discurso central.',
          link: '',
          imgSmall: '/images/about/octubre-28-2018-1-200x200.jpg',
          imgBig: 'octubre-28-2018-1.jpg'
        }
      ]
    }
  },
  computed: {
    header () {
      return this.$store.getters.headerSection('About')
    },

    headerTabLetters () {
      return this.$store.getters.headerSection('Letters')
    },
    ...mapState({
      abouts: 'abouts'
    })
  }
}
</script>
