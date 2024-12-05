// Remove this line if not used:
// import Image from "next/image";

import HeroSection from "./components/heroSection";
import NewProduct from "./components/NewProduct";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
  <div>
    <HeroSection/>
    <NewProduct/>
    <Testimonial />
  </div>
  );
}
