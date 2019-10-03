<template>
  <div class="page-news">
    <my-activities />
  </div>
</template>

<script>
import MyActivities from '~/components/MyActivities'

export default {
  name: 'News',
  components: {
    MyActivities
  }
}
</script>

<style>
  .page-news {
    margin-top: 6rem;
  }
</style>
