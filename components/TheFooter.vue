<template>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <span class="copyright">
            Desarrollado con
            <i
              class="fa fa-heart text-danger"
              aria-hidden="true"
            ></i> por
            <span class="font-weight-bold">
              <NuxtLink
                class="btn-flat-secondary text-red"
                :to="'/'"
              >VEOX</NuxtLink>
            </span>
          </span>
        </div>
        <div class="col-md-6">
          <button class="btn btn-xxx">xxx</button>
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <!-- <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div> -->
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
