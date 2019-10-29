<template>
  <div class="row mb-4 header-section">
    <div
      :class="[ 
        { 'col-md-6' : fullRow }, 
        'col header-section__content'
      ]"
    >
      <h5 class="header-section__content__text--attach">
        {{ attach }}
      </h5>
      <h1 class="header-section__content__text--title">
        {{ title }}
      </h1>
      <p
        class="header-section__content__text--description"
        v-html="description"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    attach: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    fullRow: {
      type: Boolean, default: false
    }
  }
}
</script>
