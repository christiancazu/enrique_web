export default {
  mounted() {
    this.loadJQCarouselTestimonial()
  },
  methods: {
    loadJQCarouselTestimonial() {
      window.jQuery('#carouselTestimonial.carousel').carousel({
        // interval: 1000
      })
    }
  },
}
