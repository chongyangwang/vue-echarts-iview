<template>
  <div>
    <button type="button" class="actGotop" v-show="backTopShow">我要上天</button>
  </div>
</template>
<script>
import $ from 'jquery'
import '@/common/js/scrolltop.js'
export default {
    data() {
      return {
        backTopShow:false
      }
    },
    methods: {
    
    },
    mounted() {
      $('div.iview-content').scrollTops({
          'ele':'.iview-content',
          'activeDom':'.actGotop'
      })
    },
 }
</script>
<style scoped>

.actGotop{
    position: fixed;
    right: 50px;
    bottom: 200px;
}
</style>