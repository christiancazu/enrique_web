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
      :data-target="`#modalBookPay${book.id}`"
    >
      <i class="fa fa-credit-card-alt" />
      Comprar ahora
    </button>
  </div>

  <button
    class="btn btn-outline-primary my-1"
    :class="{'btn-block': isblock}"
    data-toggle="modal"
    :data-target="`#modalBookSummary${book.id}`"
  >
    <i
      class="fa fa-download"
      aria-hidden="true"
    />
    Resumen <strong class="text-danger">Gratis</strong>
  </button>

  <modal-book-summary
    :id="book.id"
    :title="book.title"
  />
  <modal-book-payment
    :id="book.id"
    :title="book.title"
  />
</div>
</template>
<script>
import ModalBookSummary from '~/components/ModalBookSummary'
import ModalBookPayment from '~/components/ModalBookPayment'

export default {
  components: { ModalBookSummary, ModalBookPayment },
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