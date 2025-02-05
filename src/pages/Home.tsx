import { IonPage } from "@ionic/react";

const Home = () => {
  return (
    <IonPage>
      <main className="h-screen overflow-hidden relative">
        <img
          className="pointer-events-none absolute w-full object-cover h-full -z-10"
          src="https://apod.nasa.gov/apod/image/2205/PartialEclipse_Andrada_960.jpg"
          alt=""
        />
        <div className="absolute rounded-t-2xl bg-white opacity-50 w-full h-1/3 bottom-0 p-4">
          <h1 className="font-bold text-3xl">
            Partial Solar Eclipse over Argentina.
          </h1>
          <p>
            What's happened to the Sun? Two days ago, parts of South America
            were treated to a partial solar eclipse -- where the Moon blocked
            out part of the Sun. The featured image shows an image of the
            partially eclipsed Sun through clouds as it was setting over
            Patagonia, Argentina. In the tilted image, Earth is toward the
            right. During the eclipse, the Moon moved partly between Earth and
            the Sun. Although a visually impressive sight, the slight dimming of
            surroundings during this partial eclipse was less noticeable than
            dimming created by a thick cloud. In about two weeks, all of South
            America and part of North America will experience a total lunar
            eclipse -- where the Earth moves completely between the Moon and the
            Sun. In about two years, a total solar eclipse will cross North
            America.
          </p>
        </div>
      </main>
    </IonPage>
  );
};

export default Home;
