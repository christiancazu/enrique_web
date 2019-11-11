<template>
  <div class="book-container">
    <ul class="book__item">
      <li>
        <figure class="book">
          <!-- Front -->

          <ul class="hardcover_front">
            <li>
              <div class="coverDesign">
                <img :src="imgSrc">
              </div>
            </li>
            <li />
          </ul>

          <!-- Pages -->

          <ul class="page">
            <li />
            <li>
              <h5
                class="text-page p"
                v-html="description"
              />
              <nuxt-link
                v-if="!hideBtn"
                class="btn"
                to="/books"
              >
                Leer más
              </nuxt-link>
            </li>
          </ul>

          <!-- Back -->

          <ul class="hardcover_back">
            <li />
            <li />
          </ul>
          <ul class="book_spine">
            <li />
            <li />
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
    imgSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    hideBtn: {
      type: Boolean, default: false
    }
  }
}
</script>
