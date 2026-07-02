import Image from "next/image";
import clsx from "clsx";

type PhotoProps = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
};

export function Photo({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  zoom = true,
}: PhotoProps) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-3xl bg-cream-dark",
        aspect,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={clsx(
          "object-cover transition-transform duration-700 ease-out",
          zoom && "group-hover:scale-[1.06]"
        )}
      />
    </div>
  );
}
