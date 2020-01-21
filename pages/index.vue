<template>
<main>
  <carousel-main />

  <my-books full-row />

  <testimonials />

  <main-news />

  <contact-form />
</main>
</template>

<script>
import CarouselMain from '~/components/CarouselMain'
import MyBooks from '~/components/books/MyBooks'
import MainNews from '~/components/MainNews'
import Testimonials from '~/components/Testimonials'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    CarouselMain, MyBooks, MainNews, Testimonials, ContactForm
  },
  data () {
    return {

    }
  },


}
</script>
