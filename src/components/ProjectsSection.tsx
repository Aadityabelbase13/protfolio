import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const filters = ["All", "Web", "Design", "Game Dev"];

const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio with glassmorphism design and smooth animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "E-Commerce UI",
    desc: "Clean e-commerce interface design with modern product layouts.",
    tech: ["Figma", "UI/UX"],
    category: "Design",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Weather App",
    desc: "Real-time weather application with beautiful data visualization.",
    tech: ["JavaScript", "API", "CSS"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
  },
  {
    title: "Brand Identity",
    desc: "Complete branding package including logo, colors, and typography system.",
    tech: ["Photoshop", "Illustrator"],
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    title: "2D Platformer",
    desc: "A fun 2D platformer game prototype built with Unity engine.",
    tech: ["Unity", "C#"],
    category: "Game Dev",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
  },
  {
    title: "Task Manager",
    desc: "Clean task management app with drag and drop functionality.",
    tech: ["React", "CSS", "LocalStorage"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display text-4xl md:text-5xl text-center mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            A selection of projects showcasing my skills in development and design
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--glow-cyan)/0.3)]"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover:-translate-y-2 hover:shadow-[0_0_40px_hsl(var(--glow-cyan)/0.15)] transition-all duration-500"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="heroOutline" size="sm">
                    <ExternalLink size={14} /> Live Demo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github size={14} /> Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
