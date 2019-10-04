<template>
  <div
    v-if="currentActivity" 
    class="container news-details"
  >
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="card card-news-details">
        <no-ssr>    
          <owl-carousel
            :autoplay="true"
            :responsive="{
              0: { items: 1 },
              992: { items: 2 }
            }"
          >

            <img src="https://placeimg.com/200/200/any?1">

            <img src="https://placeimg.com/200/200/any?2">

            <img src="https://placeimg.com/200/200/any?3">

            <img src="https://placeimg.com/200/200/any?4">
        
          </owl-carousel>
        
        </no-ssr>        
          <div class="card-body card-news-details__body">
            <h5 class="card-title card-news-details__body--title">
              {{ currentActivity.title }}
            </h5>
            <h6 class="card-subtitle card-news-details__body--subtitle">
              {{ currentActivity.date }}
            </h6>
            <p class="card-text card-news-details__body--text">
              {{ currentActivity.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsSlug',
  computed: {
    currentActivity() {
      return this.$store.getters.currentActivity(this.$route.params.slug)
    }
  }
}
</script>
