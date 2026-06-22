// app/components/Header.tsx
"use client";
import ClientDarkMode from "./ClientDarkMode";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
    return (
        <div className="header-actions">
            <LanguageSwitcher />
            <ClientDarkMode />
        </div>
    );
}