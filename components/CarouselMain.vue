<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div 
        v-for="(image, i) in images" :key="i"
        class="carousel-item"
        :class="{ 'active'  : i === 0 }"
      >
        <img
          :src="imgPath + image.src"
          class="d-block w-100"
          :alt="image.alt"
        >
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import constants from '~/config/constants'
import jqCarouselMain from '~/jq-script/jq.carousel.main'

export default {
  name: 'CarouselMain',
  data() {
    return {
      imgPath: constants.IMG_BASE_PATH + '/carousel-main/',
      images: [
        { src: 'cropped-viajar-solo.jpg', alt: '' },
        { src: 'cropped-viajar-solo.jpg', alt: '' },
        { src: 'cropped-viajar-solo.jpg', alt: '' }
      ]
    }
  },
  mixins: [jqCarouselMain]
}
</script>
