import { useRouter } from "@tanstack/react-router";
import { Linkedin, MessageCircle, Twitter, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface ShareButtonsProps {
  siteUrl: string;
  title: string;
  description: string;
}

export function ShareButtons({ siteUrl, title, description }: ShareButtonsProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const pathname = router.state.location.pathname;
  const url = `${siteUrl}${pathname === "/" ? "/" : pathname}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(`${title} — ${description}`);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      icon: MessageCircle,
      className: "bg-emerald/10 text-emerald hover:bg-emerald/20 hover:text-emerald-dark",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
      className: "bg-blue-600/10 text-blue-700 hover:bg-blue-600/20 dark:text-blue-500",
    },
    {
      name: "X",
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: Twitter,
      className: "bg-foreground/10 text-foreground hover:bg-foreground/20",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copiado al portapapeles", {
        description: "Ya podés pegarlo donde quieras.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("No se pudo copiar el link", {
        description: "Intentá copiar la URL manualmente.",
      });
    }
  };

  return (
    <div className="flex items-center gap-3">
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartir en ${link.name}`}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${link.className}`}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Link copiado" : "Copiar link de la página"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-emerald-dark transition-colors hover:bg-gold/20"
      >
        {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
      </button>
    </div>
  );
}

