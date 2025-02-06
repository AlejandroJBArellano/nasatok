import { IonPage } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import APOD, { IAPOD } from "../components/apod";
import Header from "../components/header";

const fetchAPODApi = async (apiKey: string) => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`
  );
  const data = await response.json();
  return data;
};

const Home = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const apiKey = import.meta.env.VITE_API_KEY as string;

  const [data, setData] = useState<IAPOD[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAPODApi(apiKey).then((response) => {
      setData(response.filter((el: IAPOD) => el.media_type === "image"));
      setLoading(false);
    });
  }, [apiKey]);
  return (
    <IonPage>
      <Header />
      {loading ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 border-4 border-t-[4px] border-gray-200 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="snap-y snap-mandatory h-[100dvh] overflow-y-scroll h-screen">
          {data.map((el) => (
            <APOD key={el.date} {...el} />
          ))}
        </div>
      )}
    </IonPage>
  );
};

export default Home;
