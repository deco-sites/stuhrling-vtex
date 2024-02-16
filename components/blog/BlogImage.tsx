import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
    src: ImageWidget;
    alt?: string;
    width: number;
    height: number;
}

export default function BlogImage(
    { src, alt, width, height }: Props) {
  return (
    <div class="max-w-[1280px] m-auto flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
}