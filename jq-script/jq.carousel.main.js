export default {
  mounted() {
    this.loadJQCarouselMain()
  },
  methods: {
    loadJQCarouselMain() {
      window.jQuery('#carouselMain.carousel').carousel({
        interval: 4000
      })
    }
  },
}
