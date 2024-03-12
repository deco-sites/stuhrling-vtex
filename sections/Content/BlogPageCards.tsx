import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface BlogCard {
  image: ImageWidget;
  cardTitle: string;
  cardText: string;
  saibaMaisLink: string;
}
interface Props {
  cards: BlogCard[];
}

export default function BlogPageCards({ cards }: Props) {
  return (
    <section
      className={`my-36 xl:my-5 xl:m-auto max-w-7xl grid xl:grid-cols-3 gap-3`}
    >
      {cards.map((item) => {
        return (
          <div className={`w-[100vw] xl:w-auto p-2`}>
            <Image src={item.image} width={420} height={300} />
            <h3 className={`font-['lato'] text-base py-2 uppercase`}>
              {item.cardTitle}
            </h3>
            <p className={`font-['lato'] text-sm py-1 text-[#777]`}>
              {item.cardText}
            </p>
            <a
              className={`font-['lato'] text-base py-2 text-[#FF6B00] underline`}
              href={item.saibaMaisLink}
            >
              Saiba mais
            </a>
          </div>
        );
      })}
    </section>
  );
}
