<template>
<main>
  <carousel-main />

  <my-books full-row />

  <testimonials />

  <about />

  <contact-form />
</main>
</template>

<script>
import CarouselMain from '~/components/CarouselMain'
import MyBooks from '~/components/books/MyBooks'
import About from '~/components/About'
import Testimonials from '~/components/Testimonials'
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    CarouselMain, MyBooks, About, Testimonials, ContactForm
  },


}
</script>
