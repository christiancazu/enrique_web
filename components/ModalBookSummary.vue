<template>
  <div
    :id="`modalBookSummary${id}`"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    :aria-labelledby="`ModalLabel${id}`"
    aria-hidden="true"
  >
    <div
      class="modal-dialog"
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
            <div class="mb-3">
              <div class="input-group">
                <input
                  v-model="form.name"
                  v-validate="'required'"
                  type="text"
                  class="form-control"
                  placeholder="Nombres"
                  aria-label="Nombres"
                  name="name"
                  aria-describedby="Nombres"
                  :class="['form-control', {'is-danger': errors.has('name') }]"
                >
                <input
                  v-model="form.lastName"
                  v-validate="'required'"
                  type="text"
                  class="form-control"
                  placeholder="Apellidos"
                  aria-label="Apellidos"
                  name="lastName"
                  aria-describedby="Apellidos"
                  :class="['form-control', {'is-danger': errors.has('lastName') }]"
                >
              </div>
              <span
                v-show="errors.has('name') && errors.has('lastName')"
                class="error-message"
              >Escribe tus nombres completos</span>
            </div>
            <div class="form-group">
              <input
                v-model="form.email"
                v-validate="'required|email'"
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                :class="['form-control', {'is-danger': errors.has('email') }]"
                aria-describedby="email"
              >
              <span
                v-show="errors.has('email')"
                class="error-message"
              >Ingresa un correo valido</span>
            </div>
            <div class="form-group">
              <textarea
                v-model="form.message"
                v-validate="'required'"
                placeholder="Escribe un mensaje"
                name="message"
                cols="40"
                rows="4"
                :class="['form-control', {'is-danger': errors.has('message') }]"
                aria-describedby="message"
              />
              <span
                v-show="errors.has('message')"
                class="error-message"
              >Escribe un mensaje</span>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-block btn-primary"
            @click.prevent="sendForm"
          >
            Adquirir resumen
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
      showMessageSuccess: false
    }
  },

  mounted () {
    const _self = this
    // eslint-disable-next-line no-unused-vars
    $(`#modalBookSummary${this.id}`).on('hide.bs.modal', function (e) {
      _self.cleanForm()
    })
  },

  methods: {
    ...mapActions({
      sendSumary: 'contact/sendSummary'
    }),

    async sendForm () {
      try {
        this.showMessageSuccess = false
        this.form.bookName = this.title
        const data = this.form
        let validForm = false
        await this.$validator.validateAll().then((result) => validForm = result)
        if (validForm) {
          await this.sendSumary({ data })
          this.showMessageSuccess = true
          this.cleanForm()
        }
      }
      // eslint-disable-next-line no-empty
      catch (e) { }
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