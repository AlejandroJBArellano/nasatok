import { IonPage } from "@ionic/react";
import APOD from "../components/selectedApod";

const dataMock = Array.from({ length: 10 }, (_, i) => ({
  copyright: "\nAixa Andrada\n",
  date: "2022-05-02",
  explanation:
    "What's happened to the Sun? Two days ago, parts of South America were treated to a partial solar eclipse -- where the Moon blocked out part of the Sun.  The featured image shows an image of the partially eclipsed Sun through clouds as it was setting over Patagonia, Argentina. In the tilted image, Earth is toward the right. During the eclipse, the Moon moved partly between Earth and the Sun. Although a visually impressive sight, the slight dimming of surroundings  during this partial eclipse was less noticeable than dimming created by a thick cloud. In about two weeks, all of South America and part of North America will experience a total lunar eclipse -- where the Earth moves completely between the Moon and the Sun.  In about two years, a total solar eclipse will cross North America.",
  hdurl:
    "https://apod.nasa.gov/apod/image/2205/PartialEclipse_Andrada_2048.jpg",
  media_type: "image",
  service_version: "v1",
  title: "Partial Solar Eclipse over Argentina" + i,
  url: "https://apod.nasa.gov/apod/image/2205/PartialEclipse_Andrada_960.jpg",
}));

const Home = () => {
  return (
    <IonPage>
      <div className="text-center absolute w-full top-0 bg-white/30 backdrop-blur-lg p-1 shadow-lg">
        <h2 className="text-2xl font-bold">Nasatok</h2>
      </div>
      <div className="snap-y snap-mandatory h-[100dvh] overflow-y-scroll h-screen">
        {dataMock.map((data, index) => (
          <APOD key={index} {...data} />
        ))}
      </div>
    </IonPage>
  );
};

export default Home;
