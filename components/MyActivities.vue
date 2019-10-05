<template>
  <div class="my-activities-container">
    
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

    <div class="row justify-content-center">
      <div
        v-for="(activity, i) in activities"
        :key="i"
        class="col-12 col-sm-6 col-md-4"
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
      <div style="margin: 0 auto">
        <nuxt-link
          :to="{ name: 'news' }"
          class="btn btn-lg btn-primary"
        >
          Ver más
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import constants from '~/config/constants'
import CardActivity from '~/components/CardActivity'
import HeaderSection from '~/components/HeaderSection'
import { mapState } from 'vuex'

export default {
  name: 'MyActivities',
  components: {
    HeaderSection, CardActivity
  },
  data () {
    return {
      imgPath: constants.IMG_BASE_PATH + '/activities/',
    }
  },
  computed: {
    ...mapState({
      activities: 'activities'
    }),
    header() {
      return this.$store.getters.headerSection('MyActivities')
    }
  },
}
</script>
