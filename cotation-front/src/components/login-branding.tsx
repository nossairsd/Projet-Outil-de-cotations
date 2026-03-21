import Image from "next/image"
import { FileText, Shield, BarChart3, Zap } from "lucide-react"

const stats = [
  { value: "2.4K+", label: "Devis traites" },
  { value: "99.9%", label: "Disponibilite" },
  { value: "150+", label: "Entreprises" },
]

const features = [
  {
    icon: FileText,
    title: "Gestion intelligente",
    description: "Creez et suivez vos quotations avec des workflows automatises.",
  },
  {
    icon: Shield,
    title: "Securite enterprise",
    description: "Chiffrement de bout en bout et conformite aux normes internationales.",
  },
  {
    icon: BarChart3,
    title: "Analyses en temps reel",
    description: "Tableaux de bord avances pour des decisions eclairees.",
  },
  {
    icon: Zap,
    title: "Performance optimale",
    description: "Infrastructure rapide et fiable pour votre equipe.",
  },
]

export function LoginBranding() {
  return (
    <div className="hidden lg:flex lg:w-[55%] relative flex-col justify-between overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A1628 0%, #0F1D32 50%, #0A1628 100%)" }}
    >
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="size-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dots)" />
        </svg>
      </div>

      {/* Glowing orb top-right */}
      <div
        className="absolute -top-32 -right-32 size-96 rounded-full opacity-[0.08] blur-[100px]"
        style={{ background: "radial-gradient(circle, #38BDF8, transparent 70%)" }}
      />

      {/* Glowing orb bottom-left */}
      <div
        className="absolute -bottom-48 -left-48 size-[500px] rounded-full opacity-[0.06] blur-[120px]"
        style={{ background: "radial-gradient(circle, #38BDF8, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-10 xl:p-14">
        {/* Top: Logo */}
        <div>
          <div className="flex items-center gap-3.5">
            <div className="flex size-11 items-center justify-center rounded-xl overflow-hidden ring-1 ring-white/10">
              <Image
                src="/images/logo.jpg"
                alt="Quotation Manager Logo"
                width={44}
                height={44}
                priority
                className="size-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-[17px] font-semibold tracking-tight" style={{ color: "#F1F5F9" }}>
                Quotation Manager
              </h1>
              <p className="text-[11px] font-medium tracking-wide uppercase" style={{ color: "#64748B" }}>
                Enterprise Platform
              </p>
            </div>
          </div>
        </div>

        {/* Middle: Hero Copy + Features */}
        <div className="flex flex-col gap-10">
          {/* Hero text */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-8" style={{ background: "#38BDF8" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#38BDF8" }}>
                Plateforme de gestion
              </span>
            </div>
            <h2
              className="text-[28px] xl:text-[34px] font-semibold leading-[1.2] tracking-tight text-balance"
              style={{ color: "#F8FAFC" }}
            >
              {"Gerez vos quotations avec precision et efficacite"}
            </h2>
            <p className="text-sm xl:text-[15px] leading-relaxed max-w-md" style={{ color: "#94A3B8" }}>
              Une plateforme unifiee pour creer, suivre et optimiser tous vos devis professionnels en un seul endroit.
            </p>
          </div>

          {/* Stats bar */}
          <div className="flex items-center gap-8 xl:gap-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="text-xl xl:text-2xl font-bold tracking-tight" style={{ color: "#F8FAFC" }}>
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium tracking-wide uppercase" style={{ color: "#64748B" }}>
                  {stat.label}
                </span>
                {i < stats.length - 1 && (
                  <span className="sr-only">, </span>
                )}
              </div>
            ))}
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded-xl p-4 xl:p-5 transition-colors"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="flex size-9 items-center justify-center rounded-lg"
                  style={{ background: "rgba(56,189,248,0.1)" }}
                >
                  <feature.icon className="size-[18px]" style={{ color: "#38BDF8" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[13px] font-semibold" style={{ color: "#E2E8F0" }}>
                    {feature.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed" style={{ color: "#64748B" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Copyright + Version */}
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-medium" style={{ color: "#475569" }}>
            {"© 2026 Quotation Manager. Tous droits reserves."}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded" style={{ color: "#64748B", background: "rgba(255,255,255,0.05)" }}>
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
