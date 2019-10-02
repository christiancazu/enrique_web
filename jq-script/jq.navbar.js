export default {
  mounted() {
    this.loadJQnavbar()
  },
  methods: {
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
}
