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
      :class="[
        { 'flex-row-reverse' : i % 2 },
        'row justify-content-center books-details'
      ]"
    >
      <div class="col-lg-5 books-details__description">
        <h5 class="h5 books-details__description__text">
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
      </div>

      <div class="col-lg-5 books-details__book">
        <book
          :img-src="imgPath + book.imgSrc"
          :title="book.title"
          :description="book.description"
        />
      </div>

      <div class="col-12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum odit consequuntur consectetur possimus sunt optio eos. Eos nulla recusandae odio deleniti omnis, tempore incidunt debitis quos eum quidem voluptates molestias.
        Quod eaque nihil exercitationem ullam fuga commodi odio aliquam quisquam. Mollitia, quo sint voluptas magnam ullam iste minima inventore praesentium non distinctio eveniet ratione, nihil maxime! Voluptatibus eum eos dicta.
        Autem magnam cum facere fugit, soluta provident nemo, porro assumenda consequuntur fuga, minima corrupti voluptatibus ex ad vero sed. Ut nostrum debitis quo eum amet nihil rem architecto voluptates quae.
      </div>
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
  data() {
    return {
      imgPath: IMG_BASE_PATH + '/books/'
    }
  },
  computed: {
    ...mapState({
      books: 'books'
    }),
    header() {
      return this.$store.getters.headerSection('MyBooks')
    }
  }
}
</script>