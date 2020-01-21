<template>
<div
  class="main-title"
  :class="{'center': center}"
>
  <div class="attach">
    {{ attach }}
  </div>
  <h2 class="title">
    {{ title }}
  </h2>
  <div class="small_line" />
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
