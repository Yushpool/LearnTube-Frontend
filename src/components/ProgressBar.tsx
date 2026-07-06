type Props = {
    progress: number;
};

export default function ProgressBar({ progress }: Props) {

    return (

        <div
            style={{
                width: "100%",
                height: "18px",
                background: "#1f2937",
                borderRadius: "999px",
                overflow: "hidden",
                margin: "25px 0",
                boxShadow: "inset 0 2px 8px rgba(0,0,0,.45)",
            }}
        >

            <div
                style={{
                    width: `${progress}%`,
                    height: "100%",
                    borderRadius: "999px",
                    background:
                        "linear-gradient(90deg,#06b6d4,#3b82f6,#6366f1)",
                    transition: "width .6s ease",
                    boxShadow:
                        "0 0 18px rgba(59,130,246,.55)",
                }}
            />

        </div>

    );

}