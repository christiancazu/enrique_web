<template>
  <div class="team-member"> 
    <img
      :src="img" 
      :alt="`${ownerName} - ${title}`"
      class="img-fluid"
    >
    <h6 class="p-1 title small">
      {{ title }}
    </h6>
    <div class="team-social-icon">
      <h6 class="title">
        {{ title }}
      </h6>
      <p class="description small">
        {{ description.slice(0, 100) }}...
      </p>
      <nuxt-link 
        class="btn btn-block btn-flat-primary bottom"
        :to="{ path: `/news/${slug}` }"
      >
        Leer más
      </nuxt-link>
    </div>
    <div class="counter-block px-4">
      <p class="small">
        <i
          class="fa fa-calendar"
          aria-hidden="true"
        />
        {{ `${day}/${mounth}/${year}` }}
      </p>
    </div>
  </div>
  <!-- <div class="card card-activity h-100">
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
      </h5> -->
  <!-- <p class="card-text card-activity__body--description">
        {{ description }}
      </p> -->
  <!-- <nuxt-link 
        class="btn card-activity__body--read-more"
        :to="{ path: `/news/${slug}` }"
      >
        Leer más
      </nuxt-link>
    </div>
  </div> -->
</template>

<script>
import { OWNER_NAME } from '~/config/constants'

export default {
  name: 'CardActivity',
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    slug: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
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
  },

  methods: {
    crop (string) {
      console.warn(string)
      const x=  string.slice(0, 90)
      console.warn(x, 'x')
      return x
    }
  },
}
</script>
