<template>
  <section class="container contact">
    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

    <form
      id="contact_form"
      method="post"
      action=""
      accept-charset="UTF-8"
    >
      <div class="row">
        <div class="col-md-5">
          <div class="form-group">
            <label
              for="exampleInputEmail1"
              class="form-contact--label"
            >Nombres y Apellidos</label>
            <input
              id="exampleInputEmail1"
              type="text"
              name="name"
              class="form-control"
              aria-describedby="emailHelp"
            >
          </div>
          <div class="form-group">
            <label
              for="exampleInputEmail1"
              class="form-contact--label"
            >Correo Electronico</label>
            <input
              id="exampleInputEmail1"
              type="email"
              name="email"
              class="form-control"
              aria-describedby="emailHelp"
            >
          </div>
          <div class="form-group">
            <label
              for="exampleInputEmail1"
              class="form-contact--label"
            >Telefono</label>
            <input
              id="exampleInputEmail1"
              type="text"
              name="phone"
              class="form-control"
              pattern="[0-9\-]*"
              aria-describedby="emailHelp"
            >
          </div>
        </div>
        <div class="col-md-7">
          <div class="form-group">
            <label
              for="exampleInputEmail1"
              class="form-contact--label"
            >Mensaje</label>
            <textarea
              name="contact[body]"
              cols="40"
              rows="8"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-primary text-white">
          Enviar
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import HeaderSection from '~/components/HeaderSection'

export default {
  name: 'Contact',
  components: {
    HeaderSection
  },
  computed: {
    header() {
      return this.$store.getters.headerSection('Contact')
    }
  },
}
</script>