import logo280 from "@/assets/ea-logo-280.webp.asset.json";
import logo560 from "@/assets/ea-logo-560.webp.asset.json";
import logo840 from "@/assets/ea-logo-840.webp.asset.json";
import logoFallback from "@/assets/ea-logo.png.asset.json";

const assetOrigin =
  "https://id-preview--a728b6d1-fda0-467a-87d6-c9bef83d986a.lovable.app";

const logo280Url = `${assetOrigin}${logo280.url}`;
const logo560Url = `${assetOrigin}${logo560.url}`;
const logo840Url = `${assetOrigin}${logo840.url}`;
const logoFallbackUrl = `${assetOrigin}${logoFallback.url}`;

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = true }: BrandLogoProps) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${logo280Url} 1x, ${logo560Url} 2x, ${logo840Url} 3x`}
      />
      <img
        src={logoFallbackUrl}
        srcSet={`${logo280Url} 1x, ${logo560Url} 2x, ${logo840Url} 3x`}
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
