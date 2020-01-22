<template>
<div class="team-member">
  <img
    :src="img"
    :alt="`${ownerName} - ${title}`"
    class="img-fluid"
  >
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
    <p class="small mt-2">
      <i
        class="fa fa-calendar"
        aria-hidden="true"
      />
      {{ `${day}/${mounth}/${year}` }}
    </p>
  </div>
  <div class="counter-block">
    <h6 class="p-1 title small">
      {{ title }}
    </h6>
    <p>
      <i
        class="fa fa-calendar"
        aria-hidden="true"
      />
      {{ `${day}/${mounth}/${year}` }}
    </p>
  </div>
</div>
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
  data () {
    return {
      ownerName: OWNER_NAME,
      day: '',
      mounth: '',
      year: ''
    }
  },
  mounted () {
    // spliting date value format 31-feb-9999 to 31 feb 9999
    const dateParts = this.date.split('-')
    this.day = dateParts[0]
    this.mounth = dateParts[1]
    this.year = dateParts[2]
  },

  methods: {
    crop (string) {
      const x = string.slice(0, 90)
      return x
    }
  },
}
</script>
