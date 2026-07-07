import axios from "axios";

const API = `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/api`;

export const importPlaylist=async(url:string)=>{

    const response=await axios.post(`${API}/import`,{

        url

    });

    return response.data;

}