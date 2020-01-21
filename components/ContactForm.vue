<template>
<section class="contact">
  <div class="container">
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

    <div
      v-if="showMessageSuccess"
      class="alert alert-success p alert-dismissible fade show"
      role="alert"
    >
      <i
        class="fa fa-check"
        aria-hidden="true"
      />
      <strong>Gracias por contactarme</strong>, revisa tu correo electrónico nos pondremos en contacto por ese medio.
      <button
        type="button"
        class="close"
        @click="showMessageSuccess = false"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <form @submit.prevent="sendFormEmail">
      <div class="row">
        <div class="col-md-5">
          <div class="form-group">
            <label
              for="inputFullName"
              class="form-contact--label"
            >Nombres y Apellidos</label>
            <input
              id="inputFullName"
              v-model="form.fullName"
              v-validate="'required'"
              type="text"
              name="name"
              aria-describedby="name"
              :class="['form-control', {'is-danger': errors.has('name') }]"
            >
            <span
              v-show="errors.has('name')"
              class="error-message"
            >Ingresa tus nombres</span>
          </div>
          <div class="form-group">
            <label
              for="inputEmailContact"
              class="form-contact--label"
            >Correo Electronico</label>
            <input
              id="inputEmailContact"
              v-model="form.email"
              v-validate="'required|email'"
              type="email"
              name="email"
              :class="['form-control', {'is-danger': errors.has('email') }]"
              aria-describedby="email"
            >
            <span
              v-show="errors.has('email')"
              class="error-message"
            >Ingresa un correo valido</span>
          </div>
          <div class="form-group">
            <label
              for="inputPhone"
              class="form-contact--label"
            >Telefono</label>
            <input
              id="inputPhone"
              v-model="form.phone"
              v-validate="'required|numeric'"
              type="tel"
              name="phone"
              :class="['form-control', {'is-danger': errors.has('phone') }]"
              pattern="[0-9\-]*"
              aria-describedby="phoneHelp"
            >
            <span
              v-show="errors.has('phone')"
              class="error-message"
            >Ingresa un número valido</span>
          </div>
        </div>
        <div class="col-md-7">
          <div class="form-group">
            <label
              for="inputMessage"
              class="form-contact--label"
            >Mensaje</label>
            <textarea
              id="inputMessage"
              v-model="form.message"
              v-validate="'required'"
              name="message"
              cols="40"
              rows="8"
              :class="['form-control', {'is-danger': errors.has('message') }]"
              aria-describedby="message"
            />
            <span
              v-show="errors.has('message')"
              class="error-message"
            >Escribe un mensaje</span>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          class="btn btn-primary text-white"
          type="submit"
          @click.prevent="sendFormEmail"
        >
          Enviar mensaje
        </button>
      </div>
    </form>
  </div>
</section>
</template>

<script>
import HeaderSection from '~/components/HeaderSection'
import { mapActions } from 'vuex'

export default {
  name: 'Contact',
  components: {
    HeaderSection
  },

  data () {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        message: ''
      },
      showMessageSuccess: false,
      processingForm: false
    }
  },

  computed: {
    header () {
      return this.$store.getters.headerSection('FormContact')
    }
  },
  methods: {
    ...mapActions({
      sendEmail: 'contact/sendEmail'
    }),

    async sendFormEmail () {
      try {
        this.showMessageSuccess = false
        const data = this.form
        let validForm = false
        await this.$validator.validateAll().then((result) => validForm = result)
        if (validForm) {
          await this.sendEmail({ data })
          this.cleanForm()
          this.showMessageSuccess = true
        }

      }
      // eslint-disable-next-line no-empty
      catch (e) { }
    },

    cleanForm () {
      this.form.fullName = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.message = ''
      this.$nextTick(() => this.$validator.reset())
    }
  },
}
</script>