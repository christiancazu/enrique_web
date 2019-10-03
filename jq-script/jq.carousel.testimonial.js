export default {
  mounted() {
    this.loadJQCarouselTestimonial()
  },
  methods: {
    loadJQCarouselTestimonial() {
      window.jQuery('#carouselTestimonial').carousel({
        interval: 4000
      })
    }
  },
}
