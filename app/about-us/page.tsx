import RC_About from "@/components/about-us/rc_about";
import Header from "@/components/about-us/Header";
import Partners from "@/components/Partners";


export default function Home() {
  return (
    <div className="pt-[20px] flex min-h-screen flex-col items-center justify-between w-full overflow-hidden ">
      <Header/>
      <RC_About />
      {/* <Partners/> */}
    </div>
  );
}
