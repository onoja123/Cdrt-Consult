import RC_About from "@/components/about-us/rc_about";
// import RC_About2 from "@/components/about-us/rc_about2";
import Header from "@/components/about-us/Header";
import Partners from "@/components/Partners";


export default function Home() {
  return (
    <div className="pt-[20px] flex min-h-screen flex-col items-center justify-between w-full overflow-hidden ">
      <Header/>
      <RC_About />
      {/* <RC_About2 /> */}
      {/* <Partners/> */}
    </div>
  );
}
