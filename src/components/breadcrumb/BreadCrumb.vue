<template>
    <div class="iview-breadnav">
        <Breadcrumb class="iview-breadcrumb" separator="<b class='demo-breadcrumb-separator' style='color:#000;fontSize:20px'>==></b>">
          <BreadcrumbItem v-for="(item, index ) in breadcrumbList" :key="index" :to="item.linkpath">{{item.title}}</BreadcrumbItem>
        </Breadcrumb>
        <hr>
    </div>
</template>
<script>
export default {
  name: 'BreadCrumb',
  props: {
    breadcrumbList: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
.iview-breadnav{
  height:60px;
  flex-shrink: 0;
}
.iview-breadcrumb{
  padding-left: 15px;
  height:60px;
  line-height: 60px;
}
.iview_scoreline{
  width:1.6px;
  height: 36px;
  background: #fff;
  margin-right: 20px;
  margin-top: 2px;
}
</style>
