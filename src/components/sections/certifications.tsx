"use client";

import Link from "next/link";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "../ui/animated-modal";
import SmoothScroll from "../smooth-scroll";
import { cn } from "@/lib/utils";
import { type IconType } from "react-icons";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiPrisma,
  SiReact,
  SiReactrouter,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueYear: string;
  description: string;
  gradient: string;
  accentColor: string;
  credentialUrl?: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    id: "cloud-innovator",
    title: "Cloud Innovator Challenge",
    issuer: "SkyNet Labs",
    issueYear: "2024",
    description:
      "Recognized for designing a scalable multi-cloud deployment strategy using IaC, observability, and automated cost optimization pipelines.",
    gradient:
      "linear-gradient(135deg, rgba(79,70,229,0.9) 0%, rgba(30,64,175,0.9) 55%, rgba(9,9,55,0.95) 100%)",
    accentColor: "#818cf8",
    credentialUrl: "https://example.com/cert/cloud-innovator",
  },
  {
    id: "ml-specialist",
    title: "Machine Learning Specialist",
    issuer: "FutureAI Academy",
    issueYear: "2023",
    description:
      "Completed an advanced program covering model deployment, MLOps workflows, and ethical AI practices for real-time analytics applications.",
    gradient:
      "linear-gradient(135deg, rgba(244,114,182,0.95) 0%, rgba(236,72,153,0.9) 45%, rgba(88,28,135,0.9) 100%)",
    accentColor: "#f0abfc",
    credentialUrl: "https://example.com/cert/ml-specialist",
  },
  {
    id: "devsecops-pro",
    title: "DevSecOps Professional",
    issuer: "SecureCloud Institute",
    issueYear: "2024",
    description:
      "Built automated security gates for CI/CD pipelines, including container scanning, secrets management, and policy-as-code enforcement.",
    gradient:
      "linear-gradient(135deg, rgba(34,197,94,0.95) 0%, rgba(22,163,74,0.9) 55%, rgba(15,118,110,0.9) 100%)",
    accentColor: "#86efac",
    credentialUrl: "https://example.com/cert/devsecops-pro",
  },
];

