<template>
  <div class="my-activities-container">
    <div class="row pb-70">
      <div class="col-sm-12 col-md-6">
        <h5 class="text--attach">Las mejores y</h5>
        <h1 class="text--title ">ultimas publicaciones</h1>
        <div class="pt-3 pb-6">
          <p>
            Estas son publicaciones relacionadas conmigo, esto te ayudará a conocer más de mi.
          </p>
        </div>
      </div>
    </div>
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
import { mapState } from 'vuex'

export default {
  name: 'MyActivities',
  components: {
    CardActivity
  },
  data () {
    return {
      imgPath: constants.IMG_BASE_PATH + '/activities/',
    }
  },
  computed: {
    ...mapState({
      activities: 'activities'
    })
  },
}
</script>
