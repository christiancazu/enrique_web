<template>
  <div>
    <carousel-main />

    <div class="test">
    </div>
    
  </div>
</template>

<script>
import CarouselMain from '~/components/CarouselMain'

export default {
  components: {
    CarouselMain
  }
}
</script>

<style>
.test {
  min-height: 200vh;
  min-width: 100vw;
}
</style>
