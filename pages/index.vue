<template>
  <main>
    <carousel-main />

    <my-books />

    <about />

    <my-activities />

    <carousel-testimonials />
    
  </main>
</template>

<script>
import CarouselMain from '~/components/CarouselMain'
import MyBooks from '~/components/MyBooks'
import About from '~/components/About'
import CarouselTestimonials from '~/components/CarouselTestimonials'
import MyActivities from '~/components/MyActivities'

export default {
  components: {
    CarouselMain, MyBooks, About, CarouselTestimonials, MyActivities
  }
}
</script>
