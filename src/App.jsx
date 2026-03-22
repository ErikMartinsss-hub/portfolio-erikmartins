import { useState, useEffect, useRef } from "react";

const data = {
  name: "Érik Martins",
  role: "Desenvolvedor Full Stack",
  email: "erik.martinsss@outlook.com",
  phone: "(11) 98602-2554",
  location: "Suzano - SP",
  summary:
    "Desenvolvedor de Software com experiência prática em projetos Full Stack, atuando desde 2024 como freelancer no desenvolvimento de soluções sob demanda. Sólida base em lógica de programação, back-end, desenvolvimento mobile (React Native), APIs REST, modelagem de bancos de dados SQL e automação com Python. Perfil proativo, orientado a boas práticas, código limpo e aprendizado contínuo.",
  skills: [
    { category: "Linguagens", items: ["JavaScript (ES6+)", "Python", "PHP"] },
    { category: "Frameworks & Libs", items: ["Node.js", "React Native", "Bootstrap"] },
    { category: "Banco de Dados", items: ["SQL", "Modelagem", "Administração"] },
    { category: "Ferramentas", items: ["Git", "GitHub", "Excel", "Power BI"] },
  ],
  experience: [
    {
      title: "Desenvolvedor de Software Freelancer",
      company: "Workana",
      period: "03/2024 – Presente",
      description:
        "Desenvolvimento de aplicações Full Stack sob demanda, atuando desde o levantamento de requisitos até a entrega final. Definição de arquitetura, implementação de APIs REST, testes e deploy de aplicações web e mobile.",
      tags: ["React Native", "Node.js", "JavaScript", "PHP", "Python"],
    },
    {
      title: "Promotor de Vendas",
      company: "Flaps Produtos Automotivos Ltda",
      period: "03/2024 – Presente",
      description:
        "Atuação em promoção de vendas e atendimento ao cliente. Desenvolvimento de habilidades de comunicação, negociação e foco em resultados.",
      tags: ["Comunicação", "Negociação", "Resultados"],
    },
  ],
  education: [
    {
      degree: "Graduação em Análise e Desenvolvimento de Sistemas",
      institution: "Centro Universitário Estácio de Sá",
      period: "Previsão: 06/2026",
      status: "Em andamento",
    },
  ],
  projects: [
    {
      name: "Anime Go",
      description:
        "Aplicativo mobile para consumo de catálogos de animes, com foco em experiência do usuário (UX). Implementação de navegação com React Navigation e integração com APIs REST via Axios.",
      tech: ["React Native", "JavaScript", "API REST", "React Navigation", "Axios"],
      period: "06/2025",
      icon: "📱",
      link: null,
      images: [
        { src: "/assets/animego-01.jpg", caption: "Tela inicial — listagem de animes em destaque" },
        { src: "/assets/animego-02.jpg", caption: "Tela de detalhes — sinopse e informações do anime" },
        { src: "/assets/animego-03.jpg", caption: "Navegação — menu e categorias" },
      ],
    },
    {
      name: "Best Car Agency",
      description:
        "Landing page para agência de veículos com design moderno e responsivo. Interface focada em experiência do usuário, apresentação de catálogo de carros e geração de leads para a agência.",
      tech: ["JavaScript", "HTML", "CSS", "Vercel"],
      period: "2025",
      icon: "🚗",
      link: "https://erikmartins-bestcar.vercel.app/",
      images: [
        { src: "/assets/bestcar.jpg", caption: "Hero section — apresentação principal da agência" },
        { src: "/assets/bestcar2.jpg", caption: "Catálogo — listagem de veículos disponíveis com a opção de cores disponíveis" },
        { src: "/assets/bestcar-03.jpg", caption: "Formulário de contato e rodapé" },
      ],
    },
    {
      name: "BitSoul Launcher",
      description:
        "Launcher desktop para organização de biblioteca de jogos da Steam, inspirado na interface do Xbox. Exibe arte e descrição dinâmica por jogo selecionado, com navegação fluida por carrossel de capas. Construído com C# e .NET.",
      tech: ["C#", ".NET", "Desktop", "Steam API"],
      period: "2025",
      icon: "🎮",
      link: null,
      featured: true,
      images: [
        { src: "/assets/lauch3.jpg", caption: "Tela principal — biblioteca com fundo dinâmico do jogo selecionado" },
        { src: "/assets/bitsoul-02.jpg", caption: "Carrossel de capas — navegação pela coleção de jogos" },
        { src: "/assets/bitsoul-03.jpg", caption: "Detalhes do jogo — informações e ação de iniciar" },
      ],
    },
  ],
  certifications: [
    { name: "Desenvolvimento Mobile - React Native", issuer: "IFRS" },
    { name: "Banco de Dados e Power BI", issuer: "Fundação Bradesco" },
    { name: "Git", issuer: "DIO" },
    { name: "Node.js APIs", issuer: "IFRS" },
    { name: "PHP", issuer: "DIO" },
    { name: "Python", issuer: "Estácio" },
    { name: "JavaScript e Lógica de Programação", issuer: "DIO" },
  ],
  softSkills: ["Proatividade", "Aprendizado contínuo", "Organização", "Foco em resultados", "Boa comunicação"],
};

