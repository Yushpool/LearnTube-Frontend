import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { importPlaylist } from "../api/importApi";

export default function ImportPlaylist() {

    const [url, setUrl] = useState("");

    const navigate = useNavigate();

    const handleImport = async () => {

        if (!url.trim()) {

            alert("Please enter a playlist URL");

            return;
        }

        try {

            await importPlaylist(url);

            alert("Playlist Imported Successfully!");

            navigate("/dashboard");

        } catch (e) {

            alert("Import Failed");

            console.error(e);

        }

    };

    return (

        <div
            style={{
                width: "700px",
                maxWidth: "90%",
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                alignItems: "center"
            }}
        >

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    background: "#1f2937",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #374151",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.35)"
                }}
            >

                <input

                    value={url}

                    onChange={(e) => setUrl(e.target.value)}

                    placeholder="Paste YouTube Playlist URL..."

                    style={{
                        flex: 1,
                        padding: "20px",
                        background: "transparent",
                        color: "white",
                        border: "none",
                        outline: "none",
                        fontSize: "17px"
                    }}

                />

                <button

                    onClick={handleImport}

                    style={{
                        padding: "0 40px",
                        border: "none",
                        cursor: "pointer",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: 600,
                        background:
                            "linear-gradient(90deg,#06b6d4,#6366f1)"
                    }}

                >

                    Import Playlist

                </button>

            </div>

            <p
                style={{
                    color: "#94a3b8",
                    fontSize: "15px",
                    textAlign: "center",
                    lineHeight: 1.7
                }}
            >
                Import any public YouTube playlist and transform it into
                a structured learning experience with progress tracking,
                lesson management and completion certificates.
            </p>

        </div>

    );

}