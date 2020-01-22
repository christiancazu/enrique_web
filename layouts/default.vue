<template>
<div>
  <the-navbar />
  <nuxt />
  <the-footer />
</div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    TheNavbar,
    TheFooter
  },
  data () {
    return {
      color: '',
      colors: [{ color: '#ccc' }]
    }
  },

  methods: {
    changeColor () {
      document.documentElement.style.setProperty('--primary', this.color)
    }
  },
}
</script>
