import axios from "axios";

const API = `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/api`;

console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);
console.log("API =", API);

export const importPlaylist=async(url:string)=>{

    const response=await axios.post(`${API}/import`,{

        url

    });

    return response.data;

}