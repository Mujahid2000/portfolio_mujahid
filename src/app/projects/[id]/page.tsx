import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectById, projectBadge, projects } from "@/data/projects";
import SmoothScroll from "@/components/SmoothScroll";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.shortTitle} | Mujahidul Islam`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 pb-16 pt-28 md:px-10 lg:px-16">
      <SmoothScroll />

      <div className="mx-auto w-full max-w-[1100px]">
        <Link
          href="/#proj"
          className="inline-flex items-center gap-2 border border-[var(--border)] px-4 py-2 font-[var(--font-mono-alt)] text-[12px] text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>

        <section className="mt-6 overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)]">
          <div className="relative h-[280px] w-full md:h-[360px]">
            <Image src={project.image} alt={project.title} fill className="object-cover" sizes="1100px" priority />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,16,0.85),transparent_60%)]" />
            <span className="absolute left-5 top-5 rounded bg-[#ff6a2a] px-2 py-1 font-[var(--font-mono-alt)] text-[10px] tracking-[0.14em] text-white">
              {projectBadge[project.id]}
            </span>
          </div>

          <div className="p-6 md:p-8">
            <p className="font-[var(--font-mono-alt)] text-[12px] tracking-[0.18em] text-[var(--accent)]">PROJECT {project.number}</p>
            <h1 className="mt-2 font-[var(--font-display)] text-[clamp(30px,5vw,56px)] font-extrabold leading-[1] tracking-[-0.02em]">
              {project.shortTitle}
            </h1>
            <p className="mt-3 max-w-[920px] text-[16px] leading-8 text-[var(--muted)]">{project.description}</p>

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

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-[var(--font-display)] text-[18px] font-bold">Challenges Faced</h2>
                <ul className="mt-3 space-y-2">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex gap-2 border-b border-[var(--border)] py-2 text-[13px] text-[var(--muted)] last:border-b-0"
                    >
                      <span className="text-[var(--accent)]">-</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-[var(--font-display)] text-[18px] font-bold">Future Plans & Improvements</h2>
                <ul className="mt-3 space-y-2">
                  {project.plans.map((plan) => (
                    <li
                      key={plan}
                      className="flex gap-2 border-b border-[var(--border)] py-2 text-[13px] text-[var(--muted)] last:border-b-0"
                    >
                      <span className="text-[var(--accent)]">-</span>
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={project.live} target="_blank" rel="noreferrer" className="modal-primary-btn">
                <ExternalLink size={14} />
                Live Project
              </a>

              {project.githubPrivate ? (
                <span className="modal-muted-btn">Private Repo</span>
              ) : (
                <>
                  <a href={project.github} target="_blank" rel="noreferrer" className="modal-secondary-btn">
                    <ExternalLink size={14} />
                    {project.githubServer ? "GitHub Client" : "GitHub"}
                  </a>
                  {project.githubServer ? (
                    <a href={project.githubServer} target="_blank" rel="noreferrer" className="modal-secondary-btn">
                      <ExternalLink size={14} />
                      GitHub Server
                    </a>
                  ) : null}
                </>
              )}

              {project.passwordLink ? (
                <a href={project.passwordLink} target="_blank" rel="noreferrer" className="modal-secondary-btn">
                  <ExternalLink size={14} />
                  Password Doc
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
