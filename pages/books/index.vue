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
          <h6 class="books-details__description__text mb-4">
            <i
              class="fa fa-quote-left books-details__description__text__quote--left"
              aria-hidden="true"
            />
            {{ book.description }}
            <i
              class="fa fa-quote-right books-details__description__text__quote--right"
              aria-hidden="true"
            />
          </h6>
          <modal-base
            id-modal="buyBook"
            label-btn="Comprar libro"
            class-btn="btn-primary"
            title-modal="Elije el método de compra"
            to-buy
          >
            <template v-slot:body-content>
              <nav>
                <div
                  id="nav-tab"
                  class="nav nav-tabs"
                  role="tablist"
                >
                  <a
                    id="nav-home-tab"
                    class="nav-item nav-link active"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >VOUCHER</a>
                  <a
                    id="nav-profile-tab"
                    class="nav-item nav-link"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >PAYPAL</a>
                  <a
                    id="nav-contact-tab"
                    class="nav-item nav-link"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >VISA</a>
                </div>
              </nav>
              <div
                id="nav-tabContent"
                class="tab-content"
              >
                <div
                  id="nav-home"
                  class="tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <form
                    action=""
                    class="mt-3"
                  >
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
                      <div class="custom-file">
                        <input
                          id="inputGroupFile04"
                          type="file"
                          class="custom-file-input"
                          aria-describedby="inputGroupFileAddon04"
                        >
                        <label
                          class="custom-file-label"
                          for="inputGroupFile04"
                        >SUBIR VOUCHER</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  id="nav-profile"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <form
                    action=""
                    class="mt-3"
                  >
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
                        placeholder="Numero de la tarjeta"
                        aria-label="Numero de la tarjeta"
                        aria-describedby="basic-addon1"
                      >
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="MES"
                        aria-label="MES"
                        aria-describedby="basic-addon1"
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="AÑO"
                        aria-label="AÑO"
                        aria-describedby="basic-addon1"
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="CVV"
                        aria-label="CVV"
                        aria-describedby="basic-addon1"
                      >
                    </div>
                  </form>
                </div>
                <div
                  id="nav-contact"
                  class="tab-pane fade"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <form
                    action=""
                    class="mt-3"
                  >
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
                        placeholder="Numero de la tarjeta"
                        aria-label="Numero de la tarjeta"
                        aria-describedby="basic-addon1"
                      >
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="MES"
                        aria-label="MES"
                        aria-describedby="basic-addon1"
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="AÑO"
                        aria-label="AÑO"
                        aria-describedby="basic-addon1"
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="CVV"
                        aria-label="CVV"
                        aria-describedby="basic-addon1"
                      >
                    </div>
                  </form>
                </div>
              </div>
            </template>
          </modal-base>
          <modal-base
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
          </modal-base>
        </div>
      </div>
      <hr v-if="i < books.length -1 ">

      <!-- <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum odit consequuntur consectetur possimus sunt optio eos. Eos nulla recusandae odio deleniti omnis, tempore incidunt debitis quos eum quidem voluptates molestias.
        Quod eaque nihil exercitationem ullam fuga commodi odio aliquam quisquam. Mollitia, quo sint voluptas magnam ullam iste minima inventore praesentium non distinctio eveniet ratione, nihil maxime! Voluptatibus eum eos dicta.
        Autem magnam cum facere fugit, soluta provident nemo, porro assumenda consequuntur fuga, minima corrupti voluptatibus ex ad vero sed. Ut nostrum debitis quo eum amet nihil rem architecto voluptates quae.
      </p> -->
    </div>
  </div>
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'
import { mapState } from 'vuex'
import Book from '~/components/Book'
import ModalBase from '~/components/ModalBase'

export default {
  components: {
    HeaderSection, Book, ModalBase
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/books/'
    }
  },
  computed: {
    ...mapState({
      books: 'books'
    }),
    header () {
      return this.$store.getters.headerSection('MyBooks')
    }
  }
}
</script>