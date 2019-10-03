export default {
  mounted() {
    this.verifyCurrentRoute()
  },
  methods: {
    verifyCurrentRoute() {
      if (this.$route.path === '/') {
        this.loadJQnavbar()
      } else {
        this.loadNavbarWhereNotIndex()
      }
    },
    loadNavbarWhereNotIndex() {
      const mainNav = window.jQuery("#mainNav")
      window.jQuery(window).off("scroll", window['navbarCollapse'])
      window.jQuery(mainNav).addClass("navbar-shrink");
    },
    loadJQnavbar() {
      const navbarCollapse = () => {
      const mainNav = window.jQuery("#mainNav")
      if (window.jQuery(mainNav).offset().top > 100) {
        window.jQuery(mainNav).addClass("navbar-shrink");
      } else {
        window.jQuery(mainNav).removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    window.jQuery(window).scroll(navbarCollapse); 
    }
  },
  watch: {
    '$route.path' (val) {
      console.error(val);
      if (val === '/') {
        this.loadJQnavbar()
      } else {
        this.loadNavbarWhereNotIndex()
      }
    }
  },
}
