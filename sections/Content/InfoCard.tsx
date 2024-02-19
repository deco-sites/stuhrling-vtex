import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title: string;
  text: string;
  linkText: string;
  href: string;
  image: ImageWidget;
}

export default function InfoCard(
  { image, text, href, title, linkText }: Props,
) {
  return (
    <div
      className={`max-w-[1280px] m-auto flex gap-[30px] h-fit my-5 flex-col xl:flex-row p-3 xl:p-0`}
    >
      <Image
        width={650}
        height={650}
        className={`h-auto xl:h-[600px]`}
        src={image}
        alt=""
      />
      <div
        className={`flex flex-col h-auto xl:h-[600px] justify-around bg-[#F2F2F2] lg:px-[112px] lg:py-[50px] py-7 px-7 gap-4 lg:gap-0`}
      >
        <h1
          className={`uppercase font-['lato'] text-xl xl:text-3xl font-[300] tracking-[4px] leading-6 `}
        >
          {title}
        </h1>
        <p className={`font-['lato'] font-semibold lg:text-xl text-base`}>
          {text}
        </p>
        <a
          className={`font-['lato'] font-semibold lg:text-xl text-base text-[#FF6B00] underline`}
          href={href}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
}
