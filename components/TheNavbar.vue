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
        <img
          src="/images/logo/logo_yellow.png"
          alt="Luis enrique"
          class="img-fluid logo"
        />

      </nuxt-link>
      <button
        class="navbar-toggler navbar-toggler-right text-menu"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <i class="fas fa-bars icons-primary"></i> -->
        <i class="fa fa-bars icons-primary"></i>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarResponsive"
      >
        <ul class="navbar-nav text-uppercase ml-auto">
          <!-- navs -->
          <li
            v-for="(nav, i) in navs"
            :key="i"
            class="nav-item"
          >
            <nuxt-link
              class="nav-link"
              :class="i === 0 ? 'active' : ''"
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
  data () {
    return {
      brand: 'Luis Enrique Bustamante Perez',
      navs: [
        { name: 'Inicio', link: 'index' },
        { name: 'Sobre mi', link: 'about' },
        { name: 'libros', link: 'books' },
        { name: 'Noticias & Blogs', link: 'news' },
        { name: 'contacto', link: 'contact' },
      ],
    }
  },
  mixins: [jqNavbar]
}
</script>
