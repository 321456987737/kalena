import Image from "next/image";
import Herosection from "@/components/home/herosection"
import Menusection from "@/components/home/menu"
import About from "@/components/home/about"
import Gallery from "@/components/home/gallery"
import HeightScaleCarouselAlt from "@/components/home/barista"
import Location from "@/components/home/location"
export default function Home() {
  const slides = [
  {
    id: 1,
    img: "/barista/download(1).webp",
    name: "Alex",
    role: "Head Barista"
  },
  {
    id: 2,
    img: "/barista/download.webp",
    name: "Sara",
    role: "Coffee Expert"
  },
  {
    id: 3,
    img: "/barista/OIP.webp",
    name: "John",
    role: "Latte Artist"
  },
  {
    id: 4,
    img: "/barista/download(1).webp",
    name: "Emma",
    role: "Roasting Specialist"
  }
];
  return (
 <div>
  <Herosection/>
  <Menusection/>
  <About/>
  <Gallery />
  <HeightScaleCarouselAlt slides={slides}/>
    <Location />
 </div>
  );
}
