<template>
  <nav
    id="theNavbar"
    class="py-0 navbar navbar-expand-lg navbar-dark fixed-top"
  >
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
      <button
        class="navbar-toggler navbar-toggler-right"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa fa-bars icon-toggler" />
      </button>
      <div
        id="navbarResponsive"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav m-auto">
          <!-- navs -->
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
        <TheSocialsNetwork is-navbar />
      </div>
    </div>
  </nav>
</template>

<script>
import jqNavbar from '~/jq-script/jq.navbar'
import TheSocialsNetwork from '~/components/TheSocialsNetwork'

export default {
  name: 'TheNavbar',
  components: {
    TheSocialsNetwork
  },

  mixins: [jqNavbar],
  data () {
    return {
      navs: [
        { name: 'Inicio', link: 'index' },
        { name: 'Sobre mi', link: 'about' },
        { name: 'libros', link: 'books' },
        { name: 'Noticias', link: 'news' },
        { name: 'contacto', link: 'contact' },
      ],
    }
  }
}
</script>
