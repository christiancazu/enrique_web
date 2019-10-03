<template>
  <section
    class="pb-100"
    id="about"
  >
    <div class="container">
      <div class="row pb-70">
        <div class="col-sm-12 col-md-5">
          <h5 class="text--attach">Aqui muestro más</h5>
          <h1 class="text--title ">Sobre quien soy yo</h1>
          <div class="pt-3 pb-6">
            <p>
              Vivi momentos entre bueno y malos, pero siempre voy con el buen animo.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
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
                  <h4>{{ activity.title }}</h4>
                  <h4 class="subheading">{{ activity.date }}</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">{{ activity.description }}</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>
                  <br>Ver más
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import constants from '~/config/constants'

export default {
  name: 'About',
  data () {
    return {
      imgPath: constants.IMG_BASE_PATH + '/about/',
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
  }

}
</script>
