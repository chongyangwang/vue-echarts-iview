<template>
      <Layout>
          <i-header class="layout-header-bar iview_header">
               <div class="iview_header_inner">
                  <img src="../../assets/logo1.png" alt="">
               </div>
               <!-- 这个线应该是用伪类做的 -->
               <b class="iview_scoreline"></b>
               <h3 class="iview_title">汇聚知识 认知世界</h3>
          </i-header>
      </Layout>
</template>
<script>
export default {
  name: 'HeaderNav',
  data: function () {
    return {
      name: 'zs'
    }
  }
}
</script>
<style scoped>

</style>
