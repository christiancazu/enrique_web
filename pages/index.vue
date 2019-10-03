<template>
  <main>
    <carousel-main />

    <my-books />

    <about />

    <my-activities />

    <carousel-testimonials />

    <form-contact />

  </main>
</template>

<script>
import CarouselMain from '~/components/CarouselMain'
import MyBooks from '~/components/MyBooks'
import About from '~/components/About'
import CarouselTestimonials from '~/components/CarouselTestimonials'
import MyActivities from '~/components/MyActivities'
import FormContact from '~/components/FormContact.vue'

export default {
  components: {
    CarouselMain, MyBooks, About, CarouselTestimonials, MyActivities, FormContact
  }
}
</script>
