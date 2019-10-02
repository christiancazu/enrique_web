<template>
  <div>

    <h1 class="text-center mt-5">Mis libros</h1>

    <card-book
      v-for="(book, i) in books" :key="i"
      :img-src="imgPath + book.imgSrc"
      :img-alt="book.imgAlt"
      :title="book.title"
      :description="book.description"
    />
  </div>
</template>

<script>
import constants from '~/config/constants'
import CardBook from '~/components/CardBook'

export default {
  name: 'MyBooks',
  components: {
    CardBook
  },
  data () {
    return {
      imgPath: constants.IMG_BASE_PATH + '/books/',
      books: [
        { 
          imgSrc: 'hablando-con-un-angel.jpg',
          imgAlt: 'Hablando con un ángel',
          title: 'Hablando con un ángel',
          description: 'hablando-con-un-angel hablando-con-un-angel hablando-con-un-angel hablando-con-un-angel'
        },
        { 
          imgSrc: 'buscando-la-felicidad.jpg',
          imgAlt: 'buscando la felicidad',
          title: 'Buscando la felicidad',
          description: 'buscando la felicidad buscando la felicidad buscando la felicidad buscando la felicidad'
        }
      ]
    }
  }
}
</script>
