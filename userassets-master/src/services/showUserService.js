import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://x8ki-letl-twmt.n7.xano.io/api:1ZLjxP1j",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default{
    getStaff(){
        return apiClient.get("/staff");
    },
    getLocation(){
        return apiClient.get("/location")
    }
};