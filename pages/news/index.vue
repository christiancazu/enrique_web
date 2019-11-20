<template>
  <div class="container news-page">
    <header-section
      attach="ultimas"
      :title="`Noticias`"
      :description="`Estas son mis activities`"
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
  </div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'
import CardActivity from '~/components/CardActivity'
import { mapGetters } from 'vuex'

export default {
  name: 'News',
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
      activities: 'activitiesReverseOrder'
    })
  },
}
</script>
