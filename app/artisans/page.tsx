import Header from "@/components/landing-page/header";
import HowItWorks from "@/components/landing-page/howItWorks";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <Header />
      <HowItWorks />
    </div>
  )
}

export default page
