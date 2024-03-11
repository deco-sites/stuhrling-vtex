interface Props {
  content: string;
}

export default function BlogTitle(
  { content }: Props,
) {
  return (
    <div
      class="max-w-[1280px] m-auto flex items-center justify-center font-[lato]"
      dangerouslySetInnerHTML={{ __html: content }}
    >
    </div>
  );
}
