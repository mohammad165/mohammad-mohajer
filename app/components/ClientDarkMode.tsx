"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ClientDarkMode() {
    const [isLight, setIsLight] = useState(false); // پیش‌فرض dark


    const toggleDark = () => {
        const newIsLight = !isLight;
        setIsLight(newIsLight);

        if (newIsLight) {
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
        }
    };

    return (
        <button onClick={toggleDark} className="icon-btn" aria-label="Toggle dark mode">
            {isLight ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}