<template>
  <div class="social-all">
    <template v-for="(item, i) in socialNetwork">
      <a
        :key="i"
        :href="item.url"
        target="_bank"
      >
        <i :class="item.classIcon" />
      </a>
    </template>
  </div>
</template>

<script>
import { SOCIAL_NETWORK } from '~/config/constants'

export default {
  data() {
    return {
      socialNetwork: SOCIAL_NETWORK
    }
  },
}
</script>