<template>
<div
  id="modalToBuyBook"
  class="modal fade"
  tabindex="-1"
  role="dialog"
  aria-labelledby="modalToBuyBookTitle"
  aria-hidden="true"
>
  <div
    class="modal-dialog modal-lg"
    role="document"
  >
    <div class="modal-content">
      <div class="modal-header">
        <h6
          id="modalToBuyBookTitle"
          class="modal-title text-uppercase"
        >
          {{ book? book.title: '' }}
        </h6>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div
          v-if="showMessage"
          class="alert alert-success p alert-dismissible fade show"
          role="alert"
        >
          <i
            class="fa fa-check"
            aria-hidden="true"
          />
          <strong>Gracias por tu compra</strong>, enviaremos el libro adquirido a tu correo electrónico.
          <button
            type="button"
            class="close"
            @click="$store.commit(`payment/SET_SHOW_MESSAGE`, false)"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form
          v-if="book"
          @submit.prevent="sendForm"
        >
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6">
              <h6 class="text-left small">
                <label
                  class="m-0"
                  for="Fecha de Expiración"
                >Tipo de Moneda / Currency type</label>
              </h6>
              <div class="input-group mb-3">
                <div class="input-group-prepend btn-block">
                  <button
                    v-for="(item, i) in currency"
                    :key="i"
                    :disabled="isLoading"
                    :class="['btn btn-outline-primary', {'active': item.selected}]"
                    type="button"
                    @click="onChangeCurrency(item)"
                  >
                    {{ `${item.title} ${item.symbol}` }}
                  </button>
                </div>
              </div>
              <h6 class="text-left small">
                <label
                  class="m-0"
                  for="Fecha de Expiración"
                >Idioma del libro</label>
              </h6>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <button
                    v-for="(item, i) in language"
                    :key="i"
                    :disabled="isLoading"
                    :class="['btn btn-outline-primary', {'active': item.selected}]"
                    type="button"
                    @click="onChangeLanguage(item)"
                  >
                    {{ `${item.title}` }}
                  </button>
                </div>
              </div>
              <h6
                v-if="isAvailableLanguage"
                class="small text-danger text-left"
              >
                El Libro no esta disponible en el idioma seleccionado <br>
              </h6>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 pl-0">
              <div class="form-group">
                <input
                  :id="`card[email]`"
                  v-model="form.email"
                  v-validate="'required|email'"
                  type="email"
                  name="email"
                  :disabled="isLoading"
                  placeholder="Correo Electrónico"
                  :class="['form-control', {'is-danger': errors.has('email') }]"
                  aria-describedby="email"
                  size="50"
                  data-culqi="card[email]"
                >
                <span
                  v-show="errors.has('email')"
                  class="error-message text-left"
                >Ingresa un correo valido</span>
              </div>
              <div class="row">
                <div class="col-9 pr-0">
                  <div class="mb-3">
                    <div class="form-group">
                      <input
                        :id="`card[number]`"
                        v-model="form.numberCard"
                        v-validate="'required'"
                        type="text"
                        :disabled="isLoading"
                        size="20"
                        data-culqi="card[number]"
                        class="form-control"
                        placeholder="Número de tarjeta"
                        aria-label="Número de tarjeta"
                        name="numberCard"
                        aria-describedby="Número de tarjeta"
                        :class="['form-control', {'is-danger': errors.has('numberCard') }]"
                      >
                      <span
                        v-show="errors.has('numberCard') && errors.has('numberCard')"
                        class="error-message"
                      >Número de tarjeta no valida</span>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-group">
                    <input
                      :id="`card[cvv]`"
                      v-model="form.cvv"
                      v-validate="'required|min:3'"
                      type="text"
                      size="4"
                      :disabled="isLoading"
                      maxlength="4"
                      data-culqi="card[cvv]"
                      placeholder="CVV"
                      aria-label="CVV"
                      name="cvv"
                      aria-describedby="CVV"
                      :class="['form-control', {'is-danger': errors.has('cvv') }]"
                    >
                  </div>
                </div>
              </div>
              <h6 class="text-left small">
                <label
                  class="m-0"
                  for="Fecha de Expiración"
                >Fecha de Expiración (MM/YYYY)</label>
              </h6>
              <div class="input-group">
                <input
                  :id="`card[exp_month]`"
                  v-model="form.month"
                  v-validate="'required|min:2'"
                  type="text"
                  :disabled="isLoading"
                  aria-label="month"
                  placeholder="month"
                  size="2"
                  maxlength="2"
                  name="month"
                  data-culqi="card[exp_month]"
                  :class="['form-control', {'is-danger': errors.has('month') }]"
                >
                <div class="input-group-prepend">
                  <span class="input-group-text">/</span>
                </div>
                <input
                  :id="`card[exp_year]`"
                  v-model="form.year"
                  v-validate="'required|min:4'"
                  type="text"
                  :disabled="isLoading"
                  aria-label="year"
                  placeholder="year"
                  size="4"
                  maxlength="4"
                  name="year"
                  data-culqi="card[exp_year]"
                  :class="['form-control', {'is-danger': errors.has('year') }]"
                >
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button
          id="btn_pagar"
          :disabled="isLoading"
          type="button"
          class="btn btn-block btn-primary"
          @click.prevent="sendForm"
        >
          Comprar ahora
          <span class="h5">
            {{ `${selectedCurrency.symbol} ${selectedCurrency.price}` }}
          </span>
          <span
            v-if="isLoading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
