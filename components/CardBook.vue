<template>
  <div class="card-book">
    <ul class="card-book__item">
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
              <a class="btn" href="#">Leer más</a>
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
  name: 'CardBook',
  props: {
    imgSrc: String,
    title: String,
    description: String
  }
}
</script>
