export default {
  mounted() {
    this.loadJQCarouselMain()
  },
  methods: {
    loadJQCarouselMain() {
      window.jQuery('.carousel').carousel({
        interval: 1000
      })
    }
  },
}
