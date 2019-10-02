<template>
  <section class="page-section clearfix">
    <div class="container">
      <div class="book">
        <img
          :src="imgSrc"
          :alt="imgAlt"
          class="img-fluid book-img mb-3 mb-lg-0 rounded" 
        >
        <div class="book-text left-0 text-center bg-faded p-5 rounded">
          <h2 class="section-heading mb-4">
            <span class="section-heading-upper">
              {{ title }}
            </span>
          </h2>
          <p class="mb-3">
            {{ description }}
          </p>
          <div class="book-button mx-auto">
            <a class="btn btn-dark btn-xl" href="#">
              Leer más
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardBook',
  props: {
    imgSrc: String,
    imgAlt: String,
    title: String,
    description: String
  }
}
</script>
