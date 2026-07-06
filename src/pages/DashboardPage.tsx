import { useEffect, useState } from "react";
import { getAllPlaylists } from "../api/playlistApi";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {

    const [playlists, setPlaylists] = useState<any[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadPlaylists();
    }, []);

    async function loadPlaylists() {

        try {

            const data = await getAllPlaylists();

            setPlaylists(data);

        } catch (e) {

            console.log(e);

        }

    }

    return (

        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#0b1220,#111827,#1e1b4b)",
                color: "white",
                padding: "50px",
            }}
        >

            {/* Header */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "50px",
                    flexWrap: "wrap",
                    gap: "20px",
                }}
            >

                <div>

                    <h1
                        style={{
                            fontSize: "44px",
                            margin: 0,
                        }}
                    >
                        Welcome Back 👋
                    </h1>

                    <p
                        style={{
                            color: "#94a3b8",
                            marginTop: "10px",
                            fontSize: "18px",
                        }}
                    >
                        Continue your learning journey.
                    </p>

                </div>

                <button
                    onClick={() => navigate("/")}
                    style={{
                        border: "none",
                        padding: "15px 30px",
                        borderRadius: "14px",
                        cursor: "pointer",
                        background:
                            "linear-gradient(90deg,#06b6d4,#6366f1)",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow:
                            "0 8px 20px rgba(59,130,246,.35)",
                    }}
                >
                    + Import Playlist
                </button>

            </div>

            {/* Empty State */}

            {playlists.length === 0 && (

                <div
                    style={{
                        background: "#111827",
                        borderRadius: "20px",
                        padding: "50px",
                        textAlign: "center",
                        border: "1px solid #374151",
                    }}
                >

                    <h2>No Courses Yet 📚</h2>

                    <p
                        style={{
                            color: "#94a3b8",
                        }}
                    >
                        Import your first YouTube playlist to begin learning.
                    </p>

                </div>

            )}

            {/* Course Cards */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit,minmax(340px,1fr))",
                    gap: "30px",
                }}
            >

                {playlists.map((playlist) => (

                    <div

                        key={playlist.id}

                        style={{

                            background: "#111827",

                            borderRadius: "22px",

                            overflow: "hidden",

                            border: "1px solid #374151",

                            transition: ".3s",

                            boxShadow:
                                "0 10px 30px rgba(0,0,0,.35)",

                        }}

                        onMouseEnter={(e) => {

                            e.currentTarget.style.transform =
                                "translateY(-6px)";

                            e.currentTarget.style.borderColor =
                                "#3b82f6";

                        }}

                        onMouseLeave={(e) => {

                            e.currentTarget.style.transform =
                                "translateY(0px)";

                            e.currentTarget.style.borderColor =
                                "#374151";

                        }}

                    >

                        {/* Banner */}

                        <div
                            style={{
                                height: "170px",
                                background:
                                    "linear-gradient(135deg,#06b6d4,#6366f1)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "70px",
                            }}
                        >
                            🎓
                        </div>

                        {/* Content */}

                        <div
                            style={{
                                padding: "25px",
                            }}
                        >

                            <h2
                                style={{
                                    marginTop: 0,
                                    fontSize: "24px",
                                }}
                            >
                                {playlist.title}
                            </h2>

                            <p
                                style={{
                                    color: "#94a3b8",
                                    marginBottom: "20px",
                                }}
                            >
                                {playlist.completedLessons} / {playlist.totalLessons} Lessons Completed
                            </p>

                            {/* Progress */}

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: "10px",
                                    fontSize: "14px",
                                    color: "#cbd5e1",
                                }}
                            >

                                <span>Progress</span>

                                <span>
                                    {playlist.progress.toFixed(0)}%
                                </span>

                            </div>

                            <div
                                style={{
                                    width: "100%",
                                    height: "12px",
                                    background: "#1f2937",
                                    borderRadius: "999px",
                                    overflow: "hidden",
                                }}
                            >

                                <div
                                    style={{
                                        width: `${playlist.progress}%`,
                                        height: "100%",
                                        background:
                                            "linear-gradient(90deg,#06b6d4,#3b82f6,#6366f1)",
                                        borderRadius: "999px",
                                    }}
                                />

                            </div>

                            {/* Bottom */}

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "25px",
                                }}
                            >

                                <span
                                    style={{
                                        color: "#cbd5e1",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {playlist.progress.toFixed(0)}%
                                </span>

                                <button

                                    onClick={() =>
                                        navigate(`/learn/${playlist.id}`)
                                    }

                                    style={{
                                        border: "none",
                                        cursor: "pointer",
                                        borderRadius: "12px",
                                        padding: "12px 22px",
                                        background: "#4f46e5",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}

                                >

                                    Continue Learning →

                                </button>

                            </div>

                            {playlist.progress >= 100 && (

                                <div
                                    style={{
                                        marginTop: "20px",
                                        padding: "12px",
                                        borderRadius: "12px",
                                        background: "#16a34a",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                    }}
                                >
                                    🏆 Certificate Unlocked
                                </div>

                            )}

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}