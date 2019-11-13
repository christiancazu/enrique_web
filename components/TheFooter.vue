<template>
  <footer class="footer">
    <div class="wrap-footer">
      <div class="container">
        <nuxt-link
          class="navbar-brand"
          :to="{ name: 'index' }"
        >
          <div class="author">
            <h4 class="cite logo">
              Luis Enrique <br>
              Bustamante Pérez
            </h4>
          </div>
        </nuxt-link>
        <div class="row d-flex justify-content-center">
          <div class="col-md-4 col-lg-6 col-xs-12">
            <p>Cada nuevo día es una nueva oportunidad para ser una mejor persona. Una persona honorable, no puede pasar por este mundo, sin ayudar a otra persona.</p>
          </div>
        </div>
        <ul class="nav justify-content-center p mb-2">
          <li
            v-for="(nav, i) in navs"
            :key="i"
            class="nav-item"
          >
            <nuxt-link
              class="nav-link"
              :to="{ name: nav.link }"
              exact
            >
              {{ nav.name }}
            </nuxt-link>
          </li>
        </ul>
        <!-- <div class="row">
          <div class="col-md-4">
            <nuxt-link
              class="navbar-brand"
              :to="{ name: 'index' }"
            >
              <div class="author">
                <h2 class="cite logo">
                  Luis Enrique <br>
                  Bustamante Pérez
                </h2>
              </div>
            </nuxt-link>
            <ul class="list-unstyled mt-4 info-personal">
              <li class="d-flex align-items-center pb-2">
                <i class="fa fa-map-marker text-gray" />
                <p class="m-0">
                  {{ address }}
                </p>
              </li>
              <li class="d-flex align-items-center pb-2">
                <i
                  class="fa fa-phone text-gray"
                  aria-hidden="true"
                />
                <p class="m-0">
                  {{ cellPhoneNumber }}
                </p>
              </li>
              <li class="d-flex align-items-center pb-2">
                <i
                  class="fa fa-envelope text-gray"
                  aria-hidden="true"
                />
                <p class="m-0">
                  {{ emailAddress }}
                </p>
              </li>
            </ul>

            <TheSocialsNetwork />
          </div>
          <div class="col-md-4">
            <div class="widget widget_nav_menu">
              <h4 class="widget-title">
                Sobre Mi
              </h4>
              <ul class="menu list-unstyled">
                <li>
                  <nuxt-link
                    to="/about"
                    class="p"
                    no-exact
                  >
                    ¿Quieres saber más de mi?
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/books"
                    class="p"
                  >
                    ¿Ver mis libros?
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/contact"
                    class="p"
                  >
                    Contáctame
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="widget widget_noo_widget_instagram">
              <h4 class="widget-title">
                Mis Fotos
              </h4>
              <div class="noo-instagram">
                <ul>
                  <template v-for="(item, i) in photos">
                    <li :key="i">
                      <a
                        class="flickr_image"
                        :href="item.imgSrc"
                      ><img
                        :src="item.imgSrc"
                        alt="Zimbabwe Jump"
                      ></a>
                    </li>
                  </template>
                </ul>
              </div>
            </div>
          </div>
        </div> -->
        <TheSocialsNetwork />
      </div>
    </div>
    <div class="container footer_creator py-3">
      <div class="row align-items-center">
        <div class="col-md-6 text-xs-center">
          <span class="copyright small">
            Desarrollado con
            <i
              class="fa fa-heart text-danger"
              aria-hidden="true"
            /> por
            <span class="font-weight-bold">
              <a
                class="btn-flat-secondary text-veox"
                target="_bank"
                href="https://www.veox.tech"
              >VEOX</a>
            </span>
          </span>
        </div>
        <div class="col-md-6 text-right">
          <ul class="list-inline mb-0 text-xs-center">
            <li class="list-inline-item ">
              <a
                href="https://www.facebook.com/veoxtech"
                target="_bank"
              >
                <i class="fa fa-facebook text-veox" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://twitter.com/veoxperu"
                target="_bank"
              >
                <i class="fa fa-twitter text-veox" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://www.youtube.com/channel/UCkNod2lmZIMbR9iA2scP3Aw"
                target="_bank"
              >
                <i class="fa fa-youtube-play text-veox" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import TheSocialsNetwork from '~/components/TheSocialsNetwork'
import { CELLPHONE_NUMBER } from '~/config/constants'
import { ADDRESS } from '~/config/constants'
import { EMAIL_ADDRESS } from '~/config/constants'


export default {

  name: 'TheNavbar',
  components: {
    TheSocialsNetwork
  },
  data () {
    return {
      cellPhoneNumber: CELLPHONE_NUMBER,
      address: ADDRESS,
      emailAddress: EMAIL_ADDRESS,

      photos: [
        { imgSrc: '/images/fotos/reyes_espana.png' },
        { imgSrc: '/images/fotos/buscando-la-felicidad.jpg' },
        { imgSrc: '/images/fotos/diciembre-20-2017-1-200x200.jpg' },
        { imgSrc: '/images/fotos/diciembre-21-2017-1-200x200.jpg' },
        { imgSrc: '/images/fotos/familia_campo.png' },
        { imgSrc: '/images/fotos/hablando-con-un-angel.jpg' },
        { imgSrc: '/images/fotos/hermanos_pequenos.png' },
        { imgSrc: '/images/fotos/luis_y_mario.png' },
        { imgSrc: '/images/fotos/octubre-28-2018-1-200x200.jpg' }
      ],

      navs: [
        { name: 'Inicio', link: 'index' },
        { name: 'Sobre mi', link: 'about' },
        { name: 'libros', link: 'books' },
        { name: 'Noticias', link: 'news' },
        { name: 'contacto', link: 'contact' },
      ],
    }
  },
}
</script>
