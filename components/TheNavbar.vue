<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>

<script>
import $_mixin_jq_navbar from '~/mixins/jq.navbar'

export default {
  name: 'TheNavbar',
  data() {
    return {
      brand: 'Luis Enrique Bustamante Perez',
      navs: [
        { name: 'reconocimientos', link: 'acknowledgments' },
        { name: 'libros', link: 'books' },
        { name: 'fotos', link: 'photos' },
        { name: 'noticias', link: 'news' },
        { name: 'contacto', link: 'contact' },
      ],
    }
  },
  methods: {
    asd() {
      
    }
  },
  mixins: [$_mixin_jq_navbar]
}
</script>
