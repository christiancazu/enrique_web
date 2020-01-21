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
        type="button"
        class="btn currency"
      >
        <div
          :class="{'selected': !isCurrencyUSD}"
          @click="isCurrencyUSD = !isCurrencyUSD"
        >
          <i
            v-if="!isCurrencyUSD"
            class="fa fa-check"
            aria-hidden="true"
          /> Soles(S/)
        </div>
        <div
          :class="{'selected': isCurrencyUSD}"
          @click="isCurrencyUSD = !isCurrencyUSD"
        >
          <i
            v-if="isCurrencyUSD"
            class="fa fa-check"
            aria-hidden="true"
          /> USD($)
        </div>
      </button>
      <button
        class="btn btn-fab-primary"
        data-toggle="modal"
        :data-target="`#modalBookPay${book.id}`"
      >
        <i
          class="fa fa-credit-card-alt"
          aria-hidden="true"
        />
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
import { mapActions } from 'vuex'
import ModalBookSummary from '~/components/ModalBookSummary'
import ModalBookPayment from '~/components/ModalBookPayment'

export default {

  components: { ModalBookSummary, ModalBookPayment },
  props: {
    book: { type: Object, default: null },
    labelBuy: { type: String, default: 'COMPRAR' },
    isblock: { type: Boolean, default: false }
  },

  data () {
    return {
      publicKey: 'pk_test_CKBD2k26x8WluUoY',
      bookSelected: null,
      isCurrencyUSD: true
    }
  },

  created () {
    if (process.client) {
      console.log(window.Culqi)
      window.Culqi.publicKey = this.publicKey
      window.Culqi.init()
      // const _self = this
      // window.culqi = () => {
      //   const Culqi = window.Culqi
      //   const settings = Culqi.getSettings

      //   if (Culqi.token) {
      //     // ¡Objeto Token creado exitosamente!
      //     const token = Culqi.token

      //     const data = {
      //       amount: settings.amount,
      //       description: settings.title,
      //       email: token.email,
      //       currency_code: settings.currency,
      //       source_id: token.id
      //     }

      //     _self.paymentBook({ data })
      //   } else {
      //     /* 
      //       ¡Hubo algún problema!
      //       Mostramos JSON de objeto error en consola
      //     */
      //     _self.$toasted.error(Culqi.error)
      //   }
      // }
    }
  },

  methods: {
    ...mapActions({
      paymentBook: 'payment/paymentBook'
    }),
    openModalCulqi (book) {
      this.bookSelected = book
      let amount = 0
      let currency = 'USD'
      if (this.isCurrencyUSD) {
        amount = parseInt(book.priceUSD) * 100
        currency = 'USD'
      } else {
        amount = parseInt(book.pricePEN) * 100
        currency = 'PEN'
      }

      window.Culqi.settings({
        title: `${book.title}`,
        description: `Autor: Luis E. Bustamante`,
        currency,
        amount
      });

      window.Culqi.open()
    }
  }
}
</script>