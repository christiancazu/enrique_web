<template>
  <div class="contact-page">
    <div class="container">
      <header-section
        :attach="`Me encuentro`"
        :title="`Ubicado en`"
        :description="``"
      />
    </div>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30619.276894202045!2d-71.55656395553596!3d-16.404010452877756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a487785b9b3%3A0xa3c4a612b9942036!2sArequipa!5e0!3m2!1ses-419!2spe!4v1570125226037!5m2!1ses-419!2spe"
      width="100%"
      height="450"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      class="mb-5"
    />
    <div class="container my-5">
      <div class="row">
        <div class="col-sm-4">
          <div class="noo-information">
            <i
              class="fa fa-phone"
              aria-hidden="true"
            />
            <h5>Comunicate</h5>
            <p>
              CEL: +19 98898898<br>
            </p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="noo-information">
            <i class="fa fa-location-arrow" />
            <h5>Encuentrame</h5>
            <p>Arequipa, Arequipa</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="noo-information">
            <i class="fa fa-envelope-o" />
            <h5>Correo electrónico</h5>
            <p>
              luisenrique@gmail.com
            </p>
          </div>
        </div>
        <!-- <div class="col-sm-3">
          <div class="noo-information">
            <i class="fa fa-clock-o"></i>
            <h5>open time</h5>
            <p>
              Mon - Fri: 9:00 - 22:00<br>
              Sat - Sun: 10:00 - 20:00
            </p>
          </div>
        </div> -->
      </div>
    </div>

    <contact />
  </div>
</template>

<script>
import Contact from '~/components/Contact.vue'
import HeaderSection from '~/components/HeaderSection'

export default {
  components: {
    HeaderSection, Contact
  }

}
</script>
