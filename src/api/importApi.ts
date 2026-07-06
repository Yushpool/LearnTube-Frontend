import axios from "axios";

const API="http://localhost:8080/api";

export const importPlaylist=async(url:string)=>{

    const response=await axios.post(`${API}/import`,{

        url

    });

    return response.data;

}