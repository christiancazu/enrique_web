<template>
  <div class="row mb-5 header-section">
    <div :class="[ 
      { 'col-md-6' : !fullRow }, 
      'header-section__content'
      ]">
      <h5 class="header-section__content__text--attach">
        {{ attach }}
      </h5>
      <h1 class="header-section__content__text--title">
        {{ title }}
      </h1>
      <p class="header-section__content__text--description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  props: {
    attach: String,
    title: String,
    description: String,
    fullRow: {
      type: Boolean, default: false
    }
  }
}
</script>
