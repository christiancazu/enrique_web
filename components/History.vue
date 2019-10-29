<template>
  <div class="history">
    <div class="history__header">
      <h4>{{ title }}</h4>
    </div>
    <div class="container">
      <div
        :class="[
          { 'flex-row-reverse' : reverse },
          'row history__body'
        ]"
      >
        <img
          :src="img"
          :alt="`${ownerName} - ${title}`"
          class="col-12 col-md-6 history__body__img"
        >
        <div class="col-12 col-md-6 history__body__content">
          <div class="history__body__content__quote">
            <i
              class="fa fa-quote-left history__body__content__quote--left"
              aria-hidden="true"
            />
          </div>
          <p class="history__body__content__text">
            {{ body }}
          </p>
          <div class="history__body__content__quote">
            <i
              class="fa fa-quote-left history__body__content__quote--right"
              aria-hidden="true"
            />
          </div>
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
