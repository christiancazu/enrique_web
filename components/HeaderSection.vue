<template>
  <!-- <div class="row mb-4 header-section"> -->
  <!-- <div
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
  </div> -->
  <!-- <div class="main-title mb-4">
    <h1>
      {{ attach }}
      <span class="text-primary">{{ title }}</span>
      <span class="small_line" />
    </h1>
  </div> -->
  <div
    class="main-title-1 pb-4"
    :class="{'center': center}"
  >
    <div class="attach small">
      {{ attach }}
    </div>
    <h4 class="title">
      {{ title }}
      <!-- <span class="small_line" /> -->
    </h4>
    <p class="small_line" />
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
    },
    center: {
      type: Boolean, default: false
    }
  }
}
</script>
