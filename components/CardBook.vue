<template>
  <div class="card-book mb-5">
    <div
      :style="`background: url(${imgSrc}) 20% 10% / cover no-repeat;`"
      class="wrapper"
    >
      <div class="data text-center">
        <div class="content">
          <p class="text text-justify">{{ description }}</p>
          <button class="btn btn-book">Leer más</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBook',
  props: {
    imgSrc: String,
    title: String,
    description: String
  }
}
</script>
