import { Share } from "@capacitor/share";
import ShareIcon from "./shareIcon";

export interface APOD {
  copyright?: string;
  date: string;
  explanation: string;
  media_type: "image" | "video";
  title: string;
  url: string;
}

const APOD = ({ date, explanation, media_type, url, title }: APOD) => {
  return (
    <main className="h-screen overflow-hidden relative">
      <img
        className="pointer-events-none absolute w-full object-cover h-full -z-10"
        src={url}
        alt={title}
      />
      <div className="absolute rounded-t-2xl bg-white/30 backdrop-blur-lg w-full h-1/3 bottom-0 p-4 shadow-lg">
        <div className="flex justify-between gap-2 items-center">
          <h1 className="font-bold text-3xl">{title}.</h1>
          <button
            onClick={async () => {
              await Share.share({
                title: title,
                text: explanation,
                url: url,
                dialogTitle: "Share this article",
              });
            }}
            className="rounded-full bg-white/30 backdrop-blur-lg p-2 w-10 aspect-square h-10 shadow-md"
          >
            <ShareIcon />
          </button>
        </div>
        <p className="line-clamp-5">{explanation}</p>
      </div>
    </main>
  );
};

export default APOD;
