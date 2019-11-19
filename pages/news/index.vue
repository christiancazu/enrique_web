<template>
  <div class="container news-page">
    <header-section
      attach="ultimas"
      :title="`Noticias`"
      :description="`Estas son mis activities`"
    />

    <div class="row justify-content-center">
      <div
        v-for="(activity, i) in activities"
        :key="i"
        class="col-sm-6 col-md-4 mb-3"
      >
        <card-activity
          :id="activity.id"
          :title="activity.title"
          :date="activity.date"
          :description="activity.description"
          :slug="activity.slug"
          :img="imgPath + activity.img"
        />
      </div>
    </div>
  </div>
<!-- 
  <div class="row">
    <div class="col-md-4 col-sm-6 col-xs-6">
      <div class="team-member"> 
        <img
          src="images/team-1.png"
          alt="team"
          width="370"
          height="400"
        >
        <div class="team-social-icon">
          <h3>Stevan hackett</h3>
          <h5>Web Designer</h5>
          <p>So get a witch'sS shawl on aS broomsticks you can crawl on. Were gonna pay call on the Addams Family. </p>
          <ul class="social-icons">
            <li>
              <a
                href="#"
                title="Facebook"
              ><i class="fa fa-facebook" /></a>
            </li>
            <li>
              <a
                href="#"
                title="Twitter"
              ><i class="fa fa-twitter" /></a>
            </li>
            <li>
              <a
                href="#"
                title="Linkedin"
              ><i class="fa fa-linkedin" /></a>
            </li>
            <li>
              <a
                href="#"
                title="Behance"
              ><i class="fa fa-behance" /></a>
            </li>
          </ul>
        </div>
        <div class="counter-block">
          <div class="col-md-4 col-sm-4 col-xs-4 statistics-box html-color">
            <h3>HTML/CSS</h3> 
            <span
              id="statistics_count-1"
              data-statistics_percent="85%"
            >85</span> 
          </div>
          <div class="col-md-4 col-sm-4 col-xs-4 statistics-box photo-color">
            <h3>Photoshop</h3> 
            <span
              id="statistics_count-2"
              data-statistics_percent="80%"
            >80</span> 
          </div>
          <div class="col-md-4 col-sm-4 col-xs-4 statistics-box illustrator-color">
            <h3>Illustrator</h3> 
            <span
              id="statistics_count-3"
              data-statistics_percent="70%"
            >70</span> 
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6 col-xs-6">
     
    </div>
    <div class="col-md-4 col-sm-6 col-xs-6">
      <div class="team-member">
        <img
          src="images/team-3.png"
          alt="team"
          width="370"
          height="400"
        >
        <div class="team-social-icon">
          <h3>Stevan hackett</h3>
          <h5>Web Designer</h5>
          <p>So get a witch'sS shawl on aS broomsticks you can crawl on. Were gonna pay call on the Addams Family. </p>
          <ul class="social-icons">
            <li>
              <a
                href="#"
                title="Facebook"
              ><i class="fa fa-facebook" /></a>
            </li>
            <li>
              <a
                href="#"
                title="Twitter"
              ><i class="fa fa-twitter" /></a>
            </li>
            <li>
              <a
                href="#"
                title="Linkedin"
              ><i class="fa fa-linkedin" /></a>
            </li>
            <li>
              <a
                href="#"
                title="Behance"
              ><i class="fa fa-behance" /></a>
            </li>
          </ul>
        </div>
        <div class="counter-block">
          <div class="col-md-4 col-sm-4 col-xs-4 statistics-box html-color">
            <h3>HTML/CSS</h3> 
            <span
              id="statistics_count-7"
              data-statistics_percent="85%"
            >85</span> 
          </div>
          <div class="col-md-4 col-sm-4 col-xs-4 statistics-box photo-color">
            <h3>Photoshop</h3> 
            <span
              id="statistics_count-8"
              data-statistics_percent="80%"
            >80</span> 
          </div>
          <div class="col-md-4 col-sm-4 col-xs-4 statistics-box illustrator-color">
            <h3>Illustrator</h3> 
            <span
              id="statistics_count-9"
              data-statistics_percent="70%"
            >70</span> 
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { IMG_BASE_PATH } from '~/config/constants'
import HeaderSection from '~/components/HeaderSection'
import CardActivity from '~/components/CardActivity'
import { mapGetters } from 'vuex'

export default {
  name: 'News',
  components: {
    HeaderSection, CardActivity
  },
  data () {
    return {
      imgPath: IMG_BASE_PATH + '/activities/',
    }
  },
  computed: {
    ...mapGetters({
      activities: 'activitiesReverseOrder'
    })
  },
}
</script>
