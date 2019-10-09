<template>
  <section class="container contact">

    <header-section
      :attach="header.attach"
      :title="header.title"
      :description="header.description"
    />

    <form
      method="post"
      action=""
      id="contact_form"
      accept-charset="UTF-8"
    >
      <div class="row">
        <div class="col-md-5">
          <div class="form-group">
            <label for="exampleInputEmail1" class="h6 form-contact--label">Nombres y Apellidos</label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            >
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" class="h6 form-contact--label">Correo Electronico</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            >
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1" class="h6 form-contact--label">Telefono</label>
            <input
              type="text"
              name="phone"
              class="form-control"
              id="exampleInputEmail1"
              pattern="[0-9\-]*"
              aria-describedby="emailHelp"
            >
          </div>
        </div>
        <div class="col-md-7">
          <div class="form-group">
            <label for="exampleInputEmail1" class="h6 form-contact--label">Mensaje</label>
            <textarea
              name="contact[body]"
              cols="40"
              rows="8"
              class="form-control"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-primary btn-lg text-uppercase">Enviar</button>
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