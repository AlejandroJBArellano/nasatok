import { Share } from "@capacitor/share";
import { IonButton, IonButtons, IonModal, IonToolbar } from "@ionic/react";
import { useRef } from "react";
import ShareIcon from "./shareIcon";

export interface APOD {
  copyright?: string;
  date: string;
  explanation: string;
  media_type: "image" | "video";
  title: string;
  url: string;
}

const APOD = ({ explanation, url, title }: APOD) => {
  const modal = useRef<HTMLIonModalElement>(null);
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
        <p className="line-clamp-5" id="explanation">
          {explanation}
        </p>
        <IonModal ref={modal} trigger="explanation">
          <IonToolbar>
            <h1 className="pl-3 font-bold">{title}</h1>
            <IonButtons slot="end">
              <IonButton onClick={() => modal.current?.dismiss()}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <p className="px-4 py-2 overflow-scroll">{explanation}</p>
        </IonModal>
      </div>
    </main>
  );
};

export default APOD;
