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
          <div class="row w-100 justify-content-center">
            <div class="col-xs-12 col-md-8">
              <div class="container">
                <div class="">
                  <h1 class="text-primary title">
                    {{ item.title }}
                  </h1>
                  <p
                    class="subtitle"
                    v-html="item.subtitle"
                  />
                  <p
                    v-if="item.subtitle_2"
                    class="subtitle"
                    v-html="item.subtitle_2"
                  />

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
          title: "Siempre eh creido que los limites uno mismo se los pone",
          subtitle: 'Apesar de las circunstancias no me eh detenido, y lo mismo quiero que hagas'
        },
        {
          src: '/images/home/books.png', alt: '',
          title: "Te invito a leerlos",
          subtitle: 'El dia en que dijo "Eh terminado el libro, me senti bien y muy orgulloso de él, al mismo tiempo me di cuenta que lo que habia hecho tecla a tecla era muy gratificante"<cite>Mi hermano</cite>',
          subtitle_2: 'Lo consegui y no me detuve hasta publicar mis primeros libros',
          button: {
            label: 'Ver mis libros',
            path: '/myBooks'
          }
        },
        
        {
          src: '/images/home/familia_campo.png', alt: '',
          title: "Los limites uno mismo se los pone",
          subtitle: 'Apesar de las circunstancias no me eh detenido, y lo mismo quiero que hagas'
        }
      ]
    }
  }
}
</script>
