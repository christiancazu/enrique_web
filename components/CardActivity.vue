<template>
  <div class="card card-activity h-100">
    <div class="card-activity__date">
      <p class="card-activity__date--day">
        {{ day }}
      </p>
      <p class="card-activity__date--mounth">
        {{ mounth }}
      </p>
      <p class="card-activity__date--year">
        {{ year }}
      </p>
    </div>
    <div class="card-activity__img-container">
      <img
        :src="img" 
        :alt="`${ownerName} - ${title}`"
        class="card-img-top img-fluid card-activity__img-container--img"  
      >
    </div>
    <div class="card-body card-activity__body">
      <h5 class="card-title card-activity__body--title">
        {{ title }}
      </h5>
      <!-- <p class="card-text card-activity__body--description">
        {{ description }}
      </p> -->
      <nuxt-link 
        class="btn card-activity__body--read-more"
        :to="{ path: `/news/${slug}` }"
      >
        Leer más
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { OWNER_NAME } from '~/config/constants'

export default {
  name: 'CardActivity',
  props: {
    id: Number,
    title: String,
    date: String,
    description: String,
    slug: String,
    img: String
  },
  data() {
    return {
      ownerName: OWNER_NAME,
      day: '',
      mounth: '',
      year: ''
    }
  },
  mounted() {
    // spliting date value format 31-feb-9999 to 31 feb 9999
    const dateParts = this.date.split('-')
    this.day = dateParts[0]
    this.mounth = dateParts[1]
    this.year = dateParts[2]
  }
}
</script>
