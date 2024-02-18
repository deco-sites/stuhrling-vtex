"use client";
import { useEffect, useRef } from "preact/compat";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface CollectionItem {
  image?: ImageWidget;
  text?: string;
  link?: string;
}

interface Props {
  collectionItems?: CollectionItem[];
}

export default function OurCollections(props: Props) {
  const { collectionItems } = props;
  const mainContainer = useRef<HTMLDivElement>(null);

  const weelHandler = (event) => {
    event.preventDefault();
    console.log(event, mainContainer);
    mainContainer.current.scrollLeft = mainContainer.current.scrollLeft +
      (event.deltaY * 2);
  };

  return (
    <div className="max-w-[1280px] m-auto">
      {collectionItems
        ? (
          <div
            ref={mainContainer}
            onWheel={(event) => {
              weelHandler(event);
            }}
            className="flex scroll-smooth overflow-x-scroll gap-[15px] no-scrollbar snap snap-x snap-mandatory"
          >
            {collectionItems.map((item) => {
              return (
                <a className="min-w-96" href={collectionItems?.link}>
                  <Image
                    src={item?.image}
                    className="w-96"
                    width={384}
                    heigth={380}
                  />
                  <p
                    className={`font-['lato'] text-center text-ellipsis uppercase`}
                  >
                    {item.text}
                  </p>
                </a>
              );
            })}
          </div>
        )
        : null}
    </div>
  );
}