const sections = ["inicio", "sobre", "habilidades", "experiencia", "projetos", "contato"];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const techColors = {
  "React Native": "#61DAFB",
  "Node.js": "#68A063",
  JavaScript: "#F7DF1E",
  "JavaScript (ES6+)": "#F7DF1E",
  PHP: "#8892BF",
  Python: "#3776AB",
  SQL: "#E38C00",
  "API REST": "#FF6B6B",
  "React Navigation": "#6B4FBB",
  Axios: "#671DDF",
  "Bootstrap": "#7952B3",
  "C#": "#9B59B6",
  ".NET": "#512BD4",
  "Desktop": "#7F8C8D",
  "Steam API": "#1B2838",
  Git: "#F05032",
  GitHub: "#333",
  "Power BI": "#F2C811",
  Excel: "#217346",
};

function Tag({ label }) {
  const color = techColors[label] || "#888";
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
        background: color + "22",
        color: color,
        border: `1px solid ${color}44`,
        marginRight: 6,
        marginBottom: 6,
        letterSpacing: 0.3,
      }}
    >
      {label}
    </span>
  );
}

// ─── Header ───────────────────────────────────────────────
function Header({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(100,200,255,0.08)" : "none",
        transition: "all 0.35s ease",
        padding: "0 5%",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div
          style={{ fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: 18, color: "#64C8FF", cursor: "pointer" }}
          onClick={() => nav("inicio")}
        >
          {"<ÉM />"}
        </div>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: 8 }}>
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => nav(s)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 14px",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: active === s ? 600 : 400,
                color: active === s ? "#64C8FF" : "rgba(255,255,255,0.6)",
                textTransform: "capitalize",
                transition: "all 0.2s",
                letterSpacing: 0.4,
              }}
              onMouseEnter={(e) => { if (active !== s) e.target.style.color = "rgba(255,255,255,0.9)"; }}
              onMouseLeave={(e) => { if (active !== s) e.target.style.color = "rgba(255,255,255,0.6)"; }}
            >
              {s === "inicio" ? "Início" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────
function HeroSection() {
  const [typed, setTyped] = useState("");
  const roles = ["Full Stack Developer", "React Native Dev", "API Builder", "Freelancer"];
  const roleIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = roles[roleIdx.current];
      if (!deleting.current) {
        setTyped(current.slice(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === current.length) {
          deleting.current = true;
          setTimeout(() => {}, 1200);
        }
      } else {
        setTyped(current.slice(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current = (roleIdx.current + 1) % roles.length;
        }
      }
    }, deleting.current ? 55 : 90);
    return () => clearTimeout(timer);
  }, [typed]);

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 5% 40px",
      }}
    >
      {/* Animated background blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "15%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,200,255,0.07) 0%, transparent 70%)", animation: "blob1 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "8%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(120,100,255,0.07) 0%, transparent 70%)", animation: "blob2 10s ease-in-out infinite 2s" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", width: 600, height: 2, background: "linear-gradient(90deg, transparent, rgba(100,200,255,0.06), transparent)", transform: "translateY(-50%)" }} />
        {/* Grid lines */}
        <svg width="100%" height="100%" style={{ opacity: 0.03, position: "absolute", inset: 0 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M60 0L0 0 0 60" fill="none" stroke="#64C8FF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 20,
            border: "1px solid rgba(100,200,255,0.3)",
            background: "rgba(100,200,255,0.06)",
            fontSize: 12,
            color: "#64C8FF",
            marginBottom: 28,
            letterSpacing: 1,
            textTransform: "uppercase",
            animation: "fadeUp 0.8s ease 0.2s both",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#64C8FF", display: "inline-block", animation: "pulse 2s infinite" }} />
          Disponível para projetos
        </div>

        <h1
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "clamp(42px, 8vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 16px",
            animation: "fadeUp 0.8s ease 0.4s both",
          }}
        >
          <span style={{ color: "#fff" }}>Érik </span>
          <span style={{ color: "#64C8FF" }}>Martins</span>
        </h1>

        <div
          style={{
            fontSize: "clamp(18px, 3vw, 26px)",
            color: "rgba(255,255,255,0.55)",
            marginBottom: 32,
            fontFamily: "'Courier New', monospace",
            animation: "fadeUp 0.8s ease 0.6s both",
            minHeight: 40,
          }}
        >
          <span style={{ color: "#A8FF78" }}>{typed}</span>
          <span style={{ color: "#64C8FF", animation: "blink 1s infinite" }}>|</span>
        </div>

        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 520,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            animation: "fadeUp 0.8s ease 0.8s both",
          }}
        >
          Construindo soluções digitais sob medida — do back-end às interfaces mobile.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.8s ease 1s both" }}>
          <button
            onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "13px 28px",
              borderRadius: 8,
              background: "#64C8FF",
              color: "#080810",
              border: "none",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: 0.5,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(100,200,255,0.35)"; }}
            onMouseLeave={(e) => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}
          >
            Ver projetos
          </button>
          <button
            onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              padding: "13px 28px",
              borderRadius: 8,
              background: "transparent",
              color: "#64C8FF",
              border: "1px solid rgba(100,200,255,0.4)",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              letterSpacing: 0.5,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(100,200,255,0.08)"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; }}
          >
            Entrar em contato
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 60, animation: "fadeUp 0.8s ease 1.2s both" }}>
          <div style={{ width: 24, height: 36, border: "1.5px solid rgba(255,255,255,0.2)", borderRadius: 12, margin: "0 auto", position: "relative" }}>
            <div style={{ width: 3, height: 8, background: "#64C8FF", borderRadius: 2, position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", animation: "scrollDown 1.8s ease-in-out infinite" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="sobre" style={{ padding: "100px 5%", maxWidth: 1100, margin: "0 auto" }}>
      <FadeIn>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 48 }}>
          <span style={{ color: "#64C8FF", fontFamily: "monospace", fontSize: 22, marginTop: 2 }}>01.</span>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0, color: "#fff" }}>Sobre mim</h2>
            <div style={{ width: 48, height: 2, background: "#64C8FF", marginTop: 8 }} />
          </div>
        </div>
      </FadeIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <FadeIn delay={0.1}>
          <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.85, margin: "0 0 20px" }}>
            {data.summary}
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: 0 }}>
            Graduando em <strong style={{ color: "#64C8FF" }}>Análise e Desenvolvimento de Sistemas</strong> na Estácio de Sá, com previsão de conclusão em 2026.
          </p>
          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {data.softSkills.map((s) => (
              <span
                key={s}
                style={{
                  padding: "5px 14px",
                  borderRadius: 20,
                  fontSize: 12,
                  background: "rgba(100,200,255,0.08)",
                  color: "#64C8FF",
                  border: "1px solid rgba(100,200,255,0.2)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { num: "2024", label: "Início como freelancer" },
              { num: "7+", label: "Certificações técnicas" },
              { num: "Full Stack", label: "Atuação completa" },
              { num: "Mobile+Web", label: "Plataformas" },
            ].map(({ num, label }) => (
              <div
                key={label}
                style={{
                  padding: "24px 20px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(100,200,255,0.1)",
                  textAlign: "center",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(100,200,255,0.3)"; e.currentTarget.style.background = "rgba(100,200,255,0.05)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(100,200,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div style={{ fontSize: 26, fontWeight: 700, color: "#64C8FF", fontFamily: "monospace" }}>{num}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 4, lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Skills ──────────────────────────────────────────────
function SkillsSection() {
  return (
    <section id="habilidades" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.01)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 48 }}>
            <span style={{ color: "#64C8FF", fontFamily: "monospace", fontSize: 22, marginTop: 2 }}>02.</span>
            <div>
              <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0, color: "#fff" }}>Habilidades</h2>
              <div style={{ width: 48, height: 2, background: "#64C8FF", marginTop: 8 }} />
            </div>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {data.skills.map(({ category, items }, i) => (
            <FadeIn key={category} delay={i * 0.1}>
              <div
                style={{
                  padding: "28px 24px",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(100,200,255,0.1)",
                  height: "100%",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(100,200,255,0.3)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(100,200,255,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "rgba(100,200,255,0.1)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <h3 style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 1.5, color: "#64C8FF", margin: "0 0 18px", fontWeight: 600 }}>
                  {category}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {items.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn delay={0.3}>
          <div style={{ marginTop: 48 }}>
            <h3 style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 20, fontWeight: 500 }}>
              Certificações
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {data.certifications.map(({ name, issuer }) => (
                <div
                  key={name}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.65)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(100,200,255,0.25)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                >
                  <span style={{ color: "#64C8FF", fontSize: 11, fontWeight: 600, marginRight: 6 }}>{issuer}</span>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Experience ──────────────────────────────────────────
function ExperienceSection() {
  return (
    <section id="experiencia" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 48 }}>
            <span style={{ color: "#64C8FF", fontFamily: "monospace", fontSize: 22, marginTop: 2 }}>03.</span>
            <div>
              <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0, color: "#fff" }}>Experiência</h2>
              <div style={{ width: 48, height: 2, background: "#64C8FF", marginTop: 8 }} />
            </div>
          </div>
        </FadeIn>

        <div style={{ position: "relative", paddingLeft: 32 }}>
          {/* Timeline line */}
          <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: "linear-gradient(to bottom, #64C8FF, rgba(100,200,255,0.1))" }} />

          {data.experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div style={{ position: "relative", marginBottom: 40 }}>
                {/* Dot */}
                <div style={{ position: "absolute", left: -28, top: 6, width: 12, height: 12, borderRadius: "50%", background: "#64C8FF", border: "2px solid #080810", boxShadow: "0 0 8px rgba(100,200,255,0.6)" }} />
                <div
                  style={{
                    padding: "28px 28px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(100,200,255,0.1)",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(100,200,255,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(100,200,255,0.1)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>{exp.title}</h3>
                      <div style={{ fontSize: 14, color: "#64C8FF", fontWeight: 500 }}>{exp.company}</div>
                    </div>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", padding: "4px 10px", borderRadius: 4, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", whiteSpace: "nowrap" }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, margin: "0 0 16px" }}>{exp.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {exp.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Education */}
          {data.education.map((edu, i) => (
            <FadeIn key={i} delay={0.3}>
              <div style={{ position: "relative", marginBottom: 40 }}>
                <div style={{ position: "absolute", left: -28, top: 6, width: 12, height: 12, borderRadius: "50%", background: "#A8FF78", border: "2px solid #080810", boxShadow: "0 0 8px rgba(168,255,120,0.5)" }} />
                <div
                  style={{
                    padding: "28px 28px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(168,255,120,0.15)",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(168,255,120,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(168,255,120,0.15)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.2, color: "#A8FF78", marginBottom: 6, fontWeight: 600 }}>Educação</div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>{edu.degree}</h3>
                      <div style={{ fontSize: 14, color: "#A8FF78", fontWeight: 500 }}>{edu.institution}</div>
                    </div>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", padding: "4px 10px", borderRadius: 4, background: "rgba(168,255,120,0.05)", border: "1px solid rgba(168,255,120,0.1)", whiteSpace: "nowrap" }}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Project Modal ───────────────────────────────────────
function ImageSlot({ src, alt, style = {} }) {
  const [status, setStatus] = useState("loading"); // loading | ok | error

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", ...style }}>
      {status !== "error" && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setStatus("ok")}
          onError={() => setStatus("error")}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            opacity: status === "ok" ? 1 : 0, transition: "opacity 0.3s",
          }}
        />
      )}
      {status === "loading" && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "rgba(255,255,255,0.03)",
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.08)",
            borderTopColor: "rgba(100,200,255,0.5)",
            animation: "spin 0.8s linear infinite",
          }} />
        </div>
      )}
      {status === "error" && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
          background: "rgba(255,255,255,0.02)",
        }}>
          <div style={{ fontSize: 32, opacity: 0.18 }}>🖼</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", textAlign: "center", lineHeight: 1.5 }}>
            Imagem não encontrada<br />
            <code style={{ fontSize: 10, color: "rgba(255,255,255,0.12)" }}>{src.split("/").pop()}</code>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const images = project.images || [];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { if (zoomed) setZoomed(false); else onClose(); }
      if (e.key === "ArrowRight" && images.length > 1) setActiveImg((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft"  && images.length > 1) setActiveImg((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [zoomed, images.length, onClose]);

  const accentColor = project.featured ? "#9B59B6" : "#64C8FF";
  const accentAlpha = project.featured ? "rgba(155,89,182," : "rgba(100,200,255,";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(4,4,10,0.88)",
        backdropFilter: "blur(14px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px 16px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 880,
          background: "#0d0d1b",
          border: `1px solid ${accentAlpha}0.22)`,
          borderRadius: 22,
          overflow: "hidden",
          maxHeight: "92vh",
          overflowY: "auto",
          animation: "slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px ${accentAlpha}0.08)`,
        }}
      >
        {/* ── Header ── */}
        <div style={{
          padding: "22px 26px 18px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          position: "sticky", top: 0, zIndex: 10, background: "#0d0d1b",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 11,
              background: `${accentAlpha}0.12)`,
              border: `1px solid ${accentAlpha}0.2)`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
            }}>
              {project.icon}
            </div>
            <div>
              <h2 style={{ fontSize: 19, fontWeight: 700, color: "#fff", margin: 0 }}>{project.name}</h2>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 2, fontFamily: "monospace" }}>
                {project.period} · {images.length} imagem{images.length !== 1 ? "ns" : ""}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 9, width: 36, height: 36, cursor: "pointer",
              color: "rgba(255,255,255,0.45)", fontSize: 16,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", flexShrink: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.45)"; }}
          >✕</button>
        </div>

        {/* ── Gallery ── */}
        <div style={{ padding: "22px 26px 0" }}>

          {/* Main image */}
          <div
            onClick={() => setZoomed(true)}
            style={{
              borderRadius: 13, overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.07)",
              cursor: "zoom-in", position: "relative",
              background: "#080812",
              height: 380,
              marginBottom: 10,
            }}
          >
            <ImageSlot
              src={images[activeImg]?.src}
              alt={images[activeImg]?.caption || project.name}
              style={{ height: 380 }}
            />

            {/* Arrows */}
            {images.length > 1 && (
              <>
                {[
                  { dir: "left",  label: "←", pos: { left: 12 },  next: (p) => (p - 1 + images.length) % images.length },
                  { dir: "right", label: "→", pos: { right: 12 }, next: (p) => (p + 1) % images.length },
                ].map(({ dir, label, pos, next }) => (
                  <button
                    key={dir}
                    onClick={(e) => { e.stopPropagation(); setActiveImg(next); }}
                    style={{
                      position: "absolute", top: "50%", transform: "translateY(-50%)", ...pos,
                      background: "rgba(8,8,18,0.72)", border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: 9, width: 38, height: 38, cursor: "pointer",
                      color: "#fff", fontSize: 16,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.18s", backdropFilter: "blur(6px)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(8,8,18,0.92)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(8,8,18,0.72)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)"; }}
                  >{label}</button>
                ))}
              </>
            )}

            {/* Counter */}
            <div style={{
              position: "absolute", bottom: 12, right: 12,
              background: "rgba(0,0,0,0.62)", borderRadius: 6, padding: "4px 10px",
              fontSize: 11, color: "rgba(255,255,255,0.65)", fontFamily: "monospace",
              backdropFilter: "blur(4px)",
            }}>
              {activeImg + 1} / {images.length}
            </div>

            {/* Zoom hint */}
            <div style={{
              position: "absolute", bottom: 12, left: 12,
              background: "rgba(0,0,0,0.52)", borderRadius: 6, padding: "4px 10px",
              fontSize: 11, color: "rgba(255,255,255,0.4)", backdropFilter: "blur(4px)",
            }}>
              🔍 ampliar
            </div>

            {/* Caption overlay */}
            {images[activeImg]?.caption && (
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "40px 16px 44px",
                background: "linear-gradient(transparent, rgba(0,0,0,0.75))",
                fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.4,
                pointerEvents: "none",
              }}>
                {images[activeImg].caption}
              </div>
            )}
          </div>

          {/* Thumbnails */}
          <div style={{ display: "flex", gap: 8, marginBottom: 22 }}>
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  flex: 1, height: 60, borderRadius: 9, overflow: "hidden",
                  border: `2px solid ${i === activeImg ? accentColor : "rgba(255,255,255,0.08)"}`,
                  cursor: "pointer", transition: "all 0.2s",
                  opacity: i === activeImg ? 1 : 0.5,
                  background: "#080812",
                  position: "relative",
                }}
                onMouseEnter={(e) => { if (i !== activeImg) { e.currentTarget.style.opacity = "0.82"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; } }}
                onMouseLeave={(e) => { if (i !== activeImg) { e.currentTarget.style.opacity = "0.5"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; } }}
              >
                <ImageSlot src={img.src} alt={img.caption || ""} style={{ height: 60 }} />
                {/* Thumb number */}
                <div style={{
                  position: "absolute", bottom: 3, right: 4,
                  fontSize: 9, fontFamily: "monospace",
                  color: i === activeImg ? accentColor : "rgba(255,255,255,0.3)",
                  fontWeight: 600,
                }}>
                  {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Details ── */}
        <div style={{ padding: "0 26px 26px" }}>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 20 }} />
          <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.82, margin: "0 0 18px" }}>
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: project.link ? 18 : 0 }}>
            {project.tech.map((t) => <Tag key={t} label={t} />)}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "10px 20px", borderRadius: 9,
                background: `${accentAlpha}0.1)`,
                border: `1px solid ${accentAlpha}0.38)`,
                color: accentColor, fontSize: 13, fontWeight: 600,
                textDecoration: "none", transition: "all 0.2s", marginTop: 4,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = `${accentAlpha}0.2)`; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = `${accentAlpha}0.1)`; }}
            >
              Ver projeto ao vivo ↗
            </a>
          )}
        </div>
      </div>

      {/* ── Zoom lightbox ── */}
      {zoomed && images[activeImg] && (
        <div
          onClick={() => setZoomed(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 2000,
            background: "rgba(0,0,0,0.96)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "zoom-out", animation: "fadeIn 0.15s ease",
          }}
        >
          <img
            src={images[activeImg].src}
            alt=""
            style={{ maxWidth: "96vw", maxHeight: "96vh", objectFit: "contain", borderRadius: 6 }}
          />
          <div style={{
            position: "fixed", top: 20, right: 20,
            background: "rgba(255,255,255,0.08)", borderRadius: 8,
            padding: "6px 12px", fontSize: 12, color: "rgba(255,255,255,0.5)",
          }}>
            ESC para fechar
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Projects ────────────────────────────────────────────
function ProjectsSection() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section id="projetos" style={{ padding: "100px 5%", background: "rgba(255,255,255,0.01)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 48 }}>
            <span style={{ color: "#64C8FF", fontFamily: "monospace", fontSize: 22, marginTop: 2 }}>04.</span>
            <div>
              <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0, color: "#fff" }}>Projetos</h2>
              <div style={{ width: 48, height: 2, background: "#64C8FF", marginTop: 8 }} />
            </div>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {data.projects.map((proj, i) => {
            const accentAlpha = proj.featured ? "rgba(155,89,182," : "rgba(100,200,255,";
            const accentColor = proj.featured ? "#9B59B6" : "#64C8FF";
            const hasImages = proj.images && proj.images.length > 0;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  style={{
                    padding: "32px 28px",
                    borderRadius: 16,
                    background: proj.featured ? "rgba(155,89,182,0.06)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${accentAlpha}0.18)`,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.3s",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onClick={() => setModalProject(proj)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = `${accentAlpha}0.45)`;
                    e.currentTarget.style.boxShadow = `0 20px 50px ${accentAlpha}0.12)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = `${accentAlpha}0.18)`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Badges row */}
                  <div style={{ position: "absolute", top: 14, right: 14, display: "flex", gap: 6 }}>
                    {hasImages && (
                      <div style={{
                        padding: "3px 9px", borderRadius: 20,
                        background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                        fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: 0.8,
                      }}>
                        {proj.images.length} foto{proj.images.length > 1 ? "s" : ""}
                      </div>
                    )}
                    {proj.featured && (
                      <div style={{
                        padding: "3px 9px", borderRadius: 20,
                        background: "rgba(155,89,182,0.2)", border: "1px solid rgba(155,89,182,0.5)",
                        fontSize: 10, fontWeight: 700, color: "#C39BD3", letterSpacing: 0.8, textTransform: "uppercase",
                      }}>
                        Desktop
                      </div>
                    )}
                  </div>

                  {/* Icon + period */}
                  <div style={{ display: "flex", alignItems: "center", marginBottom: 16, gap: 12 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 9,
                      background: `${accentAlpha}0.12)`,
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                    }}>
                      {proj.icon}
                    </div>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", fontFamily: "monospace" }}>{proj.period}</span>
                  </div>

                  <h3 style={{ fontSize: 19, fontWeight: 700, color: "#fff", margin: "0 0 10px" }}>{proj.name}</h3>
                  <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.75, margin: "0 0 18px", flex: 1 }}>{proj.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 16 }}>
                    {proj.tech.map((t) => <Tag key={t} label={t} />)}
                  </div>

                  {/* Footer row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", gap: 8 }}>
                    <button
                      style={{
                        padding: "7px 14px", borderRadius: 7,
                        border: `1px solid ${accentAlpha}0.3)`,
                        background: `${accentAlpha}0.07)`,
                        color: accentColor, fontSize: 12, fontWeight: 600,
                        cursor: "pointer", letterSpacing: 0.4, display: "flex", alignItems: "center", gap: 6,
                      }}
                    >
                      🖼 Ver galeria
                    </button>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          padding: "7px 14px", borderRadius: 7,
                          border: "1px solid rgba(255,255,255,0.1)",
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(255,255,255,0.55)", fontSize: 12, fontWeight: 500,
                          textDecoration: "none", display: "flex", alignItems: "center", gap: 4,
                        }}
                      >
                        Site ↗
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}

          {/* More projects placeholder */}
          <FadeIn delay={0.3}>
            <div
              style={{
                padding: "32px 28px",
                borderRadius: 16,
                border: "1.5px dashed rgba(100,200,255,0.15)",
                display: "flex", flexDirection: "column", alignItems: "center",
                justifyContent: "center", gap: 12, minHeight: 200,
                transition: "all 0.25s", cursor: "pointer",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(100,200,255,0.4)"; e.currentTarget.style.background = "rgba(100,200,255,0.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(100,200,255,0.15)"; e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ fontSize: 28, opacity: 0.2 }}>+</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", textAlign: "center", lineHeight: 1.6 }}>
                Mais projetos<br />em breve
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Modal */}
      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────
function ContactSection() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const contacts = [
    { key: "email", label: "E-mail", value: data.email, icon: "✉" },
    { key: "phone", label: "Telefone", value: data.phone, icon: "📱" },
    { key: "location", label: "Localização", value: data.location, icon: "📍" },
  ];

  return (
    <section id="contato" style={{ padding: "100px 5% 80px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <div style={{ marginBottom: 48 }}>
            <span style={{ color: "#64C8FF", fontFamily: "monospace", fontSize: 16 }}>05.</span>
            <h2 style={{ fontSize: 36, fontWeight: 700, margin: "8px 0 16px", color: "#fff" }}>Vamos conversar?</h2>
            <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
              Estou disponível para projetos freelance, colaborações e oportunidades.
              Pode entrar em contato por qualquer canal abaixo.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 40 }}>
          {contacts.map(({ key, label, value, icon }, i) => (
            <FadeIn key={key} delay={i * 0.1}>
              <div
                onClick={() => copyToClipboard(value, key)}
                style={{
                  padding: "20px 16px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(100,200,255,0.1)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(100,200,255,0.3)"; e.currentTarget.style.background = "rgba(100,200,255,0.05)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(100,200,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div style={{ fontSize: 20, marginBottom: 8 }}>{icon}</div>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.35)", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: copied === key ? "#A8FF78" : "rgba(255,255,255,0.7)", fontWeight: 500, wordBreak: "break-all" }}>
                  {copied === key ? "Copiado! ✓" : value}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
            Clique nos cards para copiar as informações de contato
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "28px 5%",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0, fontFamily: "monospace" }}>
        Feito com <span style={{ color: "#64C8FF" }}>{"<"}</span>
        <span style={{ color: "#ff6b6b" }}>♥</span>
        <span style={{ color: "#64C8FF" }}>{">"}</span> por{" "}
        <span style={{ color: "#64C8FF" }}>Érik Martins</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

// ─── App ────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        background: "#080810",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.4)} }
        @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-20px) scale(1.05)} 66%{transform:translate(-20px,15px) scale(0.97)} }
        @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-25px,20px) scale(1.03)} 66%{transform:translate(20px,-15px) scale(0.95)} }
        @keyframes scrollDown { 0%{opacity:1;transform:translateX(-50%) translateY(0)} 100%{opacity:0;transform:translateX(-50%) translateY(14px)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(40px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080810; }
        ::-webkit-scrollbar-thumb { background: rgba(100,200,255,0.3); border-radius: 2px; }
      `}</style>
      <Header active={active} setActive={setActive} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
