"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Server,
  ShieldCheck,
  Trophy,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import { projectBadge, projects } from "@/data/projects";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#exp" },
  { label: "Projects", href: "#proj" },
];

const aboutTags = [
  "Football",
  "System Design",
  "Continuous Learning",
  "Problem Solving",
  "Open Source",
];

const skillGroups = [
  {
    key: "fe",
    title: "Frontend",
    icon: Code2,
    gradient: "from-[var(--accent)] to-[var(--accent2)]",
    chip:
      "border-[rgba(127,255,110,0.20)] bg-[rgba(127,255,110,0.06)] text-[var(--accent)]",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "i18next",
      "Vue.js",
      "React Router",
      "Redux",
      "Tailwind CSS",
      "Shadcn/UI",
      "React Hook Form",
      "Recharts",
      "Lenis",
      "React-Quill-New",
    ],
  },
  {
    key: "be",
    title: "Backend",
    icon: Server,
    gradient: "from-[var(--accent2)] to-[var(--purple)]",
    chip:
      "border-[rgba(77,232,255,0.20)] bg-[rgba(77,232,255,0.06)] text-[var(--accent2)]",
    items: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Socket.io",
      "REST APIs",
      "JWT",
      "RESTful APIs",
      "Stripe",
      "PayPal API",
      "Supabase",
      "Firebase",
      "bcrypt",
      "cookie-parser",
    ],
  },
  {
    key: "tools",
    title: "Tools & Platforms",
    icon: Wrench,
    gradient: "from-[var(--purple)] to-[var(--orange)]",
    chip:
      "border-[rgba(167,139,250,0.20)] bg-[rgba(167,139,250,0.06)] text-[var(--purple)]",
    items: [
      "GitHub",
      "VS Code",
      "Postman",
      "Vercel",
      "Figma",
      "Docker",
      "Cloudinary",
      "PDF Engine",
      "Excel Export",
    ],
  },
  {
    key: "db",
    title: "Databases & ORM",
    icon: Database,
    gradient: "from-[var(--orange)] to-[#f43f5e]",
    chip:
      "border-[rgba(251,146,60,0.20)] bg-[rgba(251,146,60,0.06)] text-[var(--orange)]",
    items: ["PostgreSQL", "MongoDB (Mongoose)", "MySQL", "Prisma"],
  },
  {
    key: "concepts",
    title: "Concepts & Architecture",
    icon: ShieldCheck,
    gradient: "from-[#f43f5e] to-[var(--pink)]",
    chip:
      "border-[rgba(244,114,182,0.20)] bg-[rgba(244,114,182,0.06)] text-[var(--pink)]",
    items: [
      "Microservices",
      "RBAC Systems",
      "System Design & Architecture",
      "Problem Solving",
      "Agile / Scrum",
    ],
  },
];

const certs = [
  {
    title: "Complete Web Development Course",
    org: "Programming Hero - Dhaka, Bangladesh",
    icon: GraduationCap,
  },
  {
    title: "HackerRank Certified",
    org: "JavaScript - Node.js - Problem Solving",
    icon: Trophy,
  },
];

const profileLinks = {
  resume:
    "https://drive.usercontent.google.com/download?id=1zC925x9cgxQy0acalsRkwtbFcgcCHEB6&export=download&authuser=8&confirm=t&uuid=2164f948-9601-4fa7-b162-fd11f18b2c03&at=AGN2oQ1Wr402w71kEII_swcG0r9g:1775223457543",
  linkedin: "https://www.linkedin.com/in/mujahidul-islam-07b5a42a0/",
  github: "https://github.com/Mujahid2000",
  hackerrank: "https://www.hackerrank.com/profile/developermujahi2",
};

