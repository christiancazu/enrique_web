const $ = window.jQuery

export default {
  mounted() {
    this.verifyCurrentRoute()
  },
  methods: {
    verifyCurrentRoute() {
      if (this.$route.path === '/') {
        this.loadJQNavbarOnHome()
      } else {
        this.loadJQNavbarWhereNotHome()
      }
    },
    loadJQNavbarWhereNotHome() {
      const mainNav = $("#mainNav")
      $(window).off("scroll", window['navbarCollapse'])
      $(mainNav).addClass("navbar-shrink");
    },
    loadJQNavbarOnHome() {
      const mainNav = $("#mainNav")
      const navbarCollapse = () => {
      if ($(mainNav).offset().top > 100) {
        $(mainNav).addClass("navbar-shrink");
      } else {
        $(mainNav).removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse); 
    }
  },
  watch: {
    '$route.path' (val) {
      $('.navbar-collapse').collapse('hide')
      if (val === '/') {
        this.loadJQNavbarOnHome()
      } else {
        this.loadJQNavbarWhereNotHome()
      }
    }
  },
}
