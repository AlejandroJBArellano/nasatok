import { IonButton, IonButtons, IonModal, IonToolbar } from "@ionic/react";
import { useRef } from "react";
const Header = ({ onClickRefresh }: { onClickRefresh: () => void }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <div className="text-center z-50 absolute flex justify-between items-center p-4 w-full top-0 bg-white/30 backdrop-blur-lg p-1 shadow-lg">
      <h2 className="text-2xl font-bold">NasaTok</h2>
      <div className="flex flex-col gap-1.5 justify-end items-end">
        <button className="cursor-pointer hover:text-gray-600" id="about">
          About
        </button>
        <button
          className="cursor-pointer hover:text-gray-600"
          onClick={onClickRefresh}
        >
          Refresh
        </button>
      </div>
      <IonModal ref={modal} trigger="about">
        <IonToolbar>
          <h1 className="pl-3 text-xl font-bold">About NasaTok</h1>
          <IonButtons slot="end">
            <IonButton onClick={() => modal.current?.dismiss()}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <div className="px-6 py-4 space-y-2">
          <h2 className="text-xl font-semibold mb-2">Share NasaTok!</h2>
          <p className="text-gray-700 mb-4">
            Discover a TikTok-style interface showcasing NASA's Astronomy
            Picture of the Day (APOD). This app utilizes the NASA API to bring
            you stunning daily images and fascinating photos from space.
          </p>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://bento.me/arellanodev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              ArellanoDev
            </a>
          </p>
          <p>
            Check out the code on{" "}
            <a
              href="https://github.com/AlejandroJBArellano/nasatok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub
            </a>
          </p>
        </div>
      </IonModal>
    </div>
  );
};

export default Header;
