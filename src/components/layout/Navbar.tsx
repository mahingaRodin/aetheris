"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "fixed top-0 z-50 w-full border-b transition-all duration-500",
          scrolled
            ? "luxury-blur border-border/60 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="container-aetheris flex items-center justify-between py-3 md:py-4">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3"
          >
            <BrandLogo size={36} animated />
            <span className="font-display text-xl font-bold tracking-tighter text-gold-gradient md:text-2xl">
              {siteConfig.brand}
            </span>
          </motion.a>

          <div className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  "relative font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-300",
                  active === link.href
                    ? "text-primary"
                    : "text-muted hover:text-primary",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    active === link.href ? "w-full" : "w-0",
                  )}
                />
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:block">
            <MagneticButton
              href="#contact"
              className="min-w-0 px-6 py-2.5 text-[11px]"
            >
              Initiate Handshake
            </MagneticButton>
          </div>

          <motion.button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-primary xl:hidden"
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <Menu size={28} strokeWidth={1.5} />
            )}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-background/98 backdrop-blur-xl xl:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4">
              <div className="flex items-center gap-3">
                <BrandLogo size={32} />
                <span className="font-display text-xl font-bold tracking-tighter text-gold-gradient">
                  {siteConfig.brand}
                </span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                className="text-primary"
                onClick={() => setOpen(false)}
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.07 * i + 0.12 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="mt-4"
              >
                <MagneticButton href="#contact" onClick={() => setOpen(false)}>
                  Initiate Handshake
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
