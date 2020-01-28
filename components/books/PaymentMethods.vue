<template>
<div
  v-if="book"
  class="text-center"
>
  <div
    class="btn-group btn-block"
    role="group"
    aria-label="Basic example"
  >
    <button
      class="btn btn-fab-primary"
      @click="openModalToBuyBook(book)"
    >
      <i class="fa fa-credit-card-alt" />
      Comprar ahora
    </button>
  </div>

  <button
    class="btn btn-outline-primary my-1"
    :class="{'btn-block': isblock}"
    data-toggle="modal"
    :data-target="`#modalToBookSummary${book.id}`"
  >
    <i
      class="fa fa-download"
      aria-hidden="true"
    />
    Resumen <strong class="text-danger">Gratis</strong>
  </button>

  <modal-to-book-summary
    :id="book.id"
    :title="book.title"
  />
</div>
</template>
<script>
import ModalToBookSummary from '~/components/books/ModalToBookSummary'

export default {
  components: { ModalToBookSummary },
  props: {
    book: { type: Object, default: null },
    isblock: { type: Boolean, default: false }
  },

  methods: {
    openModalToBuyBook (book){
      // eslint-disable-next-line no-undef
      window.$(`#modalToBuyBook`).modal('toggle')
      this.$store.commit('payment/SET_BOOK_SELECTED', book)
    }
  },
}
</script>