<template>
  <section class="container about">
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

    <div class="row">
      <div class="col">
        <ul class="timeline">
          <li
            v-for="(activity, i) in activities"
            :key="i"
            :class="{ 'timeline-inverted': i % 2 }"
          >
            <div class="timeline-image">
              <img
                :src="imgPath + activity.imgSmall"
                :alt="'Luis Enrique Bustamante Pérez - ' + activity.title"
                class="rounded-circle img-fluid"
              >
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <span class="hexagono">
                  <span class="hexagono-content small">
                    <i
                      class="fa fa-calendar"
                      aria-hidden="true"
                    />

                  </span>
                </span>
                <h5 class="title">
                  {{ activity.title }}
                </h5>
              </div>
              <div class="timeline-body">
                <p>
                  {{ activity.description.slice(0, 95) }}...
                </p>
              </div>
              <div class="timeline-fotter">
                <p class="small">
                  <i
                    class="fa fa-calendar"
                    aria-hidden="true"
                  />
                  {{ activity.date }}
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <button 
                class="btn rounded-circle h-100 w-100"
                @click="$router.push('/about')"
              >
                Ver más
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'

export default {
  name: 'About',
  components: {
    HeaderSection
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/about/',
      activities: [
        {
          title: 'Medalla de Honor de la UNAP',
          date: 'Diciembre 20, 2017',
          description: 'La Universidad Nacional del altiplano otorga Medalla de Honor a Luis Enrique Bustamante Pérez.',
          link: '',
          imgSmall: 'diciembre-20-2017-1-200x200.jpg',
          imgBig: 'diciembre-20-2017-1.jpg'
        },
        {
          title: 'Reconocimiento en Ayaviri',
          date: 'Diciembre 21, 2017',
          description: 'Luis Enrique recibe la Medalla de Honor por parte de la Municipalidad Provincial de Ayaviri.',
          link: '',
          imgSmall: 'diciembre-21-2017-1-200x200.jpg',
          imgBig: 'diciembre-21-2017-1.jpg'
        },
        {
          title: 'Joven arequipeño dio emotivo discurso utilizando un puntero y una computadora',
          date: 'Octubre 28, 2018',
          description: 'Luis Enrique Bustamante Perez (32) fue hoy el protagonista de un momento emotivo en el compartir de personas con discapacidad que se llevó a cabo ayer en el comedor de la Universidad Nacional de San Agustín, donde estuvo a cargo del discurso central.',
          link: '',
          imgSmall: 'octubre-28-2018-1-200x200.jpg',
          imgBig: 'octubre-28-2018-1.jpg'
        }
      ]
    }
  },
  computed: {
    header() {
      return this.$store.getters.headerSection('About')
    }
  }
}
</script>
