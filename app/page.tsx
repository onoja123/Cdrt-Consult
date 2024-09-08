import SkillSet from "@/components/ArtisansTraining/SkillSet";
import Groceries from "@/components/HomePage/Groceries";
import Hero from "@/components/HomePage/Hero";
import JoinOver from "@/components/HomePage/JoinOver";
import Testimonies from "@/components/HomePage/Testimonies";
import Vendors from "@/components/HomePage/Vendors";


export default function Home() {
  return (
    <div className=" pt-28 md:pt-40 w-full flex flex-col">
      <Hero/>
      <Groceries/>
      {/* <Vendors/> */}
      <SkillSet />
      <Testimonies/>
      {/* <JoinOver/> */}
    </div>
  );
}
