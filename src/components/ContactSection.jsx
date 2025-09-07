import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Connect <span className="text-primary">With Me</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          Let’s connect! Reach out to me through email, phone, or social media.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-3">
            <Mail className="text-primary" />
            <a
              href="mailto:hello@gmail.com"
              className="hover:text-primary transition-colors"
            >
              abarnasri22@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Phone className="text-primary" />
            <a
              href="tel:+11234567890"
              className="hover:text-primary transition-colors"
            >
              +91 75984 65652
            </a>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MapPin className="text-primary" />
            <span className="text-muted-foreground">
              Chennai, TamilNadu, India
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/abarna--dev/"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          {/* <a
            href="#"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Twitter size={24} />
          </a> */}
          <a
            href="https://www.instagram.com/_.aes_thetic._____/"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://github.com/Abarna005"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
