// app/components/ClientButtons.tsx
"use client";

export default function ClientButtons() {
    const scrollToProjects = () => {
        const el = document.getElementById("projects");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="buttons">
            <button className="btn primary" onClick={scrollToProjects}>
                View Projects
            </button>

            <a
                href="/resume.html"
                download="Maede_Mohajer_Resume.html"
                className="btn"
                onClick={(e) => {
                    if (!confirm('آیا می‌خواهید فایل را ذخیره کنید؟')) {
                        e.preventDefault();
                    }
                }}
            >
                Download Resume
            </a>
        </div>
    );
}