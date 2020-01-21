<template>
<section class="container about">
  <header-section
    :attach="header.attach"
    :title="header.title"
    :description="header.description"
    center
  />

  <div class="row">
    <div class="col">
      <ul class="timeline">
        <li
          v-for="(activity, i) in news"
          :key="i"
          :class="{ 'timeline-inverted': i % 2 }"
          @click="$router.push(activity.link)"
        >
          <div class="timeline-image">
            <img
              :src="imgPath + activity.imgSmall"
              :alt="'Luis Enrique Bustamante Pérez - ' + activity.title"
              class="img-fluid"
            >
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h6 class="title">
                {{ activity.title }}
              </h6>
            </div>
            <div class="timeline-body">
              <p>
                {{ activity.description.slice(0, 110) }}...
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
import HeaderSection from '~/components/base/HeaderSection'

export default {
  name: 'About',
  components: {
    HeaderSection
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/about/',
      news: [
        {
          title: 'El prodigioso dedo meñique de Luis Enrique Bustamante',
          date: '24 de Octubre del 2008',
          description: '“Yo nací en el campo, con el olor a la tierra mojada, con el polvo que levanta un pala y con las peleas de toros como mi mayor afición, es ahí pienso, dónde encuentro la fuerza, el coraje y el valor que hacen que mi vida tome sentido”, Luis Enrique Bustamante ',
          link: 'news/entrevista-del-diario-«ideal»-de-granada',
          imgSmall: '20_oct_2008.png',
          imgBig: '20_oct_2008.png'
        },
        {
          title: 'Joven Arequipeño tetrapléjico escribió libro solo con su dedo meñique',
          date: '09 de Octubre del 2008',
          description: 'Luis Enrique Bustamante quedó tetrapléjico a los 20 años y escribió un libro solo con su dedo meñique.',
          link: 'news/joven-tetrapléjico-escribió-libro-solo-con-su-dedo-meñique',
          imgSmall: '09_oct_2008.png',
          imgBig: '09_oct_2008.png'
        },
        {
          title: 'La discapacidad no fue motivo para que deje de estudiar y ser escritor',
          date: '28 de Octubre del 2018',
          link: 'news/la-discapacidad-no-fue-motivo-para-que-deje-de-estudiar-y-ser-escrito',
          description: 'El joven arequipeño tiene discapacidad física total y limitaciones en el habla. Sin embargo, eso no lo detuvo para cumplir sus sueños y pudo terminar su carrera de economista en la UNSA y es autor dos libros como son Hablando con un Angel y Buscando la Felicidad, que los escribió mediante un puntero que coloca en su cabeza y lo que desea decir lo plasma en una computadora.',
          imgSmall: 'octubre-28-2018-1.png',
          imgBig: 'octubre-28-2018-1.png'
        }
      ]
    }
  },
  computed: {
    header () {
      return this.$store.getters.headerSection('About')
    }
  }
}
</script>
