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
                for="name"
                class="form-contact--label"
              >Nombres y Apellidos</label>
              <input
                id="name"
                v-model="form.fullName"
                type="text"
                name="name"
                class="form-control"
                aria-describedby="namelHelp"
              >
            </div>
            <div class="form-group">
              <label
                for="exampleInputEmail1"
                class="form-contact--label"
              >Correo Electronico</label>
              <input
                id="exampleInputEmail1"
                v-model="form.email"
                type="email"
                name="email"
                class="form-control"
                aria-describedby="emailHelp"
              >
            </div>
            <div class="form-group">
              <label
                for="exampleInputPhone"
                class="form-contact--label"
              >Telefono</label>
              <input
                id="exampleInputPhone"
                v-model="form.phone"
                type="text"
                name="phone"
                class="form-control"
                pattern="[0-9\-]*"
                aria-describedby="phoneHelp"
              >
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
                name="contact[body]"
                cols="40"
                rows="8"
                class="form-control"
                aria-describedby="messageHelp"
              />
            </div>
          </div>
        </div>
        <div class="text-center">
          <button
            class="btn btn-primary text-white"
            type="submit"
            @click.prevent="sendFormEmail"
          >
            Enviar
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
      // this.sendEmail({ form: { ...this.form } })
      //   .then(response => {
      //     console.log('response', response)
      //   })
      //   .catch(err => {
      //     console.log(err, 'error')
      //   })

      new Promise((resolve, reject) => {
        this.$contactAPI
          .sendEmail({ data: this.form })
          .then(response => {
            console.log('Su mensaje ha sido enviado con éxito')
            // window.confirm("Su mensaje ha sido enviado con éxito");
            resolve(response);
          })
          .catch(error => {
            console.log('Su mensaje NO ha sido enviado con éxito')
            // window.confirm("Datos incorrectos");
            reject(error)
          });
      });
    }
  },
}
</script>