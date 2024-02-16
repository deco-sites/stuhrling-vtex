interface Props {
  videoLink: string;
  videoText?: string;
  buttonHref?: string;
}

export default function VideoInfo({ videoLink, videoText, buttonHref }: Props) {
  const getVideoId = (video: string) => {
    console.log(`Vídeo puro`, video),
      console.log(
        `video tratado`,
        video.replace("https://www.youtube.com/watch?v=", ""),
      );
    return video.replace("https://www.youtube.com/watch?v=", "");
  };

  return (
    <div className="max-w-[1280px] m-auto xl:py-6 px-3 flex flex-col gap-6 xl:block">
      <iframe
        className={`m-auto w-full h-auto xl:w-full xl:h-[644px]`}
        width="1149"
        height="644"
        src={`https://www.youtube.com/embed/${getVideoId(videoLink)}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
      <p
        className={`lg:px-[150px] lg:py-[30px] text-[#000] font-['lato']  text-center`}
      >
        {videoText}
      </p>
      <a
        href={buttonHref}
        className={`w-fit flex px-8 h-10 justify-center items-center m-auto border border-black rounded-[3px] uppercase text-[#090909] font-['lato'] `}
      >
        Ver detalhes
      </a>
    </div>
  );
}
