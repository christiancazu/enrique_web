<template>
  <div class="container books-page">

    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
      full-row
    />

  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection'

export default {
  components: {
    HeaderSection
  },
  computed: {
    header() {
      return this.$store.getters.headerSection('MyBooks')
    }
  }
}
</script>