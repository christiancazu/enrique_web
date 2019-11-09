<template>
  <div class="container books-page">
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
      full-row
    />

    <div
      v-for="(book, i) in books"
      :key="i"
    >
      <div class="row">
        <div class="col-lg-6 books-details__book">
          <book
            :img-src="imgPath + book.imgSrc"
            :title="book.title"
            :description="book.summary"
            hide-btn
          />
        </div>
        <div class="col-lg-6 books-details__description">
          <!-- <h6 class="books-details__description__text mb-4"> -->
          <!-- </h6> -->
          <h5 class="books-details__description__title">
            {{ book.title }}
          </h5>
          <p class="books-details__description__content">
            {{ book.description }}
          </p>

          <payment
            :book="book"
            isblock
          />

          <!-- <modal-base
            id-modal="getSummary"
            label-btn="Adquirir resumen"
            title-modal="Déjanos tus datos"
            its-free
          >
            <template v-slot:body-content>
              <form action="">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombres"
                    aria-label="Nombres"
                    aria-describedby="basic-addon1"
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apellidos"
                    aria-label="Apellidos"
                    aria-describedby="basic-addon1"
                  >
                </div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Correo electrónico"
                    aria-label="Correo electrónico"
                    aria-describedby="basic-addon1"
                  >
                </div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Celular"
                    aria-label="Celular"
                    aria-describedby="basic-addon1"
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Celular 2"
                    aria-label="Celular 2"
                    aria-describedby="basic-addon1"
                  >
                </div>
              </form>
            </template>
          </modal-base> -->
        </div>
      </div>
      <hr v-if="i < books.length -1 ">
    </div>
  </div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'
import { mapState } from 'vuex'
import Book from '~/components/Book'
import Payment from '~/components/Payment'

export default {
  components: {
    HeaderSection, Book, Payment
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/books/',
    }
  },
  computed: {
    ...mapState({
      books: 'books'
    }),
    header () {
      return this.$store.getters.headerSection('MyBooks')
    }
  },
}
</script>