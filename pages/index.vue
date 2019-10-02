<template>
  <div>
    <carousel-main />

    <my-books />

    <about />

    <carousel-testimonial />

    <!-- <div class="test">
    </div> -->
    
  </div>
</template>

<script>
import CarouselMain from '~/components/CarouselMain'
import MyBooks from '~/components/MyBooks'
import About from '~/components/About'
import CarouselTestimonial from '~/components/CarouselTestimonial'

export default {
  components: {
    CarouselMain, MyBooks, About, CarouselTestimonial
  }
}
</script>

<style>
.test {
  min-height: 200vh;
  min-width: 100vw;
}
</style>
