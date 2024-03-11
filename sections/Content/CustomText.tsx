import type { HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
  text: HTMLWidget;
  containerMaxWidthDesktop: number;
  contentMargin: number;
  contentMobileMargin: number;
  mobilePadding?: number;
}

export default function CustomText({ text, containerMaxWidthDesktop }: Props) {
  return (
    <div
      className={`mx-3 xl:p-0 xl:m-auto xl:max-w-${`[${containerMaxWidthDesktop}px]`}`}
      dangerouslySetInnerHTML={{ __html: text }}
    >
    </div>
  );
}
