<template>
  <div class="container activities">
    
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

    <div class="row justify-content-center">
      <div
        v-for="(activity, i) in activities"
        :key="i"
        class="col-sm-6 col-md-4 mb-3"
      >
        <card-activity
          :id="activity.id"
          :title="activity.title"
          :date="activity.date"
          :description="activity.description"
          :slug="activity.slug"
          :img="imgPath + activity.img"
        />
      </div>
    </div>
    <div class="row my-5">
      <nuxt-link
        :to="{ name: 'news' }"
        class="btn btn-primary btn-lg"
        style="margin: 0 auto"
      >
        Ver más
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import CardActivity from '~/components/CardActivity'
import HeaderSection from '~/components/HeaderSection'
import { mapGetters } from 'vuex'

export default {
  name: 'MyActivities',
  components: {
    HeaderSection, CardActivity
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/activities/',
    }
  },
  computed: {
    ...mapGetters({
      activities: 'threeLastActivities'
    }),
    header() {
      return this.$store.getters.headerSection('MyActivities')
    }
  },
}
</script>
