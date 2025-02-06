import { Share } from "@capacitor/share";
import { IonButton, IonButtons, IonModal, IonToolbar } from "@ionic/react";
import { useRef } from "react";
import ShareIcon from "./shareIcon";

export interface IAPOD {
  copyright?: string;
  date: string;
  explanation: string;
  media_type: string;
  title: string;
  url: string;
  hdurl: string;
}

const APOD = ({ explanation, url, title, copyright, hdurl }: IAPOD) => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <main className="h-full snap-always snap-center relative">
      <img
        className="pointer-events-none absolute w-full object-cover h-full -z-10"
        src={hdurl || url}
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
        {copyright && (
          <p className="text-sm text-gray-700 italic">© {copyright}</p>
        )}
        <p className="line-clamp-4" id={title}>
          {explanation}
        </p>
        <IonModal ref={modal} trigger={title}>
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
