<template>
<div class="container news-page">
  <header-section
    attach="ultimas"
    :title="`Noticias`"
    :description="`Estas son mis news`"
  />

  <div class="row">
    <div
      v-for="(activity, i) in news"
      :key="i"
      class="col-sm-6 col-md-4 mb-3"
    >
      <card-new
        :id="activity.id"
        :title="activity.title"
        :date="activity.date"
        :description="activity.title"
        :slug="activity.slug"
        :img="imgPath + activity.coverImage"
      />
    </div>
  </div>
</div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/base/HeaderSection'
import CardNew from '~/components/news/CardNew'
import { mapGetters } from 'vuex'

export default {
  name: 'News',
  components: {
    HeaderSection, CardNew
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/news/',
    }
  },
  computed: {
    ...mapGetters({
      news: 'newsReverseOrder'
    })
  },
}
</script>
