import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "💻 Technical Skills",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 60 },
      { name: "Unity", level: 30 },
      { name: "C Programming", level: 55 },
    ],
  },
  {
    title: "🎨 Design Skills",
    skills: [
      { name: "UI/UX Design", level: 80 },
      { name: "Figma", level: 85 },
      { name: "Photoshop", level: 75 },
      { name: "Branding", level: 70 },
    ],
  },
  {
    title: "🧠 Other Skills",
    skills: [
      { name: "Problem Solving", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Creative Thinking", level: 90 },
    ],
  },
];

const education = [
  { level: "SEE", title: "Kanti Secondary School", desc: "Completed secondary education with distinction" },
  { level: "+2", title: "Kanti Secondary School", desc: "Higher Secondary (Science) with focus on mathematics & physics" },
  { level: "Bachelor", title: "Nepal College of Information and Technology", desc: "BSc. Computer Engineering" },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
          style={{ boxShadow: "0 0 12px hsl(185 85% 87% / 0.3)" }}
        />
      </div>
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display text-4xl md:text-5xl text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            A passionate developer and designer creating meaningful digital experiences
          </p>
        </motion.div>

        {/* About + Skills */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 h-fit"
          >
            <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">
              Who I Am
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Aaditya Belbase, a web developer and graphic designer from Nepal.
              I love turning ideas into beautiful, functional digital products that people enjoy using.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both code and design, I bridge the gap between
              aesthetics and technology. I'm constantly learning, experimenting, and pushing
              boundaries to create innovative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {skillCategories.map((cat) => (
              <div key={cat.title} className="mb-8">
                <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
                  {cat.title}
                </h4>
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="heading-display text-3xl text-center mb-12">
            <span className="text-gradient">Education</span>
          </h3>
          <div className="relative max-w-2xl mx-auto">
            {/* Glowing line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20" />
            {education.map((edu, i) => (
              <motion.div
                key={edu.level}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_12px_hsl(185_85%_87%/0.5)]" />
                <div className="glass-card p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {edu.level}
                  </span>
                  <h4 className="font-display text-lg font-semibold text-foreground mt-1">
                    {edu.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">{edu.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
