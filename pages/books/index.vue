<template>
  <div>
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
        <div class="row">
          <div class="col-lg-6 books-details__book">
            <book
              :img-src="imgPath + book.imgSrc"
              :title="book.title"
              :description="book.summary"
              hide-btn
            />
          </div>
          <div class="col-lg-6 books-details__description">
            <h5 class="books-details__description__title">
              {{ book.title }}
            </h5>
            <p class="books-details__description__content">
              {{ book.description }}
            </p>

            <payment
              :book="book"
              isblock
            />
          </div>
        </div>
        <hr v-if="i < books.length-1">
      </div>
    </div>
    <testimonials />
  </div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'
import { mapState } from 'vuex'
import Book from '~/components/Book'
import Testimonials from '~/components/Testimonials'
import Payment from '~/components/Payment'

export default {
  components: {
    HeaderSection, Book, Payment, Testimonials
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/books/',
    }
  },
  computed: {
    ...mapState({
      books: 'books'
    }),
    header () {
      return this.$store.getters.headerSection('MyBooks')
    }
  },
}
</script>