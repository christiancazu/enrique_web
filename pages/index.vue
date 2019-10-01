<template>
  <div>
    <carousel-main />

    <my-books />

    <div class="test">
    </div>
    
  </div>
</template>

<script>
import CarouselMain from '~/components/CarouselMain'
import MyBooks from '~/components/MyBooks'

export default {
  components: {
    CarouselMain, MyBooks
  }
}
</script>

<style>
.test {
  min-height: 200vh;
  min-width: 100vw;
}
</style>
