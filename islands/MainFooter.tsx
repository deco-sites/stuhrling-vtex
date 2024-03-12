import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useEffect, useState } from "preact/hooks";

interface Props {
  categories?: {
    openByDefault?: boolean;
    title?: string;
    categorieItems?: {
      title?: string;
      link?: string;
      opitionalImage?: ImageWidget;
    }[];
  }[];
  socialMedia?: {
    image: ImageWidget;
    link: string;
  }[];
  payments?: {
    image: ImageWidget;
  }[];
  security?: {
    image: ImageWidget;
  }[];
  disclaimer?: string;
  tecnologies?: {
    image: ImageWidget;
  }[];
}

export default function MainFooter(props: Props) {
  const {
    disclaimer,
    categories,
    socialMedia,
    payments,
    security,
    tecnologies,
  } = props;
  const [activeCategorie, setActive] = useState<number>([]);

  useEffect(() => {
    const categoriesToAdd = [];
    categories
      ? categories.map((item, index) => {
        item?.openByDefault ? categoriesToAdd.push(index) : null;
      })
      : null;
    setActive(categoriesToAdd);
  }, []);

  return (
    <div className={`bg-black w-full text-white pb-8`}>
      <div className="xl:hidden">
        <div>
          {categories
            ? (
              <div>
                {categories.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        activeCategorie.includes(index)
                          ? setActive(
                            activeCategorie.filter((item) => item != index),
                          )
                          : setActive([...activeCategorie, index]);
                      }}
                      className={`border-[#444444] border-b-[1px] w-full`}
                    >
                      <div
                        className={`flex justify-between px-8 py-4 font-bold`}
                      >
                        <p>{item?.title}</p>
                        <p
                          className={activeCategorie.includes(index)
                            ? `rotate-90`
                            : `rotate-0`}
                        >
                          &gt;
                        </p>
                      </div>
                      {item.categorieItems
                        ? (
                          <div
                            className={activeCategorie.includes(index)
                              ? `block`
                              : `hidden`}
                          >
                            {item.categorieItems.map((subitem) => {
                              return (
                                <a
                                  className={`px-8 py-3 flex flex-row gap-1 items-center `}
                                  href={subitem?.link}
                                >
                                  {subitem?.opitionalImage
                                    ? <Image src={subitem.opitionalImage} />
                                    : null}{" "}
                                  <p
                                    className={`font-['lato'] font-semibold text-sm`}
                                  >
                                    {subitem?.title}
                                  </p>
                                </a>
                              );
                            })}
                          </div>
                        )
                        : null}
                    </div>
                  );
                })}
              </div>
            )
            : null}
        </div>
        {socialMedia
          ? (
            <div
              className={`border-[#444444] border-b-[1px] py-4 px-8 flex gap-6`}
            >
              {socialMedia.map((item) => {
                return (
                  <a href={item?.link}>
                    <Image src={item?.image} />
                  </a>
                );
              })}
            </div>
          )
          : null}

        {payments
          ? (
            <div className="px-8 py-4 flex flex-col gap-2">
              <p
                className={`font-['lato'] font-semibold text-[10px] text-gray-400`}
              >
                FORMAS DE PAGAMENTO
              </p>
              <div className={`flex gap-[1px] flex-wrap`}>
                {payments.map((item) => {
                  return <Image src={item?.image} />;
                })}
              </div>
            </div>
          )
          : null}
        {security
          ? (
            <div className={` py-4 px-8`}>
              <p
                className={`font-['lato'] font-semibold text-[10px] text-gray-400`}
              >
                SEGURANÇA
              </p>
              <div className={`flex gap-1`}>
                {security.map((item) => {
                  return <Image src={item.image} />;
                })}
              </div>
            </div>
          )
          : null}
        <div className="px-8">
          <p
            className={`font-['lato'] text-xs font-semibold leading-4 text-[#aaa]`}
          >
            {disclaimer}
          </p>
        </div>
      </div>
      <div className={`hidden xl:block p-14 max-w-[1400px] m-auto`}>
        <div className={`flex justify-between`}>
          {categories.map((item) => {
            return (
              <div className={`flex flex-col gap-4`}>
                <p className={`font-['lato'] font-bold text-sm uppercase mb-4`}>
                  {item.title}
                </p>
                {item.categorieItems
                  ? item.categorieItems.map((subitem) => {
                    return (
                      <a
                        className={`flex flex-row gap-1 items-center `}
                        href={subitem?.link}
                      >
                        {subitem?.opitionalImage
                          ? <Image src={subitem.opitionalImage} />
                          : null}{" "}
                        <p
                          className={`font-['lato'] font-semibold text-sm text-[#BBBBBB] uppercase`}
                        >
                          {subitem?.title}
                        </p>
                      </a>
                    );
                  })
                  : null}
              </div>
            );
          })}
          <div className={`max-w-[350px]`}>
            <p
              className={`font-['lato'] font-normal text-xl leading-6 uppercase mb-3`}
            >
              Receba nossa newsletter
            </p>
            <p className={`font-['lato'] text-xs text-[#bbb] uppercase`}>
              RECEBA AS ÚLTIMAS NOTÍCIAS, CONVITES E OFERTAS EXCLUSIVAS
              DIRETAMENTE EM SEU E-MAIL.
            </p>
            {/** Newsletter Integration Here */}
            <div className={`flex gap-5 py-3`}>
              {socialMedia
                ? socialMedia.map((item) => {
                  return (
                    <a href={item.link}>
                      <Image src={item.image} />
                    </a>
                  );
                })
                : null}
            </div>
          </div>
        </div>
        <div
          className={`border-t border-[#444] pt-8  mt-8 flex justify-between`}
        >
          <div className={`w-1/2 gap-8 flex`}>
            <div>
              <p
                className={`font-['lato'] text-[10px] text-[#aaa] uppercase mb-6`}
              >
                formas de pagamento
              </p>
              <div className={`flex`}>
                {payments.map((item) => {
                  return <Image width={54} height={32} src={item.image} />;
                })}
              </div>
            </div>
            <div>
              <p
                className={`font-['lato'] text-[10px] text-[#aaa] uppercase mb-6`}
              >
                segurança
              </p>
              <div className={`flex items-center`}>
                {security.map((item) => {
                  return <Image src={item.image} />;
                })}
              </div>
            </div>
          </div>
          <div className={`flex justify-end`}>
            <div className={`flex flex-col`}>
              <p
                className={`font-['lato'] text-[10px] text-[#aaa] uppercase mb-6`}
              >
                tecnologia
              </p>
              <div className={`flex gap-2 items-center`}>
                {tecnologies
                  ? tecnologies.map((item) => {
                    return <Image src={item.image} />;
                  })
                  : null}
              </div>
            </div>
          </div>
        </div>
        <p
          className={`font-['lato'] text-[10px] font-semibold leading-4 text-[#aaa] mt-9`}
        >
          {disclaimer}
        </p>
      </div>
    </div>
  );
}
