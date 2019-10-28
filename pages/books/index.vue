<template>
  <div class="container books-page">
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
      full-row
    />

    <div
      v-for="(book, i) in books"
      :key="i"
    >
      <div class="row flex-row-reverse">

        <div class="col-lg-6 books-details__description">
          <h5 class="h5 books-details__description__text mb-4">
            <i
              class="fa fa-quote-left books-details__description__text__quote--left"
              aria-hidden="true"
            />
            {{ book.description }}
            <i
              class="fa fa-quote-right books-details__description__text__quote--right"
              aria-hidden="true"
            />
          </h5>
          <!-- <div class="text-center pt-3"> -->
            <button class="btn btn-primary mb-2">
              <small class="text-uppercase font-weight-bold">Comprar libro</small>
            </button>
            <button class="btn btn-secondary mb-2">
              <small class="text-uppercase font-weight-bold">Adquirir resumen <strong class="text-danger">(gratis)</strong>
              </small>
            </button>
          <!-- </div> -->
        </div>

        <div class="col-lg-6 books-details__book">
          <book
            :img-src="imgPath + book.imgSrc"
            :title="book.title"
            :description="book.description"
          />
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum odit consequuntur consectetur possimus sunt optio eos. Eos nulla recusandae odio deleniti omnis, tempore incidunt debitis quos eum quidem voluptates molestias.
        Quod eaque nihil exercitationem ullam fuga commodi odio aliquam quisquam. Mollitia, quo sint voluptas magnam ullam iste minima inventore praesentium non distinctio eveniet ratione, nihil maxime! Voluptatibus eum eos dicta.
        Autem magnam cum facere fugit, soluta provident nemo, porro assumenda consequuntur fuga, minima corrupti voluptatibus ex ad vero sed. Ut nostrum debitis quo eum amet nihil rem architecto voluptates quae.
      </p>
    </div>
  </div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'
import { mapState } from 'vuex'
import Book from '~/components/Book'

export default {
  components: {
    HeaderSection, Book
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/books/'
    }
  },
  computed: {
    ...mapState({
      books: 'books'
    }),
    header () {
      return this.$store.getters.headerSection('MyBooks')
    }
  }
}
</script>