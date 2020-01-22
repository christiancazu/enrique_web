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
      data-toggle="modal"
      :data-target="`#modalToBuyBook${book.id}`"
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
  <modal-to-buy-book
    :id="book.id"
    :title="book.title"
  />
</div>
</template>
<script>
import ModalToBookSummary from '~/components/books/ModalToBookSummary'
import ModalToBuyBook from '~/components/books/ModalToBuyBook'

export default {
  components: { ModalToBookSummary, ModalToBuyBook },
  props: {
    book: { type: Object, default: null },
    isblock: { type: Boolean, default: false }
  },

  data () {
    return {
      publicKey: 'pk_test_CKBD2k26x8WluUoY'
    }
  },

  created () {
    if (process.client) {
      window.Culqi.publicKey = this.publicKey
      window.Culqi.init()
    }
  }
}
</script>