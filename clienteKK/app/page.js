
import Navbar from "./components/Navbar/page";
import Banner from "./components/Banner/page";
import CheckMenus from "./components/CheckMenus/page";
import CardCompra from "./components/CardCompra/page";
import TextVideo from "./components/TextVideo/page";
import Customer from "./components/Customer/page";
import Footer from "./components/Footer/page";



export default function Home() {
  return (
    <div className="p-10 ">
      <Navbar/>
      <Banner/>
      <CheckMenus/>
      <CardCompra/>
      <TextVideo/>
      <Customer/>
      <Footer/>
    </div>
    
  );
}
