<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark fixed-top"
    id="mainNav"
  >
    <div class="container">
      <nuxt-link
        class="navbar-brand"
        :to="{ name: 'index' }"
      >
        {{ brand }}
      </nuxt-link>
      <button
        class="navbar-toggler navbar-toggler-right text-menu"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarResponsive"
      >
        <ul class="navbar-nav text-uppercase ml-auto">
          <!-- navs -->
          <li 
            v-for="(nav, i) in navs" :key="i"
            class="nav-item"
          >
            <nuxt-link
              class="nav-link"
              :to="{ name: nav.link }"
            >
              {{ nav.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import jqNavbar from '~/jq-script/jq.navbar'

export default {
  name: 'TheNavbar',
  data() {
    return {
      brand: 'Luis Enrique Bustamante Perez',
      navs: [
        { name: 'reconocimientos', link: 'about' },
        { name: 'libros', link: 'books' },
        { name: 'fotos', link: 'photos' },
        { name: 'noticias', link: 'news' },
        { name: 'contacto', link: 'contact' },
      ],
    }
  },
  mixins: [jqNavbar]
}
</script>
