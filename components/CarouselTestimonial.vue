<template>
  <div id="carouselTestimonial" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselTestimonial" data-slide-to="0" class="active"></li>
      <li data-target="#carouselTestimonial" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="pt-10">
          <h3 class="text-center">TESTIMONIAL</h3>
          <p class="text-center">Lorem ipsum dolor sit amet adipiscing elit</p>
          <div class="noo-testimonial-wrap style-navi">
            <ul class="noo_testimonial noo-sync1">
              <li>
                <div class="noo-testi-content">
                  <i class="fa fa-quote-left"></i>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                  </p>
                  <div class="testi-footer">
                    <img width="85" height="85" src="https://cdn.shopify.com/s/files/1/1297/1881/t/7/assets/testimonial_author_1.jpg?0" alt="" /> 
                    <span class="testi-author">
                    Readable <strong>Ceo </strong>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="carousel-item">
        <div class="pt-10">
          <h3 class="text-center">TESTIMONIAL</h3>
          <p class="text-center">Lorem ipsum dolor sit amet adipiscing elit</p>
          <div class="noo-testimonial-wrap style-navi">
            <ul class="noo_testimonial noo-sync1">
              <li>
                <div class="noo-testi-content">
                  <i class="fa fa-quote-left"></i>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
                  </p>
                  <div class="testi-footer">
                    <img width="85" height="85" src="https://cdn.shopify.com/s/files/1/1297/1881/t/7/assets/testimonial_author_1.jpg?0" alt="" /> 
                    <span class="testi-author">
                    Readable <strong>Ceo </strong>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselTestimonial" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselTestimonial" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import constants from '~/config/constants'
import jqCarouselTestimonial from '~/jq-script/jq.carousel.testimonial'

export default {
  name: 'CarouselTestimonial',
  data() {
    return {
      imgPath: constants.IMG_BASE_PATH + '/carousel-main/',
      images: [
        { src: 'cropped-viajar-solo.jpg', alt: '' },
        { src: 'cropped-viajar-solo.jpg', alt: '' },
        { src: 'cropped-viajar-solo.jpg', alt: '' }
      ]
    }
  },
  mixins: [jqCarouselTestimonial]
}
</script>
