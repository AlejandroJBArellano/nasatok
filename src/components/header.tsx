import { IonButton, IonButtons, IonModal, IonToolbar } from "@ionic/react";
import { useRef } from "react";
const Header = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  return (
    <div className="text-center z-50 absolute flex justify-between items-center p-4 w-full top-0 bg-white/30 backdrop-blur-lg p-1 shadow-lg">
      <h2 className="text-2xl font-bold">Nasatok</h2>
      <button id="about">About</button>
      <IonModal ref={modal} trigger="about">
        <IonToolbar>
          <h1 className="pl-3 font-bold">About</h1>
          <IonButtons slot="end">
            <IonButton onClick={() => modal.current?.dismiss()}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <p className="px-4 py-2 overflow-scroll">explanation</p>
      </IonModal>
    </div>
  );
};

export default Header;
