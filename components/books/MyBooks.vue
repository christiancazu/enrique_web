<template>
<section class="container my-books">
  <header-section
    :attach="header.attach"
    :title="header.title"
    :description="header.description"
    :center="fullRow"
  />

  <!-- is full row -->
  <div
    v-if="fullRow"
    class="row justify-content-center"
  >
    <div
      v-for="(book, i) in books"
      :key="i"
      class="col-lg-6"
    >
      <book
        :img-src="imgPath + book.imgSrc"
        :title="book.title"
        :description="book.summary"
      />
      <div class="px-5">
        <payment-methods
          :book="book"
          isblock
        />
      </div>
    </div>
  </div>

  <!-- no full row -->
  <template v-else>
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

          <payment-methods
            :book="book"
            isblock
          />
        </div>
      </div>
      <hr v-if="i < books.length-1">
    </div>
  </template>
</section>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/base/HeaderSection'
import Book from '~/components/books/Book'
import PaymentMethods from '~/components/books/PaymentMethods'
import { mapState } from 'vuex'

export default {
  name: 'MyBooks',
  components: {
    HeaderSection, Book, PaymentMethods
  },
  props: {
    fullRow: { type: Boolean, default: false },
    titleFullRow: { type: Boolean, default: false }
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
  },
}
</script>
