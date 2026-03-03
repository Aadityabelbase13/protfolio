import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "Frontend Developer",
  "UI Designer",
  "Creative Thinker",
  "Graphic Designer",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentRole.slice(0, text.length - 1)
          : currentRole.slice(0, text.length + 1)
      );
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] animate-glow-pulse" />

      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="heading-display text-5xl md:text-7xl mb-4">
            <span className="text-gradient">Aaditya</span>{" "}
            <span className="text-foreground">Belbase</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Web Developer & Graphic Designer
          </p>
          <div className="h-8 mb-6">
            <span className="text-primary font-mono text-lg">
              {text}
              <span className="border-r-2 border-primary animate-typing-cursor ml-0.5">
                &nbsp;
              </span>
            </span>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8">
            I design and build modern digital experiences that combine aesthetics with performance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                <ArrowDown size={18} /> View Projects
              </a>
            </Button>
            <Button variant="heroOutline" size="xl">
              <Download size={18} /> Download CV
            </Button>
            <Button variant="heroSecondary" size="xl">
              <FileText size={18} /> View Resume
            </Button>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full blur-xl opacity-50 animate-glow-pulse" />
            <img
              src={profileImg}
              alt="Aaditya Belbase"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-primary/30 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
