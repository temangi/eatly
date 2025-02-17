import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header.jsx";
import Main from "@/components/Main/Main";
import Restaurant from "@/components/Restaurant/Restaurant.jsx"
import Get50 from "@/components/Get50/Get50";
import Chicken from "@/components/Chicken/Chicken";

export default function Home() {
  return (
   <>
   <Header/>
   <Main/>
   <Menu/>
   <Restaurant/>
   <Chicken/>
   <Get50/>
   <Footer/>
   </>
  );
}