export default function PortfolioPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [sendState, setSendState] = useState<"idle" | "sent">("idle");

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) {
      return;
    }

    const dot = document.getElementById("cur-dot");
    const ring = document.getElementById("cur-ring");

    if (!dot || !ring) {
      return;
    }

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;

    const onMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
      dot.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
    };

    const animate = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const sendMessage = () => {
    setSendState("sent");
    window.setTimeout(() => setSendState("idle"), 3000);
  };

  const downloadResume = () => {
    window.open(profileLinks.resume, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <SmoothScroll />

      <div id="cur-dot" className="custom-cursor-dot" />
      <div id="cur-ring" className="custom-cursor-ring" />
      <div className="grid-bg" />

      <div className="relative z-10 overflow-x-clip">
        <div
          className={`fixed inset-0 z-50 items-center justify-center bg-[rgba(8,8,16,0.97)] p-10 backdrop-blur-2xl ${
            mobileOpen ? "flex" : "hidden"
          }`}
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute right-6 top-6 rounded-full border border-[var(--border)] bg-[var(--surface)] p-2 text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label="Close mobile menu"
          >
            <X size={22} />
          </button>

          <div className="flex flex-col items-center gap-8 text-center">
            <a href="#hero" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
              Home
            </a>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="mobile-nav-link"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="mobile-nav-link">
              Contact
            </a>
          </div>
        </div>

        <nav
          className={`fixed left-0 right-0 top-0 z-40 border-b border-[var(--border)] bg-[rgba(8,8,16,0.84)] backdrop-blur-xl transition-all duration-300 ${
            navScrolled ? "py-3" : "py-5"
          }`}
        >
          <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 md:px-10 lg:px-16">
            <a
              href="#hero"
              className="font-[var(--font-display)] text-xl font-extrabold tracking-[-0.5px] text-[var(--text)]"
            >
              Mujahidul<span className="text-[var(--accent)]">.</span>
            </a>

            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="hire-btn">
                  Hire Me
                </a>
              </li>
            </ul>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-md border border-[var(--border)] p-2 text-[var(--text)] md:hidden"
              aria-label="Open mobile menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>

        <section id="hero" className="relative flex min-h-screen items-center px-6 pb-20 pt-32 md:px-10 lg:px-16">
          <div className="hero-glow" />
          <div className="hero-glow2" />
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="reveal mb-5 inline-flex items-center gap-3 font-[var(--font-mono-alt)] text-[11px] tracking-[0.22em] text-[var(--accent)]">
                <span className="h-px w-6 bg-[var(--accent)]" />
                FULL STACK DEVELOPER
              </div>

              <h1 className="reveal mb-6 font-[var(--font-display)] text-[clamp(44px,5.5vw,80px)] font-extrabold leading-[0.98] tracking-[-0.03em]">
                Hi, I&apos;m
                <span className="block text-[var(--accent)]">Mujahidul</span>
              </h1>

              <p className="reveal mb-10 max-w-[560px] text-[15.5px] leading-8 text-[var(--muted)]">
                I build <span className="text-[var(--text)]">production-grade SaaS platforms</span> with Next.js,
                Node.js and TypeScript, specializing in real-time features, RBAC systems, ERP software and
                payment integrations.
              </p>

              <div className="reveal flex flex-wrap gap-3">
                <button onClick={downloadResume} className="primary-btn">
                  <Download size={15} />
                  Download Resume
                </button>
                <a href="#proj" className="outline-btn">
                  View Projects
                  <ArrowRight size={15} />
                </a>
              </div>

              <div className="reveal mt-10 flex gap-3">
                <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                  <span className="text-[12px] font-semibold">in</span>
                </a>
                <a href={profileLinks.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                  <span className="text-[12px] font-semibold">gh</span>
                </a>
                <a
                  href={profileLinks.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label="HackerRank"
                >
                  <Code2 size={16} />
                </a>
                <a href="mailto:mujahidul.developer@gmail.com" className="social-btn" aria-label="Email">
                  <Mail size={16} />
                </a>
              </div>
            </div>

            <div className="reveal relative mx-auto w-fit lg:mx-0">
              <div className="relative h-[390px] w-[310px] overflow-hidden rounded-[26px] border border-[var(--border)] max-[480px]:h-[274px] max-[480px]:w-[216px]">
                <div className="absolute inset-0 z-[1] bg-[linear-gradient(155deg,rgba(127,255,110,0.1),transparent_55%)]" />
                <Image
                  src="https://res.cloudinary.com/dkffqpque/image/upload/q_auto/f_auto/v1776067013/1768336244893-removebg-preview_1_biia5a.png"
                  alt="Mujahidul Islam"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 216px, 310px"
                  priority
                />
              </div>
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[26px] border border-[rgba(127,255,110,0.2)]" />

              <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface2)] px-4 py-3">
                <span className="h-2.5 w-2.5 animate-[pulse_2s_infinite] rounded-full bg-[var(--accent)]" />
                <div>
                  <p className="text-[13px] font-medium text-[var(--text)]">Available for Work</p>
                  <p className="mt-0.5 text-[11px] text-[var(--muted)]">Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[var(--surface)] px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1280px]">
            <SectionHeading number="01" title="Who I Am" />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="reveal text-[15px] leading-8 text-[var(--muted)]">
                <p>
                  I&apos;m <span className="text-[var(--text)]">Mujahidul Islam</span>, a Full Stack Developer based in
                  <span className="text-[var(--text)]"> Dhaka, Bangladesh</span>, specializing in production-grade SaaS
                  platforms with modern JavaScript technologies.
                </p>
                <p className="mt-4">
                  My programming journey began with self-taught curiosity and evolved into delivering real client
                  applications. I architect scalable systems end to end, from robust data models to performant UI.
                  I currently contribute to a <span className="text-[var(--text)]">remote LMS product at Alfabic</span>
                  supporting 500+ concurrent users.
                </p>
                <p className="mt-4">
                  I have delivered <span className="text-[var(--text)]">3 paid production applications</span> for real
                  clients: a warehouse SaaS, a job platform, and a dynamic RBAC system.
                </p>
                <p className="mt-4">
                  Outside coding, I enjoy football, family time, and exploring new technologies. I believe great
                  software lives where technical precision meets human empathy.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {aboutTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--border)] px-4 py-1.5 text-[12px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="reveal space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "3+", label: "Paid Production Apps" },
                    { value: "500+", label: "Concurrent Users Served" },
                    { value: "~70%", label: "Grading Effort Reduced" },
                    { value: "5+", label: "Tech Stacks Mastered" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]"
                    >
                      <p className="font-[var(--font-display)] text-4xl font-extrabold leading-none text-[var(--accent)]">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-xs text-[var(--muted)]">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
                  {[
                    ["Name", "Mujahidul Islam"],
                    ["Location", "Dhaka, Bangladesh"],
                    ["Email", "mujahidul.developer@gmail.com"],
                    ["Phone", "+8801987-064729"],
                    ["Status", "Available"],
                  ].map(([key, value], index) => (
                    <div
                      key={key}
                      className={`flex items-center justify-between py-2.5 text-[13.5px] ${
                        index < 4 ? "border-b border-[var(--border)]" : ""
                      }`}
                    >
                      <span className="text-[var(--muted)]">{key}</span>
                      <span className={key === "Status" ? "text-[var(--accent)]" : "text-[var(--text)]"}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1280px]">
            <SectionHeading number="02" title="Tech Stack" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.slice(0, 3).map((group, index) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.key}
                    className="reveal relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--bh)]"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${group.gradient}`} />
                    <div className="mb-4 flex items-center gap-2 font-[var(--font-display)] text-[15px] font-bold">
                      <Icon size={16} />
                      {group.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-md border px-3 py-1.5 font-[var(--font-mono-alt)] text-[11px] ${group.chip}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {skillGroups.slice(3).map((group, index) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.key}
                    className="reveal relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[var(--bh)]"
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${group.gradient}`} />
                    <div className="mb-4 flex items-center gap-2 font-[var(--font-display)] text-[15px] font-bold">
                      <Icon size={16} />
                      {group.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className={`rounded-md border px-3 py-1.5 font-[var(--font-mono-alt)] text-[11px] ${group.chip}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="education" className="bg-[var(--surface)] px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1280px]">
            <SectionHeading number="03" title="Academic Background" />

            <div className="reveal relative pl-9">
              <div className="absolute bottom-2 left-0 top-2 w-px bg-[linear-gradient(to_bottom,var(--accent),rgba(127,255,110,0.12))]" />

              {[
                {
                  period: "2019 - 2022",
                  degree: "Bachelor of Arts",
                  school: "National University Bangladesh",
                  desc:
                    "Completed undergraduate studies while self-teaching full stack development and contributing to real client projects by final year.",
                },
                {
                  period: "2019",
                  degree: "Higher Secondary Certificate (H.S.C)",
                  school: "Barishal Govt. B.M College",
                  desc:
                    "Completed higher secondary education with strong analytical reasoning and structured problem-solving skills.",
                },
              ].map((item) => (
                <div key={item.degree} className="relative mb-10 last:mb-0">
                  <span className="absolute -left-[42px] top-2 h-3.5 w-3.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(127,255,110,0.45)]" />
                  <p className="font-[var(--font-mono-alt)] text-[10px] tracking-[0.12em] text-[var(--accent)]">{item.period}</p>
                  <h3 className="mt-2 font-[var(--font-display)] text-[22px] font-bold">{item.degree}</h3>
                  <p className="mt-1 text-[13.5px] text-[var(--muted)]">{item.school}</p>
                  <p className="mt-3 max-w-[640px] text-[13.5px] leading-7 text-[var(--muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cert" className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1280px]">
            <SectionHeading number="04" title="Training & Certification" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {certs.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <article
                    key={cert.title}
                    className="reveal flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]"
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(127,255,110,0.22)] bg-[var(--accent-dim)] text-[var(--accent)]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{cert.title}</p>
                      <p className="mt-1 text-xs text-[var(--muted)]">{cert.org}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="exp" className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1280px]">
            <SectionHeading number="05" title="Work History" />

            <article className="reveal relative grid grid-cols-1 gap-7 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 lg:grid-cols-[210px_1fr]">
              <span className="absolute bottom-0 left-0 top-0 w-0.5 bg-[linear-gradient(to_bottom,var(--accent),transparent)] opacity-0 transition group-hover:opacity-100" />

              <div>
                <p className="font-[var(--font-mono-alt)] text-[10px] tracking-[0.12em] text-[var(--accent)]">OCT 2025 - PRESENT</p>
                <p className="mt-2 text-[14px] font-medium text-[var(--text)]">Alfabic</p>
                <p className="mt-1 text-[11.5px] text-[var(--muted)]">Dhaka, Bangladesh - Remote</p>
              </div>

              <div>
                <h3 className="font-[var(--font-display)] text-[22px] font-bold">Full Stack Developer</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Maintain a full-stack LMS with Admin, Instructor, and Student roles using Next.js, Node.js, PostgreSQL, and Prisma for 500+ concurrent users.",
                    "Engineered quiz, assessment, and auto-grading modules with real-time analytics, reducing manual grading effort by around 70%.",
                    "Maintained Stripe subscription flows and collaborated in a 5-member agile team with regular code reviews.",
                  ].map((point) => (
                    <li key={point} className="flex gap-2 text-[13.5px] leading-7 text-[var(--muted)]">
                      <ChevronRight size={18} className="mt-1 shrink-0 text-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript", "Stripe"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 font-[var(--font-mono-alt)] text-[11px] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="proj" className="bg-[var(--surface)] px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1280px]">
            <SectionHeading number="06" title="Selected Work" />

            <div className="w-full overflow-hidden rounded-[30px] border border-[var(--border)] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_55%)]">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="reveal grid w-full grid-cols-1 gap-5 border-t border-[var(--border)] px-6 py-7 first:border-t-0 md:px-8 lg:grid-cols-[110px_1fr_auto] lg:items-start lg:gap-8"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="font-[var(--font-display)] text-[76px] font-extrabold leading-none text-[rgba(255,255,255,0.14)]">
                    {project.number}
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-[var(--font-display)] text-[clamp(28px,4vw,50px)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em]">
                        {project.shortTitle.split(" - ")[0]}
                      </h3>
                      <span className="rounded-[4px] bg-[#ff6a2a] px-2 py-1 font-[var(--font-mono-alt)] text-[10px] font-medium tracking-[0.14em] text-white">
                        {projectBadge[project.id]}
                      </span>
                    </div>

                    <p className="mt-2 font-[var(--font-mono-alt)] text-[14px] text-[var(--muted)]">{project.title}</p>
                    <p className="mt-5 max-w-[920px] text-[18px] leading-9 text-[var(--muted)]">{project.shortDescription}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm border border-[var(--border)] px-2.5 py-1 font-[var(--font-mono-alt)] text-[11px] text-[var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 lg:flex-col">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center border border-[var(--border)] px-4 py-2 font-[var(--font-mono-alt)] text-[13px] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <ExternalLink size={13} className="mr-1" />
                      Live
                    </a>
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center justify-center border border-[var(--border)] px-4 py-2 font-[var(--font-mono-alt)] text-[13px] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Details
                    </Link>
                    <span className="inline-flex items-center justify-center border border-[var(--border)] px-4 py-2 font-[var(--font-mono-alt)] text-[12px] text-[var(--muted)]">
                      FE
                    </span>
                    <span className="inline-flex items-center justify-center border border-[var(--border)] px-4 py-2 font-[var(--font-mono-alt)] text-[12px] text-[var(--muted)]">
                      BE
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-24 md:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1280px]">
            <SectionHeading number="07" title="Let's Work Together" />

            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.25fr]">
              <div className="reveal">
                <h3 className="font-[var(--font-display)] text-[30px] font-bold">Got a project in mind?</h3>
                <p className="mt-4 max-w-[540px] text-[14px] leading-7 text-[var(--muted)]">
                  I&apos;m open to new SaaS opportunities, freelance projects, or full-time roles. Share your idea and
                  I will respond within 24 hours.
                </p>

                <div className="mt-8 space-y-4">
                  <ContactItem icon={Mail} label="Email" value="mujahidul.developer@gmail.com" />
                  <ContactItem icon={Phone} label="Phone" value="+8801987-064729" />
                  <ContactItem icon={MessageCircle} label="WhatsApp" value="+8801987-064729" />
                  <ContactItem icon={MapPin} label="Location" value="Dhaka, Bangladesh" />
                </div>

                <div className="mt-7 flex gap-3">
                  <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                    <span className="text-[12px] font-semibold">in</span>
                  </a>
                  <a href={profileLinks.github} target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                    <span className="text-[12px] font-semibold">gh</span>
                  </a>
                </div>
              </div>

              <div className="reveal rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-9">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <FormInput label="Your Name" type="text" placeholder="John Doe" />
                  <FormInput label="Email Address" type="email" placeholder="john@example.com" />
                </div>
                <div className="mt-4">
                  <FormInput label="Subject" type="text" placeholder="Project Inquiry" />
                </div>
                <div className="mt-4">
                  <label className="form-label">Message</label>
                  <textarea
                    placeholder="Tell me about your project or opportunity..."
                    className="form-input min-h-[110px] resize-y"
                  />
                </div>
                <button
                  onClick={sendMessage}
                  className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 font-[var(--font-display)] text-[14px] font-bold transition ${
                    sendState === "sent"
                      ? "bg-[var(--accent2)] text-[#041017]"
                      : "bg-[var(--accent)] text-[#080810] hover:-translate-y-0.5 hover:bg-[#a0ffa8]"
                  }`}
                >
                  {sendState === "sent" ? <Check size={15} /> : null}
                  {sendState === "sent" ? "Sent" : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] bg-[var(--surface)] px-6 py-8 md:px-10 lg:px-16">
          <div className="font-[var(--font-display)] text-lg font-extrabold">
            Mujahidul<span className="text-[var(--accent)]">.</span>
          </div>
          <p className="text-[13px] text-[var(--muted)]">© 2026 Mujahidul Islam. Built in Dhaka, Bangladesh.</p>
          <div className="flex gap-5 text-[12.5px]">
            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href={profileLinks.github} target="_blank" rel="noreferrer" className="footer-link">
              GitHub
            </a>
            <a href="mailto:mujahidul.developer@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <>
      <div className="reveal mb-3 flex items-center gap-3 font-[var(--font-mono-alt)] text-[10.5px] tracking-[0.28em] text-[var(--accent)]">
        <span className="h-px w-7 bg-[var(--accent)]" />
        {number} / {title.toUpperCase()}
      </div>
      <h2 className="reveal mb-11 font-[var(--font-display)] text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.1] tracking-[-0.02em]">
        {title}
      </h2>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">{label}</p>
        <p className="mt-1 text-[13.5px] text-[var(--text)]">{value}</p>
      </div>
    </div>
  );
}

function FormInput({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input type={type} placeholder={placeholder} className="form-input" />
    </div>
  );
}
