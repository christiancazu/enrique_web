<template>
<div>
  <my-books />
  <testimonials />
</div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import { mapState } from 'vuex'
import MyBooks from '~/components/books/MyBooks'
import Testimonials from '~/components/Testimonials'

export default {
  components: {
    MyBooks, Testimonials
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