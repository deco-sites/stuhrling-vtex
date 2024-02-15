"use client";
import { useEffect, useRef, useState } from "preact/compat";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { SearchButton } from "$store/islands/Header/Buttons.tsx";

interface Props {
  topText?: string;
  headerImage?: ImageWidget;
  headerItems?: {
    title: string;
    link: string;
  }[];
}

export default function MainHeader(props: Props) {
  const { topText, headerImage, headerItems } = props;
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div>
      {/*Desktop*/}
      <div className={` hidden flex-col w-full xl:flex`}>
        <div className="bg-black text-center text-white font-bold text-[13px] py-1">
          {topText}
        </div>
        <div className={`flex justify-between items-center py-7 px-6`}>
          <Image src={headerImage ? headerImage : ""}></Image>
          <div className="max-w-[1440px] flex flex-row justify-between items-center gap-[30px]">
            {headerItems
              ? headerItems.map((item) => {
                return (
                  <a
                    className="font-bold text-[14px] font-['lato'] uppercase"
                    href={item?.link}
                  >
                    {item?.title}
                  </a>
                );
              })
              : null}
          </div>
          <div className={`flex`}>
            <SearchButton />
            <a
              class="flex items-center text-xs font-thin"
              href="/account"
              aria-label="Account"
            >
              <div class="flex btn btn-circle btn-sm btn-ghost gap-1">
                <Icon id="PersonMyAcoount" size={20} strokeWidth={0.4} />
              </div>
            </a>
            <CartButtonVTEX />
          </div>
        </div>
      </div>
      {/*Mobile*/}
      <div
        className={`z-[9999] bg-white xl:hidden fixed top-0 left-0 w-full flex flex-col`}
      >
        <div className="bg-black text-center text-white font-bold text-[13px] py-1">
          {topText}
        </div>
        <div className={`flex justify-between p-5 items-center`}>
          <div
            onClick={() => {
              setMenu(!menu);
            }}
            className={`w-[26px] h-[17px] flex flex-col justify-between items-center`}
          >
            <div className={`h-[2px] w-full bg-black`}></div>
            <div className={`h-[2px] w-full bg-black`}></div>
            <div className={`h-[2px] w-full bg-black`}></div>
          </div>
          <Image src={headerImage ? headerImage : ""}></Image>
          <div>
            <CartButtonVTEX />
          </div>
        </div>
      </div>
      <div
        className={`${
          menu
            ? "fixed p-3 w-[90vw] h-[100vh] top-0 left-0 bg-white shadow-2xl z-[99999]"
            : "hidden"
        }`}
      >
        <p
          className={`font-extrabold text-xl w-100 text-right `}
          onClick={() => {
            setMenu(!menu);
          }}
        >
          X
        </p>
        <div className={`flex flex-col justify-between gap-5`}>
          {headerItems
            ? headerItems.map((item) => {
              return (
                <a
                  className="font-bold text-[14px] font-['lato'] uppercase"
                  href={item?.link}
                >
                  {item?.title}
                </a>
              );
            })
            : null}
        </div>
      </div>
    </div>
  );
}
