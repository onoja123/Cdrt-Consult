import Groceries from "@/components/HomePage/Groceries";
import Hero from "@/components/HomePage/Hero";
import JoinOver from "@/components/HomePage/JoinOver";
import LocalStores from "@/components/HomePage/LocalStores";
import Mission from "@/components/HomePage/Mission";
import Testimonies from "@/components/HomePage/Testimonies";
import Vendors from "@/components/HomePage/Vendors";


export default function Home() {
  return (
    <div className=" pt-28 md:pt-40 w-full flex flex-col">
      <Hero/>
      <Groceries/>
      <Vendors/>
      {/* <LocalStores/> */}
      <Mission/>
      <Testimonies/>
      {/* <JoinOver/> */}
    </div>
  );
}
