<template>
  <div
    id="carouselMain"
    class="carousel slide"
    data-ride="carousel"
  >
    <ol class="carousel-indicators">
      <li
        data-target="#carouselMain"
        data-slide-to="0"
        class="active"
      />
      <li
        data-target="#carouselMain"
        data-slide-to="1"
      />
      <li
        data-target="#carouselMain"
        data-slide-to="2"
      />
    </ol>
    <div class="carousel-inner home">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="carousel-item"
        :class="{ 'active' : i === 0 }"
      >
        <img
          :src="item.src"
          class="h-100 w-100 cover"
          :alt="item.alt"
        >
        <div class="overlay-home" />
        <div class="carousel-caption-home">
          <div class="container">
            <div class="row w-100 justify-content-center">
              <div class="col-xs-12 col-md-6 col-lg-4">
                <div class="">
                  <h5 class="text-primary title">
                    {{ item.title }}
                  </h5>
                  <p
                    class="subtitle h6"
                    v-html="item.subtitle"
                  />

                  <h4 class="author">
                    <cite
                      title="Title"
                    >Luis E. Bustamante</cite>
                  </h4>

                  <nuxt-link
                    v-if=" item.button"
                    to=""
                    class="btn btn-primary text-white"
                  >
                    {{ item.button.label }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselMain"
      role="button"
      data-slide="prev"
    >
      <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
      />
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselMain"
      role="button"
      data-slide="next"
    >
      <span
        class="carousel-control-next-icon"
        aria-hidden="true"
      />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import jqCarouselMain from '~/jq-script/jq.carousel.main'

export default {
  name: 'CarouselMain',
  mixins: [jqCarouselMain],
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/carousel-main/',
      items: [
        {
          src: '/images/home/presente_mi_libro.png', alt: '',
          title: "",
          subtitle: 'Cada nuevo día es una nueva oportunidad para ser una mejor persona. Una persona honorable, no puede pasar por este mundo, sin ayudat a otra persona.'
        },
        {
          src: '/images/home/books.png', alt: '',
          subtitle: 'Discapacitados no somos nosotros, sino las personas de corazón mezquino',
          button: {
            label: 'Mis libros',
            path: '/myBooks'
          }
        },

        {
          src: '/images/home/luis_y_mario.png', alt: '',
          title: "Los limites uno mismo se los pone",
          subtitle: 'La discapacidad es parte de este mundo, no un mundo a parte.'
        }
      ]
    }
  }
}
</script>
