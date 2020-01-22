<template>
<footer class="footer">
  <div class="wrap-footer">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-6">
          <nuxt-link
            class="navbar-brand"
            :to="{ name: 'index' }"
          >
            <div class="author">
              <h4 class="cite logo text-left">
                Luis Enrique <br>
                Bustamante Pérez
              </h4>
            </div>
          </nuxt-link>
          <p>Cada nuevo día es una nueva oportunidad para ser una mejor persona. Una persona honorable, no puede pasar por este mundo, sin ayudar a otra persona.</p>
          <ul class="nav p mb-2">
            <li
              v-for="(nav, i) in navs"
              :key="i"
              class="nav-item"
            >
              <nuxt-link
                class="nav-link pl-0"
                :to="{ name: nav.link }"
                exact
              >
                {{ nav.name }}
              </nuxt-link>
            </li>
          </ul>
          <the-socials-network />
        </div>

        <div class="col-xs-12 offset-md-1 col-md-5 col-lg-5">
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
      </div>
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
        { imgSrc: '/images/footer/a.png' },
        { imgSrc: '/images/footer/b.png' },
        { imgSrc: '/images/footer/c.png' },
        { imgSrc: '/images/footer/d.png' },
        { imgSrc: '/images/footer/e.png' },
        { imgSrc: '/images/footer/f.png' },
        { imgSrc: '/images/footer/g.png' },
        { imgSrc: '/images/footer/h.png' }
      ],

      navs: [
        { name: 'Inicio', link: 'index' },
        { name: 'Sobre mi', link: 'about' },
        { name: 'libros', link: 'books' },
        { name: 'Noticias', link: 'news' },
        { name: 'Contacto', link: 'contact' },
      ],
    }
  },
}
</script>
