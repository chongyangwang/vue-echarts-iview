<template>
      <div>
        <BreadCrumb :breadcrumbList="breadcrumbList"></BreadCrumb>
        <p>生产准备</p>
      </div>
</template>

<script>
import BreadCrumb from '@/components/breadcrumb/BreadCrumb'
export default {
 name: 'Productlinemonitor',
  data: function () {
    return {
      breadcrumbList:[]
    }
  },
  components: {
    BreadCrumb: BreadCrumb
  },
  methods:{
    getBreadcrumb () {
      this.breadcrumbList=this.$route.meta
    }
  },
  created: function () {
    this.getBreadcrumb()
  },
  mounted: function () {
  
  }

}
</script>
<style>

</style>