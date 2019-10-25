<template>
  <section class="container testimonials">
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

    <div 
      id="carouselTestimonial" 
      class="carousel slide" 
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          v-for="(testimony, i) in testimonials"
          :key="i"
          :class="{ 'active' : i === 0 }"
          data-target="#carouselTestimonial" 
          :data-slide-to="i"
        />
      </ol>
      <div class="carousel-inner">
        <div
          v-for="(testimony, i) in testimonials"
          :key="i"
          :class="[
            { 'active' : i === 0 }, 
            'carousel-item'
          ]"
        >
          <div class="testimony">
            <div class="testimony__body">
              <p class="testimony__body__text--content">
                <i
                  class="fa fa-quote-left"
                  aria-hidden="true"
                />
                {{ testimony.description }} 
                <i
                  class="fa fa-quote-right"
                  aria-hidden="true"
                />
              </p>
            </div>
            <div class="testimony__footer">
              <!-- <img width="85" height="85" src="https://cdn.shopify.com/s/files/1/1297/1881/t/7/assets/testimonial_author_1.jpg?0" alt="" />  -->
              <h6 class="testimony__footer__text--author-name">
                {{ testimony.authorName }}
              </h6>
              <p class="testimony__footer__text--author-description">
                {{ testimony.authorDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import jqCarouselTestimonial from '~/jq-script/jq.carousel.testimonials'
import testimonialsContent from '~/contents/testimonials.json'
import HeaderSection from '~/components/HeaderSection'

export default {
  name: 'Testimonials',
  components: {
    HeaderSection
  },
  mixins: [jqCarouselTestimonial],
  data() {
    return {
      imgPath: IMG_BASE_PATH + '/testimonials/',
      testimonials: testimonialsContent
    }
  },
  computed: {
    header() {
      return this.$store.getters.headerSection('Testimonials')
    }
  }
}
</script>
