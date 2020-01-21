<template>
  <div
    :id="`modalBookPay${id}`"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="`ModalLabel${id}`"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h6
            :id="`ModalLabel${id}`"
            class="modal-title text-uppercase"
          >
            {{ title }}
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
            v-if="showMessageSuccess"
            class="alert alert-success p alert-dismissible fade show"
            role="alert"
          >
            <i
              class="fa fa-check"
              aria-hidden="true"
            />
            <strong>Gracias por contactarme</strong>, enviaremos un resumen del libro a tu correo electrónico.
            <button
              type="button"
              class="close"
              @click="showMessageSuccess = false"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="sendForm">
            <div class="row">
              <div class="col-xs-12 col-md-6 pr-0">
                <h6 class="text-left small">
                  <label
                    class="m-0"
                    for="Fecha de Expiración"
                  >Tipo de Moneda / Currency type</label>
                </h6>
                <div class="input-group mb-3">
                  <div
                    id="button-addon3"
                    class="input-group-prepend btn-block"
                  >
                    <button
                      v-for="(item, i) in currency"
                      :key="i"
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
                  <div
                    id="button-addon3"
                    class="input-group-prepend"
                  >
                    <button
                      v-for="(item, i) in language"
                      :key="i"
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
              <div class="col-xs-12 col-md-6">
                <div class="form-group">
                  <input
                    id="card[email]"
                    v-model="form.email"
                    v-validate="'required|email'"
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    :class="['form-control', {'is-danger': errors.has('email') }]"
                    aria-describedby="email"
                    size="50"
                    data-culqi="card[email]"
                  >
                  <span
                    v-show="errors.has('email')"
                    class="error-message"
                  >Ingresa un correo valido</span>
                </div>
                <div class="row">
                  <div class="col-md-9 pr-0">
                    <div class="mb-3">
                      <div class="form-group">
                        <input
                          id="card[number]"
                          v-model="form.name"
                          v-validate="'required'"
                          type="text"
                          size="20"
                          data-culqi="card[number]"
                          class="form-control"
                          placeholder="Número de tarjeta"
                          aria-label="Número de tarjeta"
                          name="name"
                          aria-describedby="Número de tarjeta"
                          :class="['form-control', {'is-danger': errors.has('name') }]"
                        >
                      </div>
                      <span
                        v-show="errors.has('name') && errors.has('lastName')"
                        class="error-message"
                      >Número de tarjeta no valida</span>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group">
                      <input
                        id="card[cvv]"
                        v-model="form.lastName"
                        v-validate="'required'"
                        type="text"
                        size="4"
                        data-culqi="card[cvv]"
                        class="form-control"
                        placeholder="CVV"
                        aria-label="CVV"
                        name="CVV"
                        aria-describedby="CVV"
                        :class="['form-control', {'is-danger': errors.has('lastName') }]"
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
                    id="card[exp_month]"
                    type="text"
                    aria-label="month"
                    placeholder="month"
                    class="form-control"
                    size="2"
                    data-culqi="card[exp_month]"
                  >
                  <div class="input-group-prepend">
                    <span class="input-group-text">/</span>
                  </div>
                  <input
                    id="card[exp_year]"
                    type="text"
                    aria-label="year"
                    placeholder="year"
                    class="form-control"
                    size="4"
                    data-culqi="card[exp_year]"
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            id="btn_pagar"
            type="button"
            class="btn btn-block btn-primary"
            @click.prevent="sendForm"
          >
            Comprar ahora
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-undef */

import { mapActions } from 'vuex'

export default {
  props: {
    title: { type: String, default: '' },
    id: { type: Number, default: 0 }
  },
  data () {
    return {
      form: {
        name: "",
        lastName: "",
        email: "",
        bookName: "",
        message: ""
      },
      showMessageSuccess: false,
      currency: [
        { id: 1, title: "Dolar", symbol: "$", selected: false, price: '8.00', name: 'USD' },
        { id: 2, title: "Sol", symbol: "S/.", selected: true, price: '26.00', name: 'PEN' },
        { id: 3, title: "Euro", symbol: "€", selected: false, price: '7.00', name: 'EUR' }
      ],
      selectedCurrency: null,
      language: [
        { id: 1, title: "Ingles", available: false, selected: false },
        { id: 2, title: "Español", available: true, selected: true },
        { id: 3, title: "Italiano", available: false, selected: false }
      ],
      selectedLanguage: 'Español',
      isAvailableLanguage: false
    }
  },

  watch: {
    selectedCurrency: function (val) {
      window.Culqi.settings({
        currency: val.name,
        amount: parseInt(val.price) * 100
      });
    }

  },

  mounted () {
    window.Culqi.settings({
      title: this.title,
      description: `Autor: Luis E. Bustamante`,
      currency: 'PEN',
      amount: 2600,
    });
    const _self = this
    // eslint-disable-next-line no-unused-vars
    $(`#modalBookPay${this.id}`).on('hide.bs.modal', function (e) {
      _self.cleanForm()
    })

  },

  methods: {
    ...mapActions({
      sendSumary: 'contact/sendSummary',
      paymentBook: 'payment/paymentBook'

    }),

    async sendForm () {
      // window.Culqi.createToken()
      // const settings = Culqi.getSettings
      // const token = Culqi.token
      // console.log(token, 'token')
      const _self = this

      try {
        this.showMessageSuccess = false
        // let validForm = false

        await window.Culqi.createToken()

        window.culqi = () => {
          const settings = window.Culqi.getSettings
          if (Culqi.token) {
            // ¡Objeto Token creado exitosamente!
            const token = window.Culqi.token
            const data = {
              amount: settings.amount,
              description: settings.description,
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
        // await this.$validator.validateAll().then((result) => validForm = result)
        // if (validForm) {
        //   await this.sendSumary({ data })
        //   this.showMessageSuccess = true
        //   this.cleanForm()
        // }
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

    cleanForm () {
      this.form.name = ''
      this.form.lastName = ''
      this.form.email = ''
      this.form.bookName = ''
      this.form.message = ''
      this.$nextTick(() => this.$validator.reset())
    }
  },
}
</script>