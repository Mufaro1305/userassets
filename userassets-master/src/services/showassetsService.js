import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://x8ki-letl-twmt.n7.xano.io/api:1ZLjxP1j",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  getAssets() {
    return apiClient.get("/asssets");
  },
  getSpecificAsset(id) {
    return apiClient.get(`/asssets/${id}`);
  },

  getAllAssetTypes(){
    return apiClient.get("/asset_type")
    },
 getSpecificAssetType(id){
    return apiClient.get(`/asset_type/${id}`)
    },
    
 getAssetDetails(id){
    return apiClient.get(`/asset_details?asset_id=${id}`)
    }, 
   
  
    
};
