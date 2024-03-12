"use client";
import { useEffect, useRef, useState } from "preact/compat";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { SearchButton } from "$store/islands/Header/Buttons.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import Cart from "$store/components/minicart/Cart.tsx";
import Drawer from "$store/components/ui/Drawer.tsx";
import type { ComponentChildren } from "preact";
import Button from "$store/components/ui/Button.tsx";
import { Suspense } from "preact/compat";

interface SimpleDrop{
  text?: string;
  href?: string;
}

interface ComplexDropImages{
  image?: ImageWidget;
  text?: string;
  href?: string;
}

interface ComplexDrop{
  firstRow?: ComplexDropImages[];
  secondRow?: ComplexDropImages[];
}


interface Props {
  searchbar?: SearchbarProps;
  topText?: string;
  headerImage?: ImageWidget;
  headerItems?: {
    title: string;
    link: string;
    //menuDropType?: "simpleDrop" | "complexDrop"
    complexDrop?: ComplexDrop,
    //simpleDrop?: SimpleDrop
  }[];
}

export default function MainHeader(props: Props) {
  const { topText, headerImage, headerItems, searchbar } = props;
  const [menu, setMenu] = useState<boolean>(false);
  const { displayCart } = useUI();
  const [mobileDropDown, setMobileDropDown] = useState<number[]>([]);

  const updateMobileDrop = (arg)=>{
    mobileDropDown.includes(arg) ? setMobileDropDown(mobileDropDown.filter(item => item !== arg)) : setMobileDropDown([...mobileDropDown, arg])
  }

  const dropArrow = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4175/7233677e-c5d7-4643-96c9-213e2aec7451"

  const Aside = (
    { title, onClose, children }: {
      title: string;
      onClose?: () => void;
      children: ComponentChildren;
    },
  ) => (
    <div class="bg-base-100 grid grid-rows-[auto_1fr] h-full divide-y max-w-[100vw]">
      <div class="flex justify-between items-center">
        <h1 class="px-4 py-3">
          <span class="font-medium text-2xl">{title}</span>
        </h1>
        {onClose && (
          <Button class="btn btn-ghost" onClick={onClose}>
            <Icon id="XMark" size={24} strokeWidth={2} />
          </Button>
        )}
      </div>
      <Suspense
        fallback={
          <div class="w-screen flex items-center justify-center">
            <span class="loading loading-ring" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );

  return (
    <div className={`relative`}>
      {/*Desktop*/}
      <div className={`hidden flex-col w-full xl:flex xl:shadow`}>
        <div className="bg-black text-center text-white font-bold text-[13px] py-1">
          {topText}
        </div>
        <div className={`flex justify-between items-center h-[88px] px-6`}>
          <a href="/">
            <Image width={229} src={headerImage ? headerImage : ""}></Image>
          </a>
          <div className=" max-w-[1440px] h-full flex flex-row justify-between items-center gap-[30px]">
            {headerItems
              ? headerItems.map((item) => {
                return (
                  <div className={`group cursor-pointer h-full flex justify-center items-center`}>
                    <a className="font-bold text-[14px] font-['lato'] uppercase" href={item?.link}>
                      {item?.title}
                    </a>
                    {/*item?.menuDropType == "complexDrop"*/ item?.complexDrop.firstRow?.length || item?.complexDrop.secondRow?.lenght ?
                      <div className={`z-999 w-full hidden h-fit group-hover:flex absolute top-[115px] left-0 bg-white border-b border-b-gray-300`}>
                        <div className={`w-[1026px] my-8 mx-auto`}>
                          <div className={`flex flex-row justify-between`}>{
                            item?.complexDrop?.firstRow?.map(itemDrop =>{
                              return(
                                <a href={itemDrop?.href} className={`group/card`}>
                                  <div className={`h-44 overflow-hidden`}>
                                    <Image src={itemDrop.image} className={`h-full hover:scale-110 transition-all duration-[0.5s]`}></Image>
                                  </div>
                                  <p className={`mt-3 text-center font-['lato'] font-bold text-transparent group-hover/card:text-[#FF6B00] uppercase`}>{itemDrop.text}</p>
                                </a>
                              )
                            })
                          }</div>
                          <div className={`flex flex-row justify-between`}>
                            {item?.complexDrop?.secondRow?.map(itemDrop=>{
                              return(
                                <div className={`h-24 w-80 bg-cover relative group/card`}>
                                  <Image src={itemDrop?.image}></Image>
                                  <p className={` z-999 translate-y-[-50%] translate-x-[-50%] left-1/2 text-center text-white group-hover/card:text-[#FF6B00] font-['lato'] font-bold absolute top-1/2`}>{itemDrop?.text}</p>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    : null}
                  </div>
                );
              })
              : null}
          </div>
          <div className={`flex gap-[20px]`}>
            <SearchButton />
            <Searchbar searchbar={searchbar} />
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
            <Drawer // right drawer
              class="drawer-end"
              open={displayCart.value !== false}
              onClose={() => displayCart.value = false}
              aside={
                <Aside
                  title="Minha sacola"
                  onClose={() => displayCart.value = false}
                >
                  <Cart platform={"vtex"} />
                </Aside>
              }
            >
            </Drawer>
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
          <Image width={174} src={headerImage ? headerImage : ""}></Image>
          <div>
            <CartButtonVTEX />
          </div>
        </div>
      </div>
      <div
        className={`${
          menu
            ? "fixed p-3 w-[90vw] h-[100vh] top-0 left-0 bg-white shadow-2xl z-[99999] overflow-scroll"
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
        <div className={`flex flex-col justify-between`}>
          {headerItems
            ? headerItems.map((item, index) => {
              console.log(`Index: ${index}`, item)
              return (
                
                <div className={``}>
                  <div onClick={()=>{updateMobileDrop(index)}} className={`border-t border-gray-200 ${index + 1 == mobileDropDown?.lenght ? "border-b" : "" } py-4 pr-4 flex flex-row w-full justify-between items-center`}><p className={`font-bold text-[14px] font-['lato'] uppercase`}>{item.title}</p> {item?.complexDrop?.firstRow?.length ? <Image className={`h-[15px]  ${!mobileDropDown.includes(index) ? `-rotate-90` : null}`} height={15} src={dropArrow} /> : null}</div>
                  <div className={`${mobileDropDown.includes(index) ? `h-fit max-h-fit` : ` max-h-0 overflow-hidden`}  transition-max-height duration-500`}>
                    {item?.complexDrop?.firstRow?.length ? 
                      item.complexDrop.firstRow?.map((item, index)=>{
                        return(
                          <a href={item?.href}className={`border-t border-gray-200 py-4 pr-4 flex flex-row w-full justify-between items-center`}>
                            {item.text}
                          </a>
                        )
                      })
                      
                      
                    : null}
                  </div>
                </div>
              );
            })
            : null}
        </div>
      </div>
    </div>
  );
}
