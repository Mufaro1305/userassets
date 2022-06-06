<template>
    <div class="row">
        <div class="col-6">
            <div class="container">
             <table>
                 <thead>
                     <th>Staff name </th>
                     <th>Location</th>
                 </thead>
                 <tbody>
                     <tr>
                         <td>Yvonne</td>
                         <td>Goodwood</td>
                     </tr>
                 </tbody>
             </table>
            </div>
        </div>
    </div>
</template>
<script>
import showUserService from showUserService
 export default{
     components:{},
     data(){
         return{
             staffname:null,
             Location: null
         }
     },
     methods:{
       getStaff(){
           showUserService.getStaff()
           .then(resp=>{
               this.staff = resp.data
           })
       },
       getLocation(){
           showUserService.getLocation()
           .then(resp=>{
               this.Location =resp.data
           })
       },
     beforeMount(){
        this.getStaff
        this.getLocation
       },
    }
}   
</script>

