<template>
  <div class="history">
    <div class="container">
      <div
        :class="[{ 'flex-row-reverse' : reverse },
                 'row history__body']"
      >
        <img
          :src="img"
          :alt="`${ownerName} - ${title}`"
          class="col-12 col-md-5 history__body__img"
        >
        <div class="col-12 col-md-7 history__body__content">
          <p
            class="history__body__content__text"
            v-html="body"
          />
        </div>
      </div>
    </div>
    <div class="history__footer">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="footer" />
    </div>
  </div>
</template>

<script>
import { OWNER_NAME } from '~/config/constants'

export default {
  name: 'History',
  props: {
    img: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    },
    reverse: {
      type: Boolean, default: false
    }
  },
  data () {
    return {
      ownerName: OWNER_NAME
    }
  }
}
</script>
