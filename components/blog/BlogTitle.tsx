interface Props {
  title: string;
}

export default function BlogTitle(
  { title }: Props,
) {
  return (
    <div class="max-w-[1280px] m-auto flex items-center justify-center">
      <h1 class="font-['lato'] text-[24px]">{title}</h1>
    </div>
  );
}
