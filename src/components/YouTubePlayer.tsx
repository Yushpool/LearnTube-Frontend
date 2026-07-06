import { useEffect, useRef } from "react";
import YouTube from "react-youtube";
import type { YouTubeEvent } from "react-youtube";
import { updateProgress } from "../api/lessonApi";

type Props = {
    lessonId: number;
    videoUrl: string;
    onProgressSaved?: () => void;
};

export default function YouTubePlayer({
    lessonId,
    videoUrl,
    onProgressSaved,
}: Props) {

    const playerRef = useRef<any>(null);
    const timerRef = useRef<number | null>(null);

    function extractVideoId(url: string) {

        const match = url.match(
            /(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/
        );

        return match ? match[1] : "";

    }

    async function saveProgress() {

        if (!playerRef.current) return;

        const currentTime = Math.floor(
            playerRef.current.getCurrentTime()
        );

        const duration = Math.floor(
            playerRef.current.getDuration()
        );

        try {

            await updateProgress(
                lessonId,
                currentTime,
                duration
            );

            onProgressSaved?.();

        } catch (err) {

            console.error(err);

        }

    }

    function onReady(event: YouTubeEvent) {

        playerRef.current = event.target;

    }

    function onStateChange(event: YouTubeEvent) {

        // PLAYING
        if (event.data === 1) {

            if (timerRef.current) {

                clearInterval(timerRef.current);

            }

            timerRef.current = window.setInterval(() => {

                saveProgress();

            }, 30000);

        }

        // PAUSED

        else if (event.data === 2) {

            if (timerRef.current) {

                clearInterval(timerRef.current);

            }

            saveProgress();

        }

        // ENDED

        else if (event.data === 0) {

            if (timerRef.current) {

                clearInterval(timerRef.current);

            }

            saveProgress();

        }

    }

    useEffect(() => {

        return () => {

            saveProgress();

            if (timerRef.current) {

                clearInterval(timerRef.current);

            }

        };

    }, []);

    return (

        <div style={{ marginBottom: "30px" }}>

            <YouTube

                videoId={extractVideoId(videoUrl)}

                opts={{
                    width: "100%",
                    height: "500",
                }}

                onReady={onReady}

                onStateChange={onStateChange}

            />

        </div>

    );

}