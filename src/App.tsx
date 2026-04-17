import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  Menu, 
  X,
  Award,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Terminal,
  ChevronRight,
  Globe
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Awards", href: "#awards" },
    { name: "Values", href: "#values" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-zinc-100 py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter text-brand-primary">
          J. GAN
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-widest font-semibold text-brand-secondary hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-zinc-200 mx-2" />
          <div className="flex items-center gap-4">
            <a href="https://github.com/JONGFS" target="_blank" aria-label="Github Profile" className="text-brand-secondary hover:text-brand-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/jonathan-gan-7841212b1/" target="_blank" aria-label="LinkedIn Profile" className="text-brand-secondary hover:text-brand-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1SkQSfwaGLqD9iVMHtaB6V-wrh7FJ5N2F/view?usp=sharing" 
              target="_blank"
              className="px-4 py-2 bg-brand-accent text-white hover:bg-brand-accent/90 transition-all font-medium text-[10px] uppercase tracking-wider"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-brand-primary">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-8 flex flex-col gap-6 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-bold text-brand-primary tracking-tight"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px w-full bg-zinc-100 my-2" />
            <div className="flex gap-6 items-center">
              <a href="https://github.com/JONGFS" target="_blank" className="text-brand-secondary">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/jonathan-gan-7841212b1/" target="_blank" className="text-brand-secondary">
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://drive.google.com/file/d/1SkQSfwaGLqD9iVMHtaB6V-wrh7FJ5N2F/view?usp=sharing" 
                target="_blank"
                className="ml-auto px-6 py-3 bg-brand-accent text-white font-bold text-xs uppercase tracking-widest"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SkillGroup = ({ title, skills, icon: Icon }: any) => (
  <div className="p-8 border border-zinc-100 bg-white group hover:border-brand-accent transition-all duration-300">
    <div className="flex items-center gap-3 mb-6 text-brand-accent">
      <Icon className="w-5 h-5" />
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] font-display">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill: string) => (
        <span key={skill} className="px-3 py-1 bg-zinc-50 border border-zinc-100 text-[10px] font-mono font-medium text-brand-secondary">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SectionHeading = ({ children, subtitle }: { children: string, subtitle?: string }) => (
  <div className="mb-16">
    <div className="flex items-center gap-4 mb-4">
      <div className="h-px w-12 bg-zinc-200" />
      <span className="font-serif italic text-sm text-brand-secondary/60">Portfolio Chapter</span>
    </div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-display"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-brand-secondary text-base md:text-lg max-w-2xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ExperienceCard = ({ company, role, focus, items, image }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start"
  >
    <div className="lg:col-span-5 order-2 lg:order-1">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="text-2xl font-bold font-display tracking-tight">{company}</h3>
      </div>
      <p className="text-brand-accent text-[10px] font-bold mb-6 tracking-[0.2em] uppercase font-display border-b border-brand-gold/20 pb-2 inline-block">{role}</p>
      <p className="text-brand-secondary text-sm mb-6 leading-relaxed font-serif italic text-lg">{focus}</p>
      <ul className="space-y-3">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex gap-3 text-sm text-brand-secondary leading-relaxed">
            <span className="text-brand-accent font-bold mt-1 shrink-0">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="lg:col-span-7 order-1 lg:order-2">
      <div className="aspect-video bg-zinc-100 overflow-hidden shadow-sm">
        <img src={image} loading="lazy" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
      </div>
    </div>
  </motion.div>
);

const ProjectCardV2 = ({ title, context, build, tech, items, image, links }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="group bg-white border border-zinc-100 overflow-hidden flex flex-col"
  >
    <div className="aspect-[16/10] overflow-hidden bg-zinc-50 relative">
      <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-8 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-xs font-bold text-brand-secondary/60 uppercase tracking-widest leading-none">{context}</p>
        </div>
      </div>
      <p className="text-sm text-brand-secondary mb-6 leading-relaxed flex-1">
        {build}
      </p>
      <div className="space-y-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {tech.map((t: string) => (
            <span key={t} className="px-2 py-0.5 bg-zinc-100 text-[10px] font-bold text-brand-secondary rounded tracking-tight">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6 pt-6 border-t border-zinc-50">
        {links.github && (
          <a href={links.github} target="_blank" className="flex items-center gap-2 text-xs font-bold hover:text-brand-accent transition-colors">
            <Github className="w-4 h-4" /> GITHUB
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" className="flex items-center gap-2 text-xs font-bold hover:text-brand-accent transition-colors">
            <Globe className="w-4 h-4" /> DEMO
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const AwardCard = ({ title, event, description, image }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center group hover:bg-white transition-colors duration-300"
  >
    <div className="w-16 h-16 bg-brand-accent/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
      <Award className="w-8 h-8 text-brand-accent" />
    </div>
    <h3 className="text-lg font-bold mb-1 leading-tight font-display">{title}</h3>
    <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold mb-4 font-display">{event}</p>
    <p className="text-sm text-brand-secondary mb-8 leading-relaxed max-w-xs">{description}</p>
    {image && (
      <div className="w-full aspect-video bg-white overflow-hidden mt-auto border border-zinc-200">
        <img src={image} loading="lazy" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
      </div>
    )}
  </motion.div>
);

// --- App ---

export default function App() {
  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />

      {/* 1. Hero Section */}
      <section id="home" className="relative pt-32 pb-24 md:pt-56 md:pb-40 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative z-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold font-display">Georgia Institute of Technology</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-[0.85] font-display">
              Jonathan <br />
              <span className="text-brand-accent/10 outline-text">Gan</span>
            </h1>
            <p className="text-2xl md:text-3xl text-brand-secondary mb-10 leading-tight font-light font-display max-w-2xl">
               Georgia Tech CS. Building AI frameworks, full-stack systems, and human-centered social infrastructure.
            </p>
            <div className="font-serif italic text-xl text-brand-secondary mb-12 max-w-xl opacity-80 border-l-2 border-brand-accent pl-6 py-2">
              "My work is guided by a simple principle: People first. I build software that strengthens communities and creates systems where individuals can better support one another."
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="#projects" className="px-10 py-5 bg-brand-primary text-white hover:bg-brand-accent transition-all font-bold text-xs uppercase tracking-[0.2em] font-display shadow-2xl shadow-brand-primary/20">
                Explore Work
              </a>
              <a href="https://drive.google.com/file/d/1SkQSfwaGLqD9iVMHtaB6V-wrh7FJ5N2F/view?usp=sharing" target="_blank" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors py-2 border-b-2 border-transparent hover:border-brand-accent">
                <FileText className="w-4 h-4" /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-md aspect-[3/4] group">
              <div className="absolute inset-0 border-2 border-brand-accent translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
              <div className="w-full h-full bg-zinc-100 overflow-hidden shadow-2xl skew-x-[-1deg]">
                <img
                  src="/photos/profile.jpeg"
                  alt="Jonathan Gan"
                  fetchPriority="high"
                  className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 border border-zinc-100 shadow-xl hidden md:block">
                <span className="block text-[8px] uppercase tracking-[0.5em] font-bold text-brand-accent mb-2">Technical Focus</span>
                <p className="font-display font-bold text-lg leading-tight uppercase tracking-tight">AI • ML • Full Stack</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Accent Text */}
        <div className="absolute top-1/2 -right-20 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[20vw] font-bold font-display leading-none whitespace-nowrap overflow-hidden -z-20">
          BUILDER RESEARCHER
        </div>
      </section>

      {/* 2. Personal Mantra Banner */}
      <section className="bg-brand-accent py-32 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight max-w-5xl mx-auto leading-[1.1]"
          >
            People first. Human first. I build technology that strengthens communities and helps people support each other.
          </motion.h2>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/60 text-xs font-bold uppercase tracking-[0.3em]">
            <span>Empowerment</span>
            <span>Connection</span>
            <span>Impact</span>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] pointer-events-none" />
      </section>

      {/* 3. About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <SectionHeading>About Jonathan</SectionHeading>
            <p className="text-xl text-brand-secondary leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
              I am a Georgia Tech CS student deeply interested in AI, machine learning, and full-stack systems. My core motivation isn't just to write code, but to turn ambitious ideas into working products that simplify lives.
            </p>
            <p className="text-xl text-brand-secondary leading-relaxed">
              I view software as social infrastructure. Whether I'm scaling a distributed system or designing a mobile experience, I prioritize community, empathy, and technical rigor. I'm driven by the goal of building systems that have a tangible, positive impact on people's daily interactions.
            </p>
            <div className="pt-8">
              <img src="/photos/jonpic1.jpeg" loading="lazy" className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[10px] uppercase font-bold tracking-widest text-zinc-400">Collaborating with friends in the lab.</p>
            </div>
          </div>

          <div className="sticky top-32">
            <div className="bg-zinc-50 border border-zinc-100 p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl -translate-y-16 translate-x-16" />
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold text-brand-secondary/40 mb-10 font-display">Dossier / Context</h3>
              <div className="space-y-8">
                {[
                  { label: "University", value: "Georgia Institute of Technology" },
                  { label: "Major", value: "Computer Science" },
                  { label: "Fields", value: "AI / Full-Stack / ML" },
                  { label: "Identity", value: "Builder / Researcher / Community-oriented" }
                ].map((fact) => (
                  <div key={fact.label} className="border-b border-zinc-200 pb-6 last:border-0 group">
                    <span className="block text-[9px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-2 group-hover:text-brand-accent transition-colors font-display">{fact.label}</span>
                    <span className="text-xl font-bold tracking-tight font-display">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Experience Section */}
      <section id="experience" className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100">
        <SectionHeading subtitle="Formative roles bridging technical excellence and community service.">
          Professional Journey
        </SectionHeading>
        <div className="space-y-16">
          <ExperienceCard 
            company="Georgia Institute of Technology — VIP Research Program"
            role="Undergraduate Researcher"
            focus="Distributed LLM inference and multi-GPU scaling."
            image="/photos/ncur.png"
            items={[
              "Distributed LLM inference and multi-GPU scaling for large models.",
              "Debugging critical numerical overflow and runtime failures in cluster environments.",
              "Standardizing reproducible research workflows for the wider research team.",
              "Driving efficiency in team-wide compute utilization."
            ]}
          />
          <ExperienceCard 
            company="Tech Wrek"
            role="Resident Technology Agent"
            focus="High-volume IT infrastructure support for student communities."
            image="/photos/jonpic2.JPG"
            items={[
              "Direct IT incident resolution for thousands of Georgia Tech residents.",
              "Diagnosing hardware, networking, and network connectivity at scale.",
              "ServiceNow workflow management for service reliability.",
              "Providing essential technology support in a live residential environment."
            ]}
          />
        </div>
      </section>

      {/* 5. Projects Section */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100">
        <SectionHeading subtitle="Strongest technical builds with visible impact and proven scalability.">
          Featured Engineering
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProjectCardV2 
            title="DarkHorse World Cup"
            context="Sports Analytics & Matchup Prediction"
            build="An analytics engine focused on predicting international football upsets through interpretable data frameworks."
            tech={["React (Vite)", "Supabase", "FastAPI", "XGBoost"]}
            image="/photos/hacklytics.JPG"
            links={{ github: "https://github.com/JONGFS", demo: "#" }}
            items={["Custom 'DarkScore' framework", "Elo differential analysis", "FC26 player feature sets"]}
          />
          <ProjectCardV2 
            title="LandLordFlip"
            context="AI-Powered Content Generation"
            build="Multi-agent AI orchestration pipeline generating promotional content from raw rental listings."
            tech={["Multi-agent AI", "FastAPI", "React", "Python"]}
            image="/photos/lanlordflip.jpeg"
            links={{ github: "https://github.com/JONGFS", demo: "#" }}
            items={["Automated video production flow", "Practical application for real estate market", "High-speed LLM processing"]}
          />
          <ProjectCardV2 
            title="Swarmz"
            context="GT Basketball Fan Engagement"
            build="Gamified platform designed to elevate the fan experience through social challenges and streaks."
            tech={["TypeScript", "React", "Node.js", "Tailwind CSS"]}
            image="/photos/landlord2.jpeg"
            links={{ github: "https://github.com/JONGFS" }}
            items={["Streaks, challenges, and rewards logic", "Real-time community participation metrics"]}
          />
          <ProjectCardV2 
            title="GT Movies Store"
            context="Full-Stack E-Commerce MVP"
            build="Robust MVT architecture implementation covering accounts, carts, and review systems."
            tech={["Django", "Python", "PostgreSQL", "JavaScript"]}
            image="https://picsum.photos/seed/movie/800/500"
            links={{ github: "https://github.com/JONGFS" }}
            items={["Session-based cart logic", "Role-based review systems", "Vertical slice deployment"]}
          />
        </div>
      </section>

      {/* 6. Research Section */}
      <section id="research" className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100 bg-zinc-50 -mx-6">
        <div className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-accent mb-6 block">Academic Focus</span>
            <SectionHeading>Soil Nutrient Detection</SectionHeading>
            <p className="text-xl text-brand-secondary leading-relaxed mb-12">
              Interdisciplinary hardware-software research aiming for rapid and precise detection of soil macronutrients to optimize agricultural output.
            </p>
            <div className="space-y-8">
              {[
                { icon: Terminal, title: "Hardware Control", desc: "Arduino-based spectral integration with AS7341 sensors." },
                { icon: BookOpen, title: "Academic Publication", desc: "Co-authored research paper submitted to ASEE." },
                { icon: Layers, title: "Spectral Analysis", desc: "Correlating wavelength data with real-time nutrient counts." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-zinc-200 shadow-sm shrink-0">
                    <item.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-primary mb-1 uppercase text-xs tracking-wider">{item.title}</h4>
                    <p className="text-sm text-brand-secondary leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-white border border-zinc-200 p-8 shadow-2xl skew-x-[-1deg]">
              <img src="/photos/ncur.png" loading="lazy" className="w-full h-full object-cover filter grayscale" alt="Research Setup" />
              <div className="absolute -bottom-8 -left-8 bg-brand-accent text-white p-6 shadow-xl max-w-xs scale-90 md:scale-100">
                <span className="block text-[10px] uppercase font-bold tracking-[0.3em] opacity-60 mb-2">Presentation</span>
                <p className="font-bold leading-tight">Presented at National Conference on Undergraduate Research (NCUR 2025)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Awards Section */}
      <section id="awards" className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100">
        <SectionHeading subtitle="Recognition for technical execution, innovation, and venture potential.">
          Recognition & Honors
        </SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AwardCard 
            title="Hacklytics Data Analytics Winner"
            event="Georgia Tech's Premier Hackathon"
            description="DarkHorse World Cup recognized for transforming complex sports data into a usable, ML-powered product."
            image="/photos/hacklytics.JPG"
          />
          <AwardCard
            title="1st Place — Innovation Challenge"
            event="Perimeter College ($2,000 Prize)"
            description="Awarded for BusMate's strong product vision and immediate relevance to community infrastructure."
            image="/photos/perimeter.jpeg"
          />
          <AwardCard
            title="1st Place — Hacklanta"
            event="NEXLAYER Track Winner"
            description="LandLordFlip validated for technical execution of multi-agent AI pipelines and startup scalability."
            image="/photos/lanlordflip.jpeg"
          />
        </div>
      </section>

      {/* 8. Skills Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100">
        <SectionHeading subtitle="Technological toolkit for building scalable, intelligent systems.">
          Technical Capabilities
        </SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillGroup 
            title="Languages" 
            icon={ChevronRight}
            skills={["Python", "Java", "JavaScript", "TypeScript", "SQL"]} 
          />
          <SkillGroup 
            title="Frameworks" 
            icon={Code2}
            skills={["React", "FastAPI", "Django", "Node.js", "Vite"]} 
          />
          <SkillGroup 
            title="AI / ML" 
            icon={Terminal}
            skills={["XGBoost", "Scikit-learn", "Hugging Face", "DeepSpeed"]} 
          />
          <SkillGroup 
            title="Infrastructure" 
            icon={Layers}
            skills={["Docker", "Supabase", "Git", "Figma", "ServiceNow"]} 
          />
        </div>
      </section>

      {/* 9. Values Section */}
      <section id="values" className="bg-zinc-50 py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading subtitle="The foundational principles behind my engineering.">
            Building with People in Mind
          </SectionHeading>
          <div className="space-y-8 mt-12">
            <p className="text-2xl text-brand-secondary leading-relaxed font-medium">
              Jonathan believes the best technology is not just technically impressive, but useful, welcoming, and rooted in real human needs. 
            </p>
            <p className="text-2xl text-brand-secondary leading-relaxed font-medium">
              He strives to build products and systems that strengthen communities and make meaningful experiences more accessible for everyone.
            </p>
          </div>
          <div className="mt-16 pt-16 border-t border-zinc-200">
            <div className="flex justify-center gap-12 overflow-hidden px-8">
              <img src="/photos/jonpic1.jpeg" loading="lazy" className="w-64 h-80 object-cover filter grayscale -rotate-3 hover:rotate-0 transition-all duration-500 rounded-sm shadow-xl" />
              <img src="/photos/jonpic2.JPG" loading="lazy" className="w-64 h-80 object-cover filter grayscale rotate-6 hover:rotate-0 transition-all duration-500 rounded-sm shadow-xl hidden md:block" />
            </div>
            <p className="mt-8 text-[11px] uppercase tracking-[0.4em] font-bold text-brand-accent">Human Core • Technical Rigor</p>
          </div>
        </div>
      </section>

      {/* 10. Contact Section */}
      <footer id="contact" className="bg-white py-32 px-6 max-w-7xl mx-auto border-t border-zinc-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              Let's build <br />something impactul.
            </h2>
            <p className="text-xl text-brand-secondary leading-relaxed max-w-sm">
              Open to internships, research, and engineering roles focused on meaningful technology.
            </p>
          </div>
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Email</span>
                <a href="mailto:jgan39@gatech.edu" className="block text-2xl font-bold hover:underline decoration-brand-accent underline-offset-8">jgan39@gatech.edu</a>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Socials</span>
                <div className="flex gap-6 mt-2">
                  <a href="https://www.linkedin.com/in/jonathan-gan-7841212b1/" target="_blank" className="font-bold hover:text-brand-accent transition-colors">LINKEDIN</a>
                  <a href="https://github.com/JONGFS" target="_blank" className="font-bold hover:text-brand-accent transition-colors">GITHUB</a>
                </div>
              </div>
            </div>
            <div className="pt-12 border-t border-zinc-100 flex justify-between items-center text-zinc-400">
              <span className="text-[10px] font-bold tracking-widest uppercase">Jonathan Gan © 2026</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">Georgia Institute of Technology</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
