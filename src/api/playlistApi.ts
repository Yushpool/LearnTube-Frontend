import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/api`;


export const getAllPlaylists = async () => {
    const response = await axios.get(`${API}/playlists`);
    return response.data;
};

export const getPlaylistById = async (id: number) => {
    const response = await axios.get(`${API}/playlists/${id}`);
    return response.data;
};