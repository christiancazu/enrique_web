<template>
  <div class="social-all">
    <ul class="m-0">
      <template v-for="(item, i) in socialNetwork">
        <li
          :key="i"
        >
          <a
            :href="item.url"
            target="_bank"
            :class="{'small':isNavbar}"
          >
            <i :class="item.classIcon" />
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { SOCIAL_NETWORK } from '~/config/constants'

export default {
  props: {
    isNavbar: { type: Boolean, default: false }
  },

  data () {
    return {
      socialNetwork: SOCIAL_NETWORK
    }
  },
}
</script>