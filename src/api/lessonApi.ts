import axios from "axios";

const API = `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/api`;


export const updateProgress = async (
    lessonId: number,
    currentTime: number,
    duration: number
) => {

    const response = await axios.put(

        `${API}/lessons/${lessonId}/progress`,

        {
            currentTime,
            duration,
        }

    );

    return response.data;

};