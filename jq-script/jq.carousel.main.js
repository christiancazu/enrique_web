export default {
  mounted () {
    this.loadJQCarouselMain()
  },
  methods: {
    loadJQCarouselMain () {
      window.jQuery('#carouselMain').carousel({
        interval: 4000
      })
    }
  },
}
