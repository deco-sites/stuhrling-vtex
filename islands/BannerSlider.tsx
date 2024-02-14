import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useState } from "preact/hooks";

interface Cards {
  image?: ImageWidget;
  mobileImage?: ImageWidget;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

interface Props {
  cards: Cards[];
}

export default function BannerSlider(props: Props) {
  const { cards } = props;
  const [currentIndex, setIndex] = useState(0);

  return (
    <div className="relative overflow-hidden">
      {cards
        ? (
          <div
            style={{ "transform": `translatex(-${currentIndex * 100}%)` }}
            className={`w-[100vw] flex slider-track transition-transform duration-300 ease-in-out`}
          >
            {cards.map((item) => {
              return (
                <div
                  className={`bg-cover min-w-[100vw] h-[540px] pl-6 xl:pl-[50%] pb-20 xl:pb-0 flex items-left justify-end xl:justify-center flex-col`}
                  style={{ backgroundImage: `url("${item.image}")` }}
                >
                  <p className="font-['lato'] text-[48px] font-light text-white xl:text-black">
                    {item.title}
                  </p>
                  <p className="hidden xl:flex font-['lato'] text-[20px] max-w-[37rem] font-semibold">
                    {item.description}
                  </p>
                  <a
                    className="border leading-10 w-fit text-white xl:text-black border-white lg:border-black rounded-md mt-6 px-7 py-2"
                    href={item.link}
                  >
                    {item.buttonText}
                  </a>
                </div>
              );
            })}
          </div>
        )
        : null}
      <div>
        {cards
          ? (
            <div className="flex gap-3 absolute bottom-2 left-[50%] translate-x-[-50%]">
              {cards.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full ${
                      index == currentIndex ? "bg-[#FF6B00]" : "bg-[#73787E]"
                    }`}
                  >
                  </div>
                );
              })}
            </div>
          )
          : null}
      </div>
    </div>
  );
}
