import { IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import APOD, { IAPOD } from "../components/selectedApod";

const fetchAPODApi = async (apiKey: string) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`
  );
  const data = await response.json();
  return data;
};

const Home = () => {
  const apiKey = import.meta.env.VITE_API_KEY as string;

  const [data, setData] = useState<IAPOD[]>([]);

  useEffect(() => {
    fetchAPODApi(apiKey).then((data) => setData(data));
  }, [apiKey]);
  return (
    <IonPage>
      <div className="text-center absolute w-full top-0 bg-white/30 backdrop-blur-lg p-1 shadow-lg">
        <h2 className="text-2xl font-bold">Nasatok</h2>
      </div>
      <div className="snap-y snap-mandatory h-[100dvh] overflow-y-scroll h-screen">
        {data.map((data, index) => (
          <APOD key={index} {...data} />
        ))}
      </div>
    </IonPage>
  );
};

export default Home;
