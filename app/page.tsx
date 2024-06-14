import About from "@/components/About";
import ConnectBanner from "@/components/ConnectBanner";
import Home from "@/components/Home";
import Pricing from "@/components/Pricing";
import VideoSection from "@/components/VideoSection";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <VideoSection />
      <ConnectBanner />
      <Pricing />
    </>
  );
};
export default HomePage;
