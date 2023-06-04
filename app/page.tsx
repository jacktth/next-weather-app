import Image from "next/image";
import { FndResponse, Language } from "./type";

async function getFnd(lang: Language): Promise<FndResponse> {
  const res = await fetch(
    `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=${lang}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  // const [artist] = await Promise.all([getData("en")]);
  const fnd = await Promise.resolve(getFnd("tc"));

  return <main>{(await fnd).generalSituation}</main>;
}
