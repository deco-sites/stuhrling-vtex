import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  images: ImageWidget[];
}

export default function HomeBanners({ images }: Props) {
  return (
    <div
      className={`flex flex-col lg:flex-row max-w-[1280px] gap-[20px] m-auto my-8`}
    >
      {images
        ? images.map((item) => {
          return <Image src={item} alt="" width={650} height={650} />;
        })
        : null}
    </div>
  );
}
