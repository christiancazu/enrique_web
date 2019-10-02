<template>
  <section class="testimonial">
    <h3 class="text-center mt-5">TESTIMONIOS</h3>
    <!-- <p class="text-center">Lorem ipsum dolor sit amet adipiscing elit</!-->

    <div id="carouselTestimonial" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          v-for="(testimony, i) in testimonials" :key="i"
          :class="{ 'active' : i === 0 }"
          data-target="#carouselTestimonial" 
          :data-slide-to="i"
        >
        </li>
      </ol>
      <div class="carousel-inner">
        <div
          v-for="(testimony, i) in testimonials" :key="i"
          :class="[
            { 'active' : i === 0 }, 
            'carousel-item'
          ]"
        >
          <div class="testimonial-wrap style-navi">
            <ul class="noo_testimonial noo-sync1">
              <li>
                <div class="noo-testi-content">
                  <i class="fa fa-quote-left"></i>
                  <div style="display: inline-block;">
                    <img src="quote-left.svg">
                    <p>
                      {{ testimony.description }}
                    </p>
                  </div>
                  <div class="testi-footer">
                    <!-- <img width="85" height="85" src="https://cdn.shopify.com/s/files/1/1297/1881/t/7/assets/testimonial_author_1.jpg?0" alt="" />  -->
                    <p class="testi-author text-center">
                    {{ testimony.authorName }} 
                    <strong class="text-center">{{ testimony.authorDescription }}&nbsp;</strong>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import constants from '~/config/constants'
import jqCarouselTestimonial from '~/jq-script/jq.carousel.testimonial'
import testimonialsContent from '~/contents/testimonials.json'

export default {
  name: 'CarouselTestimonials',
  data() {
    return {
      imgPath: constants.IMG_BASE_PATH + '/carousel-testimonial/',
      testimonials: testimonialsContent
    }
  },
  mixins: [jqCarouselTestimonial]
}
</script>
