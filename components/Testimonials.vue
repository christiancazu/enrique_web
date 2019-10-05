<template>
  <section class="container testimonial">

    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

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
                  <i class="fa fa-quote-left" style="font-size: 2rem"></i>
                  <div style="display: inline-block;">
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
import HeaderSection from '~/components/HeaderSection'

export default {
  name: 'Testimonials',
  components: {
    HeaderSection
  },
  data() {
    return {
      imgPath: constants.IMG_BASE_PATH + '/testimonial/',
      testimonials: testimonialsContent
    }
  },
  computed: {
    header() {
      return this.$store.getters.headerSection('Testimonials')
    }
  },
  mixins: [jqCarouselTestimonial]
}
</script>
