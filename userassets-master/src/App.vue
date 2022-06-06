<template>
   <h1 class="text-center mt-3 mb-4"></h1>
  <ShowAssets />
</template>

<script>
import ShowAssets from '@/components/assetUser/ShowAssets.vue'
export default {
name: "ShowAssets",
components:{
 ShowAssets
 },
}
</script>

<style>
h1{
  text-align: center;
}
</style>
