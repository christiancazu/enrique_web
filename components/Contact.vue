<template>
  <section class="contact">
    <div class="container">
      <header-section
        :attach="header.attach"
        :title="header.title"
        :description="header.description"
      />

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
                for="inputEmail"
                class="form-contact--label"
              >Correo Electronico</label>
              <input
                id="inputEmail"
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

    sendFormEmail () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          return;
        }
      })
    }
  },
}
</script>