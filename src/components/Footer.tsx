import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/share/16JAGw58pz/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aaditya-belbase-aa8768304", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Aadityabelbase13", label: "GitHub" },
];

const Footer = () => (
  <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-muted-foreground text-sm text-center md:text-left">
          Designing the Future with Code & Creativity.
        </p>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border/30 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Aaditya Belbase. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
