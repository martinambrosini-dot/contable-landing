import { useRouter } from "@tanstack/react-router";
import { Linkedin, MessageCircle, Twitter } from "lucide-react";

interface ShareButtonsProps {
  siteUrl: string;
  title: string;
  description: string;
}

export function ShareButtons({ siteUrl, title, description }: ShareButtonsProps) {
  const router = useRouter();
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
    </div>
  );
}
