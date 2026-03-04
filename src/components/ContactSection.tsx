import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/share/16JAGw58pz/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aaditya-belbase-aa8768304", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Aadityabelbase13", label: "GitHub" },
];

const EMAILJS_SERVICE_ID = "service_hbddcho";
const EMAILJS_TEMPLATE_ID = "template_vyk78su";
const EMAILJS_PUBLIC_KEY = "ficpadDz5WAAzHLMC";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! I'll get back to you soon.");
      formRef.current.reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-display text-4xl md:text-5xl text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <Input
                  required
                  name="from_name"
                  placeholder="Your name"
                  className="bg-muted/50 border-border/50 focus:border-primary/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input
                  required
                  type="email"
                  name="from_email"
                  placeholder="your@email.com"
                  className="bg-muted/50 border-border/50 focus:border-primary/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <Textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-muted/50 border-border/50 focus:border-primary/50 resize-none"
                />
              </div>
              <Button variant="hero" size="xl" type="submit" className="w-full" disabled={sending}>
                {sending ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center items-center lg:items-start"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Connect With Me
            </h3>
            <p className="text-muted-foreground mb-8 text-center lg:text-left">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects and opportunities.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
