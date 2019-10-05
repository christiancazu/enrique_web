<template>
  <div class="row pb-70">
    <div class="col-sm-12 col-md-6">
      <h5 class="text--attach">{{ attach }}</h5>
      <h1 class="text--title ">{{ title }}</h1>
      <div class="pt-3 pb-6">
        <p v-html="description">
        </p>
      </div>
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
  }
}
</script>
