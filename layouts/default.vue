<template>
  <div>
    <the-navbar />
    <!-- <div class="paleta-colors">
      <input
        v-model="color"
        type="text"
        class="form-control-sm form-control"
      >
      <button
        class="btn btn-sm btn-info"
        @click="changeColor"
      >
        CARGAR
      </button>
    </div> -->
    <nuxt />

    <TheFooter />
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
      colors: [
        { color: '#ccc' }
      ]
    }
  },

  methods: {
    changeColor () {
      document.documentElement.style.setProperty('--primary', this.color)
    }
  },
}
</script>
