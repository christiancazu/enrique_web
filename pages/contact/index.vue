<template>
  <div class="contact-page">
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <div class="noo-information">
            <i
              class="fa fa-phone"
              aria-hidden="true"
            />
            <h5>Comunicate</h5>
            <p>
              CEL: {{ cellPhoneNumber }} <br>
            </p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="noo-information">
            <i class="fa fa-location-arrow" />
            <h5>Encuentrame</h5>
            <p> {{ address }}</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="noo-information">
            <i class="fa fa-envelope-o" />
            <h5>Correo electrónico</h5>
            <p>
              {{ emailAddress }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <contact />
  </div>
</template>

<script>
import Contact from '~/components/Contact.vue'
import { CELLPHONE_NUMBER } from '~/config/constants'
import { ADDRESS } from '~/config/constants'
import { EMAIL_ADDRESS } from '~/config/constants'

export default {
  components: {
    Contact
  },

  data () {
    return {
      cellPhoneNumber: CELLPHONE_NUMBER,
      address: ADDRESS,
      emailAddress: EMAIL_ADDRESS
    }
  }
}
</script>
