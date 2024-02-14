import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface TestimonialCard {
  image: ImageWidget;
  text: string;
}

interface Props {
  testimonialCards: TestimonialCard[];
}

export default function TestimonialCards(props: Props) {
  const { testimonialCards } = props;
  return (
    <div className="overflow-x-scroll no-scrollbar">
      <div
        className={`flex flex-row xl:grid xl:grid-cols-3 xl:gap-6 xl:max-w-[1280px] w-fit m-auto xl:py-7 pb-10`}
      >
        {testimonialCards.map((item) => {
          return (
            <div
              className={`flex justify-center items-center flex-col italic w-screen xl:w-auto`}
            >
              <Image width={150} height={`auto`} src={item.image} />
              <p className={`text-center font-['lato'] italic`}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
