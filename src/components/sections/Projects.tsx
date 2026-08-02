"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data";

function GitHubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);

  return (
    <section id="projects" className="bg-section py-24 md:py-32">
      <div className="container-aetheris">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Portfolio Index
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Premier <span className="text-primary">Deployments</span>
            </h2>
            <p className="mt-3 max-w-xl font-sans text-sm text-muted md:text-base">
              Selected systems from{" "}
              <a
                href="https://github.com/mahingaRodin?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary transition-opacity hover:opacity-80"
              >
                github.com/mahingaRodin
              </a>
              —fintech, SaaS, computer vision, and security.
            </p>
          </div>
          <motion.a
            href="https://github.com/mahingaRodin?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-primary"
          >
            All repositories <ArrowUpRight size={14} />
          </motion.a>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          whileHover={{ y: -4 }}
          className="group mb-8 overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden bg-[#111] md:aspect-auto md:min-h-[420px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
              <Image
                src={featured.imagePath}
                alt={featured.title}
                fill
                className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                Flagship
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold md:text-3xl">
                {featured.title}
              </h3>
              <p className="mb-6 font-sans text-sm leading-relaxed text-muted md:text-base">
                {featured.description}
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {featured.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-section px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={featured.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-opacity hover:opacity-80"
                >
                  <GitHubIcon size={14} /> Source
                </motion.a>
                <motion.a
                  href={featured.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-foreground"
                >
                  Live <ArrowUpRight size={14} />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.55 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.985 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-400 hover:border-primary hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-display text-lg font-semibold">
                  {project.title}
                </h3>
                <p className="mb-5 line-clamp-3 font-sans text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-section px-2.5 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-primary"
                >
                  <GitHubIcon size={12} /> View repo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
