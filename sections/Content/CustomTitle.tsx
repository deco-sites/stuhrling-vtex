import { createElement } from "preact";

interface Props {
  text: string;
  align: "left" | "center" | "right";
  type: "h1" | "h2" | "h3";
  fontSize: number;
  spacing: number;
}

export default function CustomTitle(
  { text, align, type, fontSize, spacing }: Props,
) {
  const element = createElement("h2", {
    style: { fontSize: fontSize },
    className: `max-w-[1280px] py-${spacing} uppercase m-auto text-${align}`,
  }, [text]);
  return element;
}
