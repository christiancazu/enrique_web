<template>
  <div
    v-if="currentActivity"
    class="container news-details-page"
  >
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="card card-news-details">
          <template v-if="currentActivity.images.length > 1">
            <no-ssr>
              <owl-carousel
                :autoplay="true"
                :responsive="{
                  0: { items: 1, dots:false },
                  992: { items: 2, dots:false }
                }"
                :nav="false"
              >
                <template v-for="(img, i) in currentActivity.images">
                  <img
                    :key="i"
                    :src="`/images/news/${img}`"
                  >
                </template>
              </owl-carousel>
            </no-ssr>
          </template>
          <div
            v-else
            class="cover-image"
          >
            <img :src="`/images/news/${currentActivity.coverImage}`">
          </div>

          <div class="card-body card-news-details__body pb-3">
            <h5 class="card-news-details__title">
              {{ currentActivity.title }}
            </h5>
            <p class="small">
              <i
                class="fa fa-calendar"
                aria-hidden="true"
              />
              {{ `${ currentActivity.date }` }}
              <span class="pl-5">
                <i
                  class="fa fa-edit"
                  aria-hidden="true"
                />
                {{ `${ currentActivity.by }` }}</span>
            </p>
            <p
              class="card-text card-news-details__body--text font-weight-bold"
              v-html="currentActivity.subtitle"
            />
            <hr>
            <p
              class="card-text card-news-details__body--text"
              v-html="currentActivity.body"
            />
            <hr>
            <p
              v-if="currentActivity.url"
              class="text-uppercase font-weight-bold pt-2 text-right text-primary"
            >
              Ver la nota completa <a
                target="bank"
                class="text-danger"
                :href="currentActivity.url"
              >aquí</a>
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
  components: {
  },
  computed: {
    images: function() {
      return this.currentActivity.images.length
    },
    currentActivity () {
      return this.$store.getters.currentActivity(this.$route.params.slug)
    }
  }
}
</script>
