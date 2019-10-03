<template>
  <div class="my-activities-container">
    <h1 class="text-center text-title my-5">
      Mis Actividades
    </h1>
    <div class="row justify-content-center">
      <div 
        v-for="(activity, i) in activities" :key="i"
        class="col-12 col-sm-6 col-md-4"
      >
        <card-activity
          :title="activity.title"
          :date="activity.date"
          :description="activity.description"
          :link="activity.link"
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
import activitiesContent from '~/contents/activities'

export default {
  name: 'MyActivities',
  components: {
    CardActivity
  },
  data() {
    return {
      imgPath: constants.IMG_BASE_PATH + '/activities/',
      activities: activitiesContent
    }
  }
}
</script>
