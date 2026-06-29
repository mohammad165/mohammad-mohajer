interface ProjectCardProps {
    name: string;
    desc: string;
    link: string;
    external?: boolean;
}

export default function ProjectCard({ name, desc, link, external = false }: ProjectCardProps) {
    return (
        <div className="card project-card">
            <h4>{name}</h4>
            <p>{desc}</p>
            <a
                href={link}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer nofollow" : undefined}
                className="project-link"
            >
                مشاهده پروژه →
            </a>
        </div>
    );
}