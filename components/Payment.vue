<template>
  <div
    v-if="book"
    class="text-center"
  >
    <button
      v-if="book.price"
      class="btn btn-fab-primary my-1"
      :class="{'btn-block': isblock}"
      @click="openModalCulqi(book)"
    >
      <i
        class="fa fa-credit-card-alt"
        aria-hidden="true"
      />
      Comprar ahora
    </button>

    <button
      v-if="book.price"
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
    <button
      v-if="!book.price"
      class="btn btn-outline-danger my-1"
      :class="{'btn-block': isblock}"
    >
      Proximo lanzamiento
    </button>
    <modal-book-summary
      :id="book.id"
      :title="book.title"
    />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import ModalBookSummary from '~/components/ModalBookSummary'

export default {

  components:{ModalBookSummary},
  props: {
    book: { type: Object, default: null },
    labelBuy: { type: String, default: 'COMPRAR' },
    isblock: { type: Boolean, default: false }
  },

  data () {
    return {
      publicKey: 'pk_test_CKBD2k26x8WluUoY',
      bookSelected: null
    }
  },

  created () {
    if (process.client) {
      window.Culqi.publicKey = this.publicKey
      const _self = this
      window.culqi = () => {
        const Culqi = window.Culqi
        const settings = Culqi.getSettings

        if (Culqi.token) {
          // ¡Objeto Token creado exitosamente!
          const token = Culqi.token

          const data = {
            amount: settings.amount,
            description: settings.title,
            email: token.email,
            source_id: token.id
          }

          _self.paymentBook({ data })


        } else {
          /* 
            ¡Hubo algún problema!
            Mostramos JSON de objeto error en consola
          */
          _self.$toasted.error(Culqi.error)
        }
      }
    }
  },

  methods: {
    ...mapActions({
      paymentBook: 'payment/paymentBook'
    }),
    openModalCulqi (book) {
      this.bookSelected = book
      // console.log(this.bookSelected, 'open')

      const amount = parseInt(book.price) * 100

      window.Culqi.settings({
        title: `${book.title}`,
        currency: `${book.currency}`,
        description: `Autor: Luis E. Bustamante`,
        amount
      });

      window.Culqi.open()
    }
  }
}
</script>