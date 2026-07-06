import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getPlaylistById } from "../api/playlistApi";
import { generateCertificate } from "../utils/certificate";

import ProgressBar from "../components/ProgressBar";
import LessonCard from "../components/LessonCard";
import YouTubePlayer from "../components/YouTubePlayer";

export default function LearnPage() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [playlist, setPlaylist] = useState<any>();

    const [selectedLesson, setSelectedLesson] = useState<any>();

    useEffect(() => {

        loadPlaylist();

    }, []);

    async function loadPlaylist() {

        const data = await getPlaylistById(Number(id));

        setPlaylist(data);

        if (!selectedLesson && data.lessons.length > 0) {

            setSelectedLesson(data.lessons[0]);

        }

    }

    if (!playlist) {

        return <h2 style={{ color: "white" }}>Loading...</h2>;

    }

    return (

        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#0b1220,#111827,#1e1b4b)",
                color: "white",
                padding: "40px",
            }}
        >

            {/* Header */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "25px",
                    flexWrap: "wrap",
                }}
            >

                <div>

                    <h1
                        style={{
                            margin: 0,
                            fontSize: "40px",
                        }}
                    >
                        {playlist.title}
                    </h1>

                    <p
                        style={{
                            color: "#94a3b8",
                            marginTop: "10px",
                        }}
                    >
                        Continue learning and unlock your certificate.
                    </p>

                </div>

                <button
                    onClick={() => navigate("/dashboard")}
                    style={{
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        background:
                            "linear-gradient(90deg,#06b6d4,#6366f1)",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    ← Dashboard
                </button>

            </div>

            {/* Progress */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                    color: "#cbd5e1",
                    fontWeight: 600,
                }}
            >

                <span>Course Progress</span>

                <span>
                    {playlist.progress.toFixed(0)}%
                </span>

            </div>

            <ProgressBar progress={playlist.progress} />

            {/* Stats */}

            <div
                style={{
                    display: "flex",
                    gap: "30px",
                    margin: "30px 0",
                    flexWrap: "wrap",
                    color: "#cbd5e1",
                }}
            >

                <span>
                    📚 {playlist.totalLessons} Lessons
                </span>

                <span>
                    ✅ {playlist.completedLessons} Completed
                </span>

                <span>
                    📈 {playlist.progress.toFixed(0)}%
                </span>

            </div>

            {/* Certificate */}

            <div
                style={{
                    background: "#111827",
                    borderRadius: "18px",
                    border: "1px solid #374151",
                    padding: "25px",
                    marginBottom: "35px",
                }}
            >

                <h2>🏆 Course Certificate</h2>

                <p
                    style={{
                        color: "#94a3b8",
                    }}
                >
                    Complete the playlist to unlock your official
                    LearnTube certificate.
                </p>

                <h1
                    style={{
                        color:
                            playlist.progress >= 100
                                ? "#22c55e"
                                : "#f59e0b",
                    }}
                >
                    {playlist.progress >= 100
                        ? "✅ UNLOCKED"
                        : "🔒 LOCKED"}
                </h1>

                {playlist.progress >= 100 && (

                    <button
                        onClick={() =>
                            generateCertificate(
                                playlist.title
                            )
                        }
                        style={{
                            padding: "14px 28px",
                            background: "#16a34a",
                            color: "white",
                            border: "none",
                            borderRadius: "12px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        Download Certificate
                    </button>

                )}

            </div>

            {/* Player */}

            {selectedLesson && (

                <div
                    style={{
                        background: "#111827",
                        borderRadius: "20px",
                        padding: "25px",
                        border: "1px solid #374151",
                        marginBottom: "40px",
                    }}
                >

                    <p
                        style={{
                            color: "#60a5fa",
                            fontWeight: "bold",
                        }}
                    >
                        ▶ NOW PLAYING
                    </p>

                    <h2>{selectedLesson.title}</h2>

                    <YouTubePlayer
                        lessonId={selectedLesson.id}
                        videoUrl={selectedLesson.videoUrl}
                        onProgressSaved={loadPlaylist}
                    />

                </div>

            )}

            <h2>📚 Course Lessons</h2>

            {playlist.lessons.map((lesson: any) => (

                <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    onSelect={() =>
                        setSelectedLesson(lesson)
                    }
                />

            ))}

        </div>

    );

}