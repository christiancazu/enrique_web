<template>
  <section class="container my-books">
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

    <div class="row justify-content-center">
      <div
        v-for="(book, i) in books"
        :key="i"
        class="col-lg-5"
      >
        <book
          :img-src="imgPath + book.imgSrc"
          :title="book.title"
          :description="book.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'
import Book from '~/components/Book'
import { mapState } from 'vuex'

export default {
  name: 'MyBooks',
  components: {
    HeaderSection ,Book
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
    header() {
      return this.$store.getters.headerSection('MyBooks')
    }
  },
}
</script>
