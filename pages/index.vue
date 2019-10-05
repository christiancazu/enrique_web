<template>
  <main>
    <carousel-main />

    <my-books />

    <about />

    <my-activities />

    <testimonials />

    <form-contact />

  </main>
</template>

<script>
import CarouselMain from '~/components/CarouselMain'
import MyBooks from '~/components/MyBooks'
import About from '~/components/About'
import Testimonials from '~/components/Testimonials'
import MyActivities from '~/components/MyActivities'
import FormContact from '~/components/FormContact.vue'

export default {
  components: {
    CarouselMain, MyBooks, About, Testimonials, MyActivities, FormContact
  }
}
</script>
