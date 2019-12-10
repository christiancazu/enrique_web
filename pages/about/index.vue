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
          attach="Yo soy"
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
        <LineTime
          :items="letters"
          line-complet
          text-justify
        />
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
          title: 'De: Dora Varona',
          date: '11 de Junio del 2009',
          description: 'Cuando José Luis Ayala me entregó su libro: <strong>Hablando con un ángel</strong> y supe acerca de su particular drama humano, francamente quedé conmovida. Después que leí su libro, confieso que sólo una voluntad tan grande como la suya, es capaz de vencer a todas las adversidades. Inmediatamente pensé en la esforzada forma como trabaja y fui presa de una profunda reflexión. <br> Su libro más que una conversación con un ángel es con usted. Así lo percibo y entiendo debido a la ternura con el que está escrito. Pero al mismo tiempo trasunta vida y esperanza, una profunda añoranza por las calles y el mundo que recorrió. Es que la memoria del escritor primero registra los hechos o sueños y después escribe. <br>Yo creo que no hay un solo caso en la historia de la humanidad como el suyo. Se trata de una acción sobre humana, de un escritor que pese a todas las circunstancias vence al tiempo y los designios. Por eso, también su caso es un ejemplo para los jóvenes que como usted, se ven obligados a convertirse en jinetes de sus sillas de ruedas, para cabalgar imaginariamente por un mundo más humano y sin sufrimiento. <br> Razones de labores estrictamente relacionadas con el Centenario de Ciro Alegría y que se presentan de modo imprevisto, hacen que no esté presente. Pero no he, querido estar ausente de esta ceremonia y no voy a escribir todo cuando había determinado. Lo que hago de todo corazón es adherirme a esta presentación que a la vez es un homenaje que se le brinda a usted querido Luis E. Bustamante Pérez. ¿Quiénes deberían velar para que siga escribiendo otras novelas, poemas y cuentos? Sin duda las instituciones culturales que tienen a su cargo la política cultiva del Estado.<br> Debería otorgársele una pensión para que siga creando. Está demostrado que se trata de un escritor, de un hombre capaz de dar mucho de lo que ha escrito. No dejemos que sus originales se pierdan o que por falta de un incentivo humano y económico, se calle para siempre. <br>Saludos a los padres y hermanos de Luis E. Bustamante Pérez, quienes según sé lo apoyan permanentemente para que siga escribiendo. Creo que además, nunca se ha dado un caso similar en el Perú. Por eso, Luis E. Bustamante Pérez, será conocido en lo sucesivo como "El ángel de la Literatura Peruana". De mi parte, siempre tendrá mi apoyo personal. Pido a Dios que lo bendiga y lo ayude siempre con su misericordioso sentimiento de Padre y Creador.',
          link: '',
          imgSmall: '/images/about/hablando-con-un-angel.png',
          imgBig: '/images/about/hablando-con-un-angel.png'
        },
        {
          title: 'De: Rectores y decanos UNSA',
          date: 'No especifica',
          description: 'Lo conocimos, un joven feliz, solidario, amable, sencillo y misterioso. <br> Ahora es un brillante escritor que nos enseña como recorrer los misteriosos caminos de la vida, con fe, fortaleza de animo y excelentes sentimientos. <br> Estamos orgullosos de tí, <strong>Felicitaciones</strong> ',
          link: '',
          imgSmall: '/images/about/decanos_rectors.png',
          imgBig: '/images/about/decanos_rectors.png'
        },
        {
          title: 'Joven arequipeño dio emotivo discurso utilizando un puntero y una computadora',
          date: 'Octubre 28, 2018',
          description: 'Luis Enrique Bustamante Perez (32) fue hoy el protagonista de un momento emotivo en el compartir de personas con discapacidad que se llevó a cabo ayer en el comedor de la Universidad Nacional de San Agustín, donde estuvo a cargo del discurso central.',
          link: '',
          imgSmall: '/images/about/octubre-28-2018-1.png',
          imgBig: 'octubre-28-2018-1.png'
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
