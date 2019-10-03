<template>
  <div class="container pt-100 pb-100">
    <div class="row pb-70">
      <div class="col-sm-12 col-md-5">
        <h5 class="text--attach">Te presento</h5>
        <h1 class="text--title ">mis libros</h1>
        <div class="pt-3 pb-6">
          <p>
            Te invito a que los leas soy maravillosos e inspiradores, y dejame un mensaje o comentarios de lo que te parecieron.
            <br> Estare muy agradecido.
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div
        v-for="(book, i) in books"
        :key="i"
        class="col-12 col-lg-5"
      >
        <card-book
          :img-src="imgPath + book.imgSrc"
          :img-alt="book.imgAlt"
          :title="book.title"
          :description="book.description"
        />
      </div>
    </div>
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
