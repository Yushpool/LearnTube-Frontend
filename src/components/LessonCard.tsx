type Props = {
    lesson: any;
    onSelect: () => void;
};

export default function LessonCard({
    lesson,
    onSelect,
}: Props) {

    return (

        <div

            onClick={onSelect}

            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "#3b82f6";
                e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(59,130,246,.18)";
            }}

            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.borderColor = "#374151";
                e.currentTarget.style.boxShadow = "none";
            }}

            style={{

                marginTop: "16px",

                padding: "20px",

                borderRadius: "16px",

                cursor: "pointer",

                background: "#111827",

                border: "1px solid #374151",

                color: "white",

                transition: "all .25s ease",

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center",

            }}

        >

            <div
                style={{
                    flex: 1,
                }}
            >

                <h3
                    style={{
                        margin: 0,
                        fontSize: "19px",
                        fontWeight: 600,
                    }}
                >
                    {lesson.title}
                </h3>

                <div
                    style={{
                        display: "flex",
                        gap: "18px",
                        marginTop: "12px",
                        color: "#94a3b8",
                        fontSize: "14px",
                        flexWrap: "wrap",
                    }}
                >

                    <span>
                        ⏱ {lesson.watchedSeconds ?? 0}s watched
                    </span>

                    <span>
                        📈 {lesson.watchedPercentage?.toFixed(0) ?? 0}%
                    </span>

                </div>

            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                }}
            >

                {lesson.completed ? (

                    <div
                        style={{
                            background: "#16a34a",
                            color: "white",
                            padding: "8px 14px",
                            borderRadius: "999px",
                            fontSize: "13px",
                            fontWeight: 600,
                        }}
                    >
                        ✅ Completed
                    </div>

                ) : (

                    <div
                        style={{
                            background: "#2563eb",
                            color: "white",
                            padding: "8px 14px",
                            borderRadius: "999px",
                            fontSize: "13px",
                            fontWeight: 600,
                        }}
                    >
                        ▶ Continue
                    </div>

                )}

            </div>

        </div>

    );

}
