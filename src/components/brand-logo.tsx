import logo280 from "@/assets/ea-logo-280.webp.asset.json";
import logo560 from "@/assets/ea-logo-560.webp.asset.json";
import logo840 from "@/assets/ea-logo-840.webp.asset.json";
import logoFallback from "@/assets/ea-logo.png.asset.json";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = true }: BrandLogoProps) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${logo280.url} 1x, ${logo560.url} 2x, ${logo840.url} 3x`}
      />
      <img
        src={logoFallback.url}
        srcSet={`${logo280.url} 1x, ${logo560.url} 2x, ${logo840.url} 3x`}
        alt="Estudio Ambrosini. Contadores Públicos."
        className={className}
        width={1000}
        height={530}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
}