const MARQUEE_ITEMS: {
  id: string;
  label: string;
  accentColor: string;
  icon: IconType;
}[] = [
  {
    id: "marquee-react",
    label: "React",
    accentColor: "#61dafb",
    icon: SiReact,
  },
  {
    id: "marquee-tailwind",
    label: "Tailwind CSS",
    accentColor: "#38bdf8",
    icon: SiTailwindcss,
  },
  {
    id: "marquee-typescript",
    label: "TypeScript",
    accentColor: "#3178c6",
    icon: SiTypescript,
  },
  {
    id: "marquee-vite",
    label: "Vite",
    accentColor: "#646cff",
    icon: SiVite,
  },
  {
    id: "marquee-javascript",
    label: "JavaScript",
    accentColor: "#f7df1e",
    icon: SiJavascript,
  },
  {
    id: "marquee-react-router",
    label: "React Router",
    accentColor: "#f44250",
    icon: SiReactrouter,
  },
  {
    id: "marquee-html",
    label: "HTML5",
    accentColor: "#e34f26",
    icon: SiHtml5,
  },
  {
    id: "marquee-css",
    label: "CSS3",
    accentColor: "#1572b6",
    icon: SiCss3,
  },
  {
    id: "marquee-node",
    label: "Node.js",
    accentColor: "#68a063",
    icon: SiNodedotjs,
  },
  {
    id: "marquee-express",
    label: "Express.js",
    accentColor: "#2c2c2c",
    icon: SiExpress,
  },
  {
    id: "marquee-prisma",
    label: "Prisma",
    accentColor: "#0c344b",
    icon: SiPrisma,
  },
  {
    id: "marquee-sequelize",
    label: "Sequelize",
    accentColor: "#3a76f0",
    icon: SiSequelize,
  },
  {
    id: "marquee-mysql",
    label: "MySQL",
    accentColor: "#00618a",
    icon: SiMysql,
  },
  {
    id: "marquee-jwt",
    label: "JWT Auth",
    accentColor: "#8723d4",
    icon: SiJsonwebtokens,
  },
  {
    id: "marquee-npm",
    label: "npm Scripts",
    accentColor: "#cb3837",
    icon: SiNpm,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative mx-auto max-w-7xl py-24">
      <Link href={"#certifications"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          Certifications
        </h2>
      </Link>
      <p className="mx-auto mt-6 max-w-3xl text-center text-base text-neutral-700 dark:text-neutral-300">
        Professional milestones that highlight ongoing learning and hands-on expertise. Select a card to explore the credential.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
        {CERTIFICATIONS.map((certification) => (
          <CertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
      <div className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/70 py-6 shadow-[0_10px_35px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl dark:border-white/5 dark:bg-black/70">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-black dark:via-black/60" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-black dark:via-black/60" />
        <MarqueeRow items={MARQUEE_ITEMS} />
      </div>
    </section>
  );
};

const MarqueeRow = ({ items }: { items: typeof MARQUEE_ITEMS }) => {
  return (
    <div className="relative flex gap-8">
      <div
        className="marquee-track flex items-center gap-10 px-8"
        style={{ animationDuration: "28s" }}
      >
        {items.map((item) => (
          <MarqueePill key={item.id} item={item} />
        ))}
      </div>
      <div
        className="marquee-track flex items-center gap-10 px-8"
        style={{ animationDuration: "28s", animationDelay: "-14s" }}
        aria-hidden
      >
        {items.map((item) => (
          <MarqueePill key={`${item.id}-duplicate`} item={item} />
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          width: max-content;
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </div>
  );
};

const MarqueePill = ({
  item,
}: {
  item: {
    id: string;
    label: string;
    accentColor: string;
    icon: IconType;
  };
}) => {
  const Icon = item.icon;
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-white/30 bg-white/60 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-800 backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/10 dark:text-neutral-200">
      <span className="text-2xl" style={{ color: item.accentColor }}>
        <Icon aria-hidden />
      </span>
      <span className="tracking-[0.18em]">{item.label}</span>
    </div>
  );
};

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
    <div className="flex items-stretch justify-center">
      <Modal>
        <ModalTrigger className="group/cert-card h-full w-full max-w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/75 px-0 py-0 text-left shadow-[0_10px_35px_-15px_rgba(0,0,0,0.45)] backdrop-blur-md transition-transform duration-300 ease-out hover:-translate-y-2 hover:bg-white/85 dark:border-white/5 dark:bg-black/60 dark:hover:bg-black/75">
          <div className="relative flex h-full flex-col">
            <div
              className="relative h-48 w-full overflow-hidden"
              style={{ backgroundImage: certification.gradient }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_55%)]"></div>
              <div className="absolute inset-0 bg-black/15 mix-blend-soft-light dark:bg-black/40"></div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
                {certification.issueYear}
              </p>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {certification.title}
              </h3>
              <p
                className="text-sm font-medium"
                style={{ color: certification.accentColor }}
              >
                {certification.issuer}
              </p>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-3xl">
          <SmoothScroll isInsideModal>
            <ModalContent className="gap-6 p-6 md:p-10">
              <div
                className="relative h-56 w-full overflow-hidden rounded-2xl border border-white/10"
                style={{ backgroundImage: certification.gradient }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),transparent_65%)] mix-blend-screen"></div>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="flex flex-col gap-3 text-neutral-700 dark:text-neutral-300">
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                  {certification.title}
                </h3>
                <p
                  className="text-sm font-semibold uppercase tracking-[0.35em]"
                  style={{ color: certification.accentColor }}
                >
                  Issued {certification.issueYear}
                </p>
                <p className="text-base font-medium" style={{ color: certification.accentColor }}>
                  {certification.issuer}
                </p>
                <p className="text-base leading-relaxed">
                  {certification.description}
                </p>
              </div>
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="flex justify-between gap-4 border-t border-white/10 bg-white/90 dark:border-white/5 dark:bg-black/70">
            <ModalCloseButton className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800">
              Close
            </ModalCloseButton>
            {certification.credentialUrl && (
              <Link href={certification.credentialUrl} target="_blank" className="w-full">
                <button className="w-full rounded-lg border border-transparent bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                  View Credential
                </button>
              </Link>
            )}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

const ModalCloseButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { setOpen } = useModal();
  return (
    <button type="button" onClick={() => setOpen(false)} className={className}>
      {children}
    </button>
  );
};

export default CertificationsSection;