<template>
  <div class="container pt-100 pb-100">

    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

    <div class="row">
      <div
        v-for="(book, i) in books"
        :key="i"
        class="col-12 col-lg-6"
      >
        <card-book
          :img-src="imgPath + book.imgSrc"
          :title="book.title"
          :description="book.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import constants from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'
import CardBook from '~/components/CardBook'
import { mapState } from 'vuex'

export default {
  name: 'MyBooks',
  components: {
    HeaderSection ,CardBook
  },
  data () {
    return {
      imgPath: constants.IMG_BASE_PATH + '/books/'
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
