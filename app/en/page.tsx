// app/en/page.tsx (نسخه انگلیسی - مطابق با فارسی)
import Image from "next/image";
import Header from "../components/Header";
import { Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ClientButtons from "../components/ClientButtons";
import ProjectCard from "../components/ProjectCard";

export default function EnglishPage() {
    return (
        <div className="container" dir="ltr" lang="en">
            <Header />

            {/* HERO SECTION */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <Image
                        src="/profile.jpg"
                        alt="Mohammad Mohajer - iOS & Front-End Developer"
                        width={150}
                        height={150}
                        className="avatar"
                        priority
                    />
                    <h1>Mohammad Mohajer</h1>
                    <div className="subtitle-group">
                        <p className="subtitle">iOS Developer • Swift • SwiftUI • UIKit</p>
                        <p className="subtitle">Front-End Developer • React.js • Next.js</p>
                    </div>
                    <ClientButtons />
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="card">
                <h2>About Me</h2>

                <p style={{ marginBottom: '1rem' }}>
                    I'm Mohammad Mohajer. A Front-End and iOS Developer focused on SwiftUI, UIKit, and React.js.
                </p>

                <p style={{ marginBottom: '1rem' }}>
                    From small projects to complex systems — always with a commitment to quality and on-time delivery.
                </p>

                <p style={{ marginBottom: '1rem' }}>
                    Now I'm looking for a professional team to grow, learn, and build products that truly make a difference.
                </p>

                <p>
                    <a href="#contact" className="internal-link">Get in Touch</a>
                </p>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects">
                <h2>My Projects</h2>
                <p className="section-subtitle">Some of my recent projects as an <strong>iOS & Front-End Developer</strong></p>

                {/* iOS Projects */}
                <h3 className="skills-category">iOS Projects</h3>
                <div className="grid">
                    <ProjectCard
                        name="Royapi"
                        desc="Swift • Core Data • Spotlight Search • Tagging"
                        link="#"
                    />

                    <ProjectCard
                        name="Urban Space Management"
                        desc="SwiftUI • MapKit • Core Data • Charts • Sync"
                        link="#"
                    />

                    <ProjectCard
                        name="Fitness App"
                        desc="UIKit • HealthKit • Core Motion • Widget • Animation"
                        link="#"
                    />

                    <ProjectCard
                        name="Simorgh"
                        desc="Swift • Core Data • Mobile Payment • Finance"
                        link="#"
                    />

                    <ProjectCard
                        name="PayPod"
                        desc="Swift • Core Data • Mobile Payment • Wallet"
                        link="#"
                    />
                </div>

                {/* Web Projects */}
                <h3 className="skills-category">Web Projects</h3>
                <div className="grid">
                    <ProjectCard
                        name="Simorgh Trade"
                        desc="React • Tailwind • Trading • Investment"
                        link="https://stts.ir/"
                    />

                    <ProjectCard
                        name="mybajet"
                        desc="React • Tailwind • Budget • Expenses"
                        link="https://mybajet.ir/"
                    />

                    <ProjectCard
                        name="Sahim"
                        desc="React 18 • Axios • Validation • Notification"
                        link="http://iranmcs.ir/sahimnew"
                    />

                    <ProjectCard
                        name="Nikyar"
                        desc="React 19 • TypeScript • Framer • Animation"
                        link="https://iranmbm.ir/"
                    />

                    <ProjectCard
                        name="IranMJS"
                        desc="React • Chart.js • Dashboard • Visualization"
                        link="https://iranmjs.ir/"
                    />

                    <ProjectCard
                        name="IranCyar"
                        desc="React • SASS • Clean • Responsive"
                        link="https://irancyar.ir/"
                    />

                    <ProjectCard
                        name="DrAliAhmadi"
                        desc="React • Tailwind • Appointment • Medical"
                        link="https://draliahmadii.ir/"
                    />

                    <ProjectCard
                        name="ezlink"
                        desc="React • Tailwind • Links • Management"
                        link="https://tosansoha.com/ezlink/"
                    />

                    <ProjectCard
                        name="ezpay"
                        desc="React • Tailwind • Payment • Gateway"
                        link="https://ezpay.ir/"
                    />

                    <ProjectCard
                        name="grand-bazaar"
                        desc="React • Tailwind • Store • Marketplace"
                        link="https://grand-bazaar.ir/"
                    />

                    <ProjectCard
                        name="suna"
                        desc="React • Tailwind • Services • Panel"
                        link="https://pep.co.ir/suna/"
                    />

                    <ProjectCard
                        name="avand"
                        desc="React • Tailwind • Club • Customers"
                        link="https://panel.avandclub.ir/"
                    />

                    <ProjectCard
                        name="pep"
                        desc="React • Tailwind • Finance • Payment"
                        link="https://pep.co.ir/"
                    />

                    <ProjectCard
                        name="podicom"
                        desc="React • Tailwind • Communication • Content"
                        link="https://pep.co.ir/podicom/"
                    />

                    <ProjectCard
                        name="pay-pod"
                        desc="React • Tailwind • Wallet • Mobile"
                        link="https://web.pay-pod.ir/"
                    />
                </div>
            </section>

            {/* SKILLS SECTION - بدون آیکون */}
            <section id="skills">
                <h2>Technical Skills</h2>
                <p className="section-subtitle">Technologies and tools I work with daily</p>

                {/* iOS Development */}
                <h3 className="skills-category">iOS Development</h3>
                <div className="grid small">
                    {[
                        "Swift 5.9",
                        "SwiftUI",
                        "UIKit",
                        "Combine",
                        "Core Data",
                        "CloudKit",
                        "HealthKit",
                        "Core Motion",
                        "AVFoundation",
                        "Push Notifications",
                        "WidgetKit",
                        "Swift Package Manager",
                        "CocoaPods",
                        "Xcode",
                        "Instruments",
                        "App Store Connect",
                        "TestFlight",
                        "MVVM Architecture",
                        "SwiftLint",
                        "Unit Testing (XCTest)"
                    ].map((s) => (
                        <div key={s} className="card center">
                            {s}
                        </div>
                    ))}
                </div>

                {/* Front-End Core */}
                <h3 className="skills-category">Front-End Core</h3>
                <div className="grid small">
                    {["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* Styling & UI */}
                <h3 className="skills-category">Styling & UI</h3>
                <div className="grid small">
                    {["Tailwind CSS", "SASS/SCSS", "CSS Modules", "Framer Motion", "Responsive Design", "BEM", "Styled Components", "Human Interface Guidelines (HIG)"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* Server Communication */}
                <h3 className="skills-category">Server Communication</h3>
                <div className="grid small">
                    {["REST APIs", "Axios", "Fetch API", "URLSession", "Alamofire", "GraphQL (Apollo)", "WebSocket"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* State Management */}
                <h3 className="skills-category">State Management</h3>
                <div className="grid small">
                    {["Context API", "React Query", "useState", "useReducer", "SwiftUI @State", "@ObservedObject", "@EnvironmentObject", "Combine Publishers"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* Tools & Version Control */}
                <h3 className="skills-category">Tools & Version Control</h3>
                <div className="grid small">
                    {[
                        "Git & GitHub",
                        "VS Code",
                        "WebStorm",
                        "npm / yarn",
                        "Vercel",
                        "Chrome DevTools",
                        "ESLint",
                        "Prettier",
                        "Postman",
                        "React DevTools",
                        "Figma",
                        "Notion / Trello",
                        "Xcode",
                        "Swift Package Manager",
                        "TestFlight"
                    ].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>

                {/* Soft Skills */}
                <h3 className="skills-category">Soft Skills</h3>
                <div className="grid small">
                    {["Problem Solving", "Time Management", "Team Collaboration", "Attention to Detail", "Continuous Learning", "Effective Communication", "Design Thinking"].map((s) => (
                        <div key={s} className="card center">{s}</div>
                    ))}
                </div>
            </section>

            {/* CONTACT SECTION - بدون آیکون */}
            <section id="contact" className="contact">
                <h2>Get In Touch</h2>
                <p className="section-subtitle">Let's work together on your next project</p>

                <div className="icons">
                    <a className="contact-item" href="tel:09124164734">
                        <Phone size={20} />
                        <span>+98 912 416 4734</span>
                    </a>

                    <a className="contact-item" href="mailto:mohammadmohajer490@@gmail.com">
                        <Mail size={20} />
                        <span>mohammadmohajer490@gmail.com</span>
                    </a>

                    <a className="contact-item" href="https://github.com/mohammad165" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} />
                        <span>github.com/mohammad165</span>
                    </a>
                </div>

                {/* Back to top link */}
                <div className="back-to-top">
                    <a href="#home" className="internal-link">↑ Back to Top</a>
                </div>
            </section>
        </div>
    );
}