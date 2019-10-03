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
            />
            <ul class="list-unstyled mt-4">
              <li class="d-flex pb-1">
                <i class="fa fa-map-marker"></i>
                <p class="m-0">Arequipa, Arequipa</p>
              </li>
              <li class="d-flex pb-1">
                <i
                  class="fa fa-phone"
                  aria-hidden="true"
                ></i>
                <p class="m-0">+51 9544878445</p>
              </li>
              <li class="d-flex pb-1">
                <i
                  class="fa fa-map-marker"
                  aria-hidden="true"
                ></i>
                <p class="m-0">luisenrique@gmail.com</p>
              </li>
            </ul>
            <!-- <ul class="list-inline mb-0 socials_personal">
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul> -->
            <div class="social-all">
              <a href="">
                <i class="fa fa-facebook"></i>
              </a>
              <a
                href=""
              >
              <i class="fa fa-youtube"></i>
              </a>
            </div>
          </div>
          <div class="col-md-4">
            <div class="widget widget_nav_menu">
              <h4 class="widget-title">About</h4>
              <ul class="menu list-unstyled">

                <li><a href="/">About us</a></li>

                <li><a href="/">Shopping Guide</a></li>

                <li><a href="/">Delivery Information</a></li>

                <li><a href="/">Sitemap</a></li>

                <li><a href="/">Privacy Policy</a></li>

              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="widget widget_noo_widget_instagram">
              <h4 class="widget-title">Flickr photo</h4>
              <div class="noo-instagram">
                <ul>
                  <li><a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48816091336_546b59ffa8_b.jpg"
                    ><img
                        src="https://live.staticflickr.com/65535/48816091336_546b59ffa8_s.jpg"
                        alt="Zimbabwe Jump"
                      ></a></li>
                  <li><a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48804848648_b8386e267a_b.jpg"
                    ><img
                        src="https://live.staticflickr.com/65535/48804848648_b8386e267a_s.jpg"
                        alt="A Memory of Elephants"
                      ></a></li>
                  <li><a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48799559738_0cb220368c_b.jpg"
                    ><img
                        src="https://live.staticflickr.com/65535/48799559738_0cb220368c_s.jpg"
                        alt="Love is Colourful"
                      ></a></li>
                  <li><a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48784641257_fe99bdb751_b.jpg"
                    ><img
                        src="https://live.staticflickr.com/65535/48784641257_fe99bdb751_s.jpg"
                        alt="Lion Cubs"
                      ></a></li>
                  <li><a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48755830046_55600a5103_b.jpg"
                    ><img
                        src="https://live.staticflickr.com/65535/48755830046_55600a5103_s.jpg"
                        alt="Lioness"
                      ></a></li>
                  <li><a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48751760292_789285cc31_b.jpg"
                    ><img
                        src="https://live.staticflickr.com/65535/48751760292_789285cc31_s.jpg"
                        alt="Giraffe Facts"
                      ></a></li>
                  <li><a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48745141931_1173bd706c_b.jpg"
                    ><img
                        src="https://live.staticflickr.com/65535/48745141931_1173bd706c_s.jpg"
                        alt="A majestic lion"
                      ></a></li>
                  <li><a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48733682177_0f2e6481c8_b.jpg"
                    ><img
                        src="https://live.staticflickr.com/65535/48733682177_0f2e6481c8_s.jpg"
                        alt="Mayan Warrior at Burning Man"
                      ></a></li>
                  <li><a
                      class="flickr_image"
                      href="https://live.staticflickr.com/65535/48728725746_5dfc456305_b.jpg"
                    ><img
                        src="https://live.staticflickr.com/65535/48728725746_5dfc456305_s.jpg"
                        alt="Burning Man Rides"
                      ></a></li>
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
            ></i> por
            <span class="font-weight-bold">
              <NuxtLink
                class="btn-flat-secondary text-veox"
                :to="'/'"
              >VEOX</NuxtLink>
            </span>
          </span>
        </div>
        <div class="col-md-6 text-right text-xs-center">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'TheNavbar',
  data () {
    return {

    }
  },
}
</script>
