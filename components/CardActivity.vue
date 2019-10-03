<template>
  <div class="card card-activity">
    <div class="card-activity__date">
      <h5 class="card-activity__date--day">
        {{ day }}
      </h5>
      <h6 class="card-activity__date--mounth">
        {{ mounth }}
      </h6>
      <p class="card-activity__date--year">
        {{ year }}
      </p>
    </div>
    <div class="card-activity__img-container">
      <img
        :src="img" 
        :alt="title"
        class="card-img-top img-fluid card-activity__img-container--img"  
      >
    </div>
    <div class="card-body card-activity__body">
      <h5 class="card-title card-activity__body--title">
        {{ title }}
      </h5>
      <p class="card-text card-activity__body--description">
        {{ description }}
      </p>
      <nuxt-link 
        class="btn card-activity__body--read-more"
        :to="{ name: link }"
      >
        Leer más
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardActivity',
  props: {
    title: String,
    date: String,
    description: String,
    link: String,
    img: String
  },
  data() {
    return {
      day: '',
      mounth: '',
      year: ''
    }
  },
  mounted() {
    const dateParts = this.date.split('-')
    this.day = dateParts[0]
    this.mounth = dateParts[1]
    this.year = dateParts[2]
  }
}
</script>