/* eslint-disable no-undef */
import { mapActions, mapState } from 'vuex'
// import { SET_SHOW_MESSAGE } from '@/store/mutations.types'

export default {
  data () {
    return {
      form: {
        email: "",
        cvv: '',
        numberCard: '',
        month: '',
        year: ''
      },
      showMessageSuccess: false,
      currency: [
        { id: 1, title: "Dolar", symbol: "$", selected: false, price: '8.00', name: 'USD' },
        { id: 2, title: "Sol", symbol: "S/.", selected: true, price: '26.00', name: 'PEN' },
        { id: 3, title: "Euro", symbol: "€", selected: false, price: '7.00', name: 'EUR' }
      ],
      selectedCurrency: { id: 2, title: "Sol", symbol: "S/.", selected: true, price: '26.00', name: 'PEN' },
      language: [
        { id: 1, title: "english", available: false, selected: false },
        { id: 2, title: "spanish", available: true, selected: true },
        { id: 3, title: "italian", available: false, selected: false }
      ],
      selectedLanguage: 'spanish',
      isAvailableLanguage: false
    }
  },

  computed: {
    ...mapState({
      book: (state) => state.payment.bookSelected,
      isLoading: (state) => state.payment.isLoading,
      showMessage: (state) => state.payment.showMessage
    })
  },

  watch: {
    selectedCurrency: function (val) {
      window.Culqi.settings({
        currency: val.name,
        amount: parseInt(val.price) * 100,
        description: this.book.title,
      })
    },
    showMessage: function (val) {
      if (val) {
        this.cleanForm()
      }
    },
    book: function (val) {
      if (val) {
        window.Culqi.settings({
          description: this.book.title,
          currency: 'PEN',
          amount: 2600,
        })
      }
    }
  },

  mounted () {
    const _self = this
    // eslint-disable-next-line no-unused-vars
    $(`#modalToBuyBook`).on('hide.bs.modal', function (e) {
      _self.$store.commit(`payment/SET_SHOW_MESSAGE`, false)
      _self.cleanForm()
    })
  },

  methods: {
    ...mapActions({
      paymentBook: 'payment/paymentBook',
      setLoading: 'payment/setLoading'
    }),

    async sendForm () {
      const _self = this
      try {
        let validForm = false
        await this.$validator.validateAll().then((result) => validForm = result)
        if (!validForm) return false
        //active loading
        this.setLoading(true)

        // get token
        await window.Culqi.createToken()

        // completed buy book
        this.submitDataFormPaymentBook(_self)
      }
      // eslint-disable-next-line no-empty
      catch (e) { }
    },

    onChangeCurrency (item) {
      this.selectedCurrency = item
      const { id } = item
      this.currency.forEach(val => {
        val.selected = id === val.id ? true : false
      })
    },
    onChangeLanguage (item) {
      this.selectedLanguage = item.title
      const { id } = item
      this.isAvailableLanguage = !item.available
      this.language.forEach(val => {
        val.selected = id === val.id ? true : false
      })
    },

    submitDataFormPaymentBook (_self) {
      window.culqi = () => {
        const settings = window.Culqi.getSettings
        if (Culqi.token) {
          // ¡Objeto Token creado exitosamente!
          const token = window.Culqi.token
          const data = {
            idBook: this.book.id,
            amount: settings.amount,
            titleBook: settings.description,
            email: token.email,
            currencyCode: settings.currency,
            tokenId: token.id,
            language: this.selectedLanguage
          }
          _self.paymentBook({ data })
        } else {
          /*
            ¡Hubo algún problema!
            Mostramos JSON de objeto error en consola
          */
          _self.$toast.error(Culqi.error)
        }
      }
    },
    validNumberCard () {
      console.log(this.form.numberCard, 'val')

    },

    cleanForm () {
      this.form.email = ''
      this.form.cvv = ''
      this.form.numberCard = ''
      this.form.month = ''
      this.form.year = ''
      this.$nextTick(() => this.$validator.reset())
    }
  },
}
</script>