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
  verTodosOsArtigosLink: string;
}

export default function OurBlog({ verTodosOsArtigosLink, cards }: Props) {
  return (
    <div>
      <div
        className={`max-w-[1280px] m-auto flex flex-col gap-11 py-11 overflow-scroll no-scrollbar`}
      >
        <div className={`flex xl:grid xl:grid-cols-3 gap-4 w-fit xl:w-auto`}>
          {cards.map((item) => {
            return (
              <div className={`w-[100vw] xl:w-auto p-2`}>
                <Image src={item.image} />
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
        </div>
      </div>
      <a
        href={verTodosOsArtigosLink}
        className={`w-fit flex px-8 h-10 justify-center items-center m-auto border border-black rounded-[3px] uppercase text-[#090909] font-['lato'] `}
      >
        Ver todos os artigos
      </a>
    </div>
  );
}
