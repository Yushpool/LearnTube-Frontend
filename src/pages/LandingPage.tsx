import { useNavigate } from "react-router-dom";
import ImportPlaylist from "../components/ImportPlaylist";

export default function LandingPage() {

    const navigate = useNavigate();

    return (

        <div
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#0b1220,#111827,#1e1b4b)",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px"
            }}
        >

            <h1
                style={{
                    fontSize: "60px",
                    marginBottom: "10px",
                    textAlign: "center"
                }}
            >
                Turn YouTube Learning Into
                <br />
                Verified Certificates
            </h1>

            <p
                style={{
                    color: "#b8c1d1",
                    fontSize: "20px",
                    textAlign: "center",
                    maxWidth: "700px",
                    marginBottom: "50px"
                }}
            >
                Import any YouTube playlist, track your learning
                progress, unlock certificates and build a structured
                learning journey.
            </p>

            <ImportPlaylist />

            <button
                onClick={() => navigate("/dashboard")}
                style={{
                    marginTop: "20px",
                    padding: "14px 32px",
                    borderRadius: "12px",
                    border: "none",
                    background: "#3b82f6",
                    color: "white",
                    fontSize: "18px",
                    cursor: "pointer"
                }}
            >
                Open Dashboard →
            </button>

        </div>

    );

}