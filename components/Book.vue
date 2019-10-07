<template>
  <div class="book-container">
    <ul class="book__item">
      <li>
        <figure class='book'>

          <!-- Front -->

          <ul class='hardcover_front'>
            <li>
              <div class="coverDesign">
                <img :src="imgSrc">
              </div>
            </li>
            <li></li>
          </ul>

          <!-- Pages -->

          <ul class='page'>
            <li></li>
            <li>
              <h5 class="text-page">
               {{ description }}
              </h5>
              <nuxt-link 
                class="btn"
                to=""
              >
                Leer más
              </nuxt-link>
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <!-- Back -->

          <ul class='hardcover_back'>
            <li></li>
            <li></li>
          </ul>
          <ul class='book_spine'>
            <li></li>
            <li></li>
          </ul>
        </figure>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    imgSrc: String,
    title: String,
    description: String
  }
}
</script>
