<template>
  <section
    class="container my-books"
  >
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
      center
    />

    <div class="row justify-content-center">
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
          <payment
            :book="book"
            isblock
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'
import Book from '~/components/Book'
import Payment from '~/components/Payment'
import { mapState } from 'vuex'

export default {
  name: 'MyBooks',
  components: {
    HeaderSection, Book, Payment
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
