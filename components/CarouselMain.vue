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
          :class="`h-100 w-100 cover ${item.align}`"
          :alt="item.alt"
        >
        <div class="overlay-home" />
        <div class="carousel-caption-home">
          <div class="container">
            <div class="row m-0 w-100 justify-content-center">
              <div class="col-xs-12 col-md-8 p-0">
                <div class="carousel-content">
                  <p class="title">
                    {{ item.title }}
                  </p>
                  <h3
                    class="subtitle"
                    v-html="item.subtitle"
                  />
                  <div class="action pt-3">
                    <nuxt-link
                      v-if=" item.button"
                      to=""
                      class="btn btn-primary"
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
          src: '/images/home/2.png', alt: '',
          title: "Una persona honorable, no puede pasar por este mundo, sin ayudar a otra persona.",
          subtitle: 'Cada nuevo día es una nueva oportunidad para ser una mejor persona.',
          align: 'left'
        },
        {
          src: '/images/home/3.png', alt: '',
          title: 'Discapacitados no somos nosotros,',
          subtitle: 'sino las personas de corazón mezquino',
          button: {
            label: 'Mis libros',
            path: '/myBooks'
          },
          align: ''
        },

        {
          src: '/images/home/1.png', alt: '',
          title: "La discapacidad es parte de este mundo,",
          subtitle: 'no un mundo a parte.',
          align: ''
        }
      ]
    }
  }
}
</script>
