// app/components/ProjectCard.tsx
"use client";
import { motion } from "framer-motion";

type ProjectProps = {
    name: string;
    desc: string;
    link: string;
};

export default function ProjectCard({ name, desc, link }: ProjectProps) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="card"
        >
            <h3>{name}</h3>
            <p>{desc}</p>
        </motion.a>
    );
}