import axios from "axios";

const API = "http://localhost:8080/api";

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