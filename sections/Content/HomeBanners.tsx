import type { ImageWidget } from "apps/admin/widgets.ts";

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
          return <img src={item} alt="" />;
        })
        : null}
    </div>
  );
}
