<template>
 <div class="row">
     <div class="col-6">
        <div class="container">
            <table class=content-table>
                  <thead>
                      <th scope="col">Asset Name</th>
                     <th scope="col">Asset Type</th>
                     <th scope="col">Brand</th>
                  </thead>
                  <tbody>
                      <tr v-for="asset in assets" :key="asset.id">
                         <td>{{asset.test}}</td>
                         <td>{{asset.Desktop}}</td>
                         <td>{{asset.Dell}}</td>    
                      </tr>
                 </tbody>
              </table>
         </div>
     </div> 
   </div> 
</template>

<script>
import showassetsService from "@/services/showassetsService"
export default{
    components:{},
    data(){
        return{
            assets:[],
            location:[],
            assetType:[],
            Brand:[],
            id:null
        }

    },
    methods:{
        getAssetTypes(){
            showassetsService.getAllAssetTypes()
            .then(resp =>{
                this.AssetTypes = resp.data
            })
        },
        getAssets(){
            showassetsService.getAssets()
            .then(resp=>{
                this.assets = resp.data
            })
        },
        getAssetDetails(id){
            showassetsService.getAssetDetails(id)
            .then(resp=>{
                this.assetDetails = resp.data
                console.log(this.assetDetails)
            })
        }
    },
  beforeMount(){
    this.getAssets()
    },
};

</script>

<style scoped>

</style>

