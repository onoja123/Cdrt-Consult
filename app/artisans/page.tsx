import Header from "@/components/landing-page/header";
import HowItWorks from "@/components/landing-page/howItWorks";
import Slide from "@/components/landing-page/slider";
import Service from "@/components/landing-page/service";
// import Shopping from "@/components/landing-page/shopping";
import GetStarted from "@/components/landing-page/GetSarted";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <HowItWorks />
    </div>
  )
}

export default page
