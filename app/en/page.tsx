import type { Metadata } from "next";
import Image from "next/image";
import Header from "../components/Header";
import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ClientButtons from "../components/ClientButtons";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import { getLatestPosts } from "@/app/lib/posts";

export const metadata: Metadata = {
    title: 'Mohammad Mohajer | Front-End & iOS Developer',
    description: 'Resume and portfolio of Mohammad Mohajer, React.js, Next.js and iOS Developer with 5+ years experience',
    openGraph: {
        title: 'Mohammad Mohajer | Front-End & iOS Developer',
        description: 'Resume and portfolio of Mohammad Mohajer',
        url: 'https://maedemohajer.ir/en',
        images: ['https://maedemohajer.ir/profile.jpg'],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mohammad Mohajer | Front-End & iOS Developer',
        description: 'Resume and portfolio of Mohammad Mohajer',
        images: ['https://maedemohajer.ir/profile.jpg'],
    },
    alternates: {
        canonical: 'https://maedemohajer.ir/en',
        languages: {
            'fa': 'https://maedemohajer.ir',
            'en': 'https://maedemohajer.ir/en',
        },
    },
};

export default async function EnglishPage() {
    const latestPosts = await getLatestPosts(3);

    return (
        <div className="container" dir="ltr" lang="en">
            <Header />

            <section id="home" className="hero">
                <div className="hero-content">
                    <Image src="/profile.jpg" alt="Mohammad Mohajer - iOS & Front-End Developer" width={150} height={150} className="avatar" priority />
                    <h1>Mohammad Mohajer</h1>
                    <div className="subtitle-group">
                        <p className="subtitle">iOS Developer </p>
                        <p className="subtitle">Front-End Developer • React.js • Next.js</p>
                    </div>
                    <ClientButtons />
                </div>
            </section>


            {/* PROJECTS */}
            <section id="projects">
                <h2>My Projects</h2>
                <p className="section-subtitle">Some of my recent projects as an <strong>iOS & Front-End Developer</strong></p>

                <h3 className="skills-category">iOS Projects</h3>
                <div className="grid">
                    <ProjectCard name="Royapi" desc="Swift • Core Data • Spotlight Search • Tagging" link="https://github.com/mohammad165" />
                    <ProjectCard name="Urban Space Management" desc="SwiftUI • MapKit • Core Data • Charts • Sync" link="https://github.com/mohammad165" />
                    <ProjectCard name="Fitness App" desc="UIKit • HealthKit • Core Motion • Widget • Animation" link="https://github.com/mohammad165" />
                    <ProjectCard name="Simorgh" desc="Swift • Core Data • Mobile Payment • Finance" link="https://github.com/mohammad165" />
                    <ProjectCard name="PayPod" desc="Swift • Core Data • Mobile Payment • Wallet" link="https://github.com/mohammad165" />
                </div>

                <h3 className="skills-category">Web Projects</h3>
                <div className="grid">
                    <ProjectCard name="Simorgh Trade" desc="React • Tailwind • Trading • Investment" link="https://stts.ir/" external />
                    <ProjectCard name="mybajet" desc="React • Tailwind • Budget • Expenses" link="https://mybajet.ir/" external />
                    <ProjectCard name="Sahim" desc="React 18 • Axios • Validation • Notification" link="http://iranmcs.ir/sahimnew" external />
                    <ProjectCard name="Nikyar" desc="React 19 • TypeScript • Framer • Animation" link="https://iranmbm.ir/" external />
                    <ProjectCard name="IranMJS" desc="React • Chart.js • Dashboard • Visualization" link="https://iranmjs.ir/" external />
                    <ProjectCard name="IranCyar" desc="React • SASS • Clean • Responsive" link="https://irancyar.ir/" external />
                    <ProjectCard name="DrAliAhmadi" desc="React • Tailwind • Appointment • Medical" link="https://draliahmadii.ir/" external />
                    <ProjectCard name="ezlink" desc="React • Tailwind • Links • Management" link="https://tosansoha.com/ezlink/" external />
                    <ProjectCard name="ezpay" desc="React • Tailwind • Payment • Gateway" link="https://ezpay.ir/" external />
                    <ProjectCard name="grand-bazaar" desc="React • Tailwind • Store • Marketplace" link="https://grand-bazaar.ir/" external />
                    <ProjectCard name="suna" desc="React • Tailwind • Services • Panel" link="https://pep.co.ir/suna/" external />
                    <ProjectCard name="avand" desc="React • Tailwind • Club • Customers" link="https://panel.avandclub.ir/" external />
                    <ProjectCard name="pep" desc="React • Tailwind • Finance • Payment" link="https://pep.co.ir/" external />
                    <ProjectCard name="podicom" desc="React • Tailwind • Communication • Content" link="https://pep.co.ir/podicom/" external />
                    <ProjectCard name="pay-pod" desc="React • Tailwind • Wallet • Mobile" link="https://web.pay-pod.ir/" external />
                </div>
            </section>

            {/* SKILLS (همانند فارسی اما انگلیسی) */}
            <section id="skills">
                <h2>Technical Skills</h2>
                <p className="section-subtitle">Technologies and tools I work with daily</p>

                <h3 className="skills-category">iOS Development</h3>
                <div className="grid small">
                    {["Swift 5.9", "SwiftUI", "UIKit", "Combine", "Core Data", "CloudKit", "HealthKit", "Core Motion", "AVFoundation", "Push Notifications", "WidgetKit", "Swift Package Manager", "CocoaPods", "Xcode", "Instruments", "App Store Connect", "TestFlight", "MVVM Architecture", "SwiftLint", "Unit Testing (XCTest)"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">Front-End Core</h3>
                <div className="grid small">
                    {["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">Styling & UI</h3>
                <div className="grid small">
                    {["Tailwind CSS", "SASS/SCSS", "CSS Modules", "Framer Motion", "Responsive Design", "BEM", "Styled Components", "Human Interface Guidelines (HIG)"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">Server Communication</h3>
                <div className="grid small">
                    {["REST APIs", "Axios", "Fetch API", "URLSession", "Alamofire", "GraphQL (Apollo)", "WebSocket"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">State Management</h3>
                <div className="grid small">
                    {["Context API", "React Query", "useState", "useReducer", "SwiftUI @State", "Combine Publishers"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">Tools & Version Control</h3>
                <div className="grid small">
                    {["Git & GitHub", "VS Code", "WebStorm", "npm / yarn", "Vercel", "Chrome DevTools", "ESLint", "Prettier", "Postman", "React DevTools", "Figma", "Notion / Trello", "Xcode", "Swift Package Manager", "TestFlight"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>

                <h3 className="skills-category">Soft Skills</h3>
                <div className="grid small">
                    {["Problem Solving", "Time Management", "Team Collaboration", "Attention to Detail", "Continuous Learning", "Effective Communication", "Design Thinking"].map(s => <div key={s} className="card center">{s}</div>)}
                </div>
            </section>

            {/* BLOG */}
            <section id="blog">
                <h2>Blog</h2>
                <p className="section-subtitle">My latest articles about programming and development</p>
                <div className="grid blog-grid">
                    {latestPosts.map(post => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <a href="/blog" className="internal-link">View All Articles →</a>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="contact">
                <h2>Get In Touch</h2>
                <p className="section-subtitle">Let's work together on your next project</p>
                <div className="icons">
                    <a className="contact-item" href="tel:09124164734"><Phone size={20} /><span>+98 912 416 4734</span></a>
                    <a className="contact-item" href="mailto:mohammadmohajer490@gmail.com"><Mail size={20} /><span>mohammadmohajer490@gmail.com</span></a>
                    <a className="contact-item" href="https://github.com/mohammad165" target="_blank" rel="noopener noreferrer nofollow"><FaGithub size={20} /><span>github.com/mohammad165</span></a>
                </div>
                <div className="back-to-top">
                    <a href="#home" className="internal-link">↑ Back to Top</a>
                </div>
            </section>
        </div>
    );
}