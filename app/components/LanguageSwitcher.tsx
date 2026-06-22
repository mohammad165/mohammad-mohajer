"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const isEnglish = pathname === "/en";

    return (
        <Link href={isEnglish ? "/" : "/en"} className="lang-btn">
            <Globe size={18} />
            <span>{isEnglish ? "Fa" : "En"}</span>
        </Link>
    );
}