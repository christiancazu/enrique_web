<template>
  <footer class="footer">
    <div class="wrap-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img
              src="/images/logo/logo_yellow.png"
              alt="Luis enrique"
              class="img-fluid logo"
            >
            <ul class="list-unstyled mt-4 info-personal">
              <li class="d-flex align-items-center pb-2">
                <i class="fa fa-map-marker text-gray" />
                <p class="m-0">
                  Arequipa, Arequipa
                </p>
              </li>
              <li class="d-flex align-items-center pb-2">
                <i
                  class="fa fa-phone text-gray"
                  aria-hidden="true"
                />
                <p class="m-0">
                  +51 9544878445
                </p>
              </li>
              <li class="d-flex align-items-center pb-2">
                <i
                  class="fa fa-envelope text-gray"
                  aria-hidden="true"
                />
                <p class="m-0">
                  luisenrique@gmail.com
                </p>
              </li>
            </ul>
            <TheSocialsNetwork />
          </div>
          <div class="col-md-4">
            <div class="widget widget_nav_menu">
              <h4 class="widget-title">
                Sobre Mi
              </h4>
              <ul class="menu list-unstyled">
                <li>
                  <nuxt-link
                    to="/about"
                    class="p"
                    no-exact
                  >
                    ¿Quieres saber más de mi?
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/books"
                    class="p"
                  >
                    ¿Ver mis libros?
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/contact"
                    class="p"
                  >
                    Contáctame
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="widget widget_noo_widget_instagram">
              <h4 class="widget-title">
                Mis Fotos
              </h4>
              <div class="noo-instagram">
                <ul>
                  <li>
                    <a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48816091336_546b59ffa8_b.jpg"
                    ><img
                      src="https://live.staticflickr.com/65535/48816091336_546b59ffa8_s.jpg"
                      alt="Zimbabwe Jump"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48804848648_b8386e267a_b.jpg"
                    ><img
                      src="https://live.staticflickr.com/65535/48804848648_b8386e267a_s.jpg"
                      alt="A Memory of Elephants"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48799559738_0cb220368c_b.jpg"
                    ><img
                      src="https://live.staticflickr.com/65535/48799559738_0cb220368c_s.jpg"
                      alt="Love is Colourful"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48784641257_fe99bdb751_b.jpg"
                    ><img
                      src="https://live.staticflickr.com/65535/48784641257_fe99bdb751_s.jpg"
                      alt="Lion Cubs"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48755830046_55600a5103_b.jpg"
                    ><img
                      src="https://live.staticflickr.com/65535/48755830046_55600a5103_s.jpg"
                      alt="Lioness"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48751760292_789285cc31_b.jpg"
                    ><img
                      src="https://live.staticflickr.com/65535/48751760292_789285cc31_s.jpg"
                      alt="Giraffe Facts"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48745141931_1173bd706c_b.jpg"
                    ><img
                      src="https://live.staticflickr.com/65535/48745141931_1173bd706c_s.jpg"
                      alt="A majestic lion"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48733682177_0f2e6481c8_b.jpg"
                    ><img
                      src="https://live.staticflickr.com/65535/48733682177_0f2e6481c8_s.jpg"
                      alt="Mayan Warrior at Burning Man"
                    ></a>
                  </li>
                  <li>
                    <a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48728725746_5dfc456305_b.jpg"
                    ><img
                      src="https://live.staticflickr.com/65535/48728725746_5dfc456305_s.jpg"
                      alt="Burning Man Rides"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container footer_creator">
      <div class="row align-items-center">
        <div class="col-md-6 text-left text-xs-center">
          <span class="copyright small">
            Desarrollado con
            <i
              class="fa fa-heart text-danger"
              aria-hidden="true"
            /> por
            <span class="font-weight-bold">
              <a
                class="btn-flat-secondary text-veox"
                target="_bank"
                href="https://www.veox.tech"
              >VEOX</a>
            </span>
          </span>
        </div>
        <div class="col-md-6 text-right text-xs-center">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a
                href="https://www.facebook.com/veoxtech"
                target="_bank"
              >
                <i class="fa fa-facebook text-veox" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://twitter.com/veoxperu"
                target="_bank"
              >
                <i class="fa fa-twitter text-veox" />
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="https://www.youtube.com/channel/UCkNod2lmZIMbR9iA2scP3Aw"
                target="_bank"
              >
                <i class="fa fa-youtube-play text-veox" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import TheSocialsNetwork from '~/components/TheSocialsNetwork'
export default {

  name: 'TheNavbar',
  components: {
    TheSocialsNetwork
  },
  data () {
    return {

    }
  },
}
</script>
