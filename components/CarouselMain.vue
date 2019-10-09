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
      ></li>
      <li
        data-target="#carouselMain"
        data-slide-to="1"
      ></li>
      <li
        data-target="#carouselMain"
        data-slide-to="2"
      ></li>
    </ol>
    <div class="carousel-inner home">
      <div
        v-for="(image, i) in images"
        :key="i"
        class="carousel-item"
        :class="{ 'active'  : i === 0 }"
      >
        <img
          :src="image.src"
          class="h-100 w-100 cover"
          :alt="image.alt"
        >
        <div class="overlay-home"></div>
        <div class="carousel-caption-home">
          <div>
            <p>
              Yo soy luis enrique
            </p>
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
      ></span>
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
      ></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import jqCarouselMain from '~/jq-script/jq.carousel.main'

export default {
  name: 'CarouselMain',
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/carousel-main/',
      images: [
        { src: '/images/home/familia_campo.png', alt: '' },
        { src: '/images/home/libro_buscando_la_felicidad.png', alt: '' },
        { src: '/images/home/libro_hablando_con_angel.png', alt: '' },
      ]
    }
  },
  mixins: [jqCarouselMain]
}
</script>
