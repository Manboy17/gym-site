import Navbar from "@/components/navbar/Navbar";
import { SelectedPage } from "@/shared/types";
import Home from "@/components/home/Home";
import { useEffect, useState } from "react";
import Benefits from "@/components/benefits/Benefits";
import Classes from "@/components/classes/Classes";
import ContactUs from "@/components/contactUs/ContactUs";
import Footer from "@/components/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [onTopOfPage, setOnTopOfPage] = useState<boolean>(false);

  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY == 0) {
        setOnTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setOnTopOfPage(false);
    };

    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        onTopOfPage={onTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
