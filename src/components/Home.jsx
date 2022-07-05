import MainHeader from "./MainHeader";
import Navigation from "./Navigation";
import MainNewsContent from "./MainNewsContent";
import Footer from "./Footer";
import FeedNewsContent from "./FeedNewsContent";
import AdBlock from "./AdBlock";
import OpeningModal from "./OpeningModal";

//==============================================================================

function Home() {
  return (
    <>
      <OpeningModal />
      <MainHeader />
      <Navigation />
      <AdBlock />
      <MainNewsContent />
      <FeedNewsContent />
      <Footer />
    </>
  );
}

export default Home;
