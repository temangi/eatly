import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import Header from "@/components/Header/Header.jsx";
import Main from "@/components/Main/Main";
import Restaurant from "@/components/Restaurant/Restaurant.jsx"
import Get50 from "@/components/Get50/Get50";
import Dishes from "@/components/Dishes/Dishes.jsx";

export default function Home() {
  return (
   <>
   <Header/>
   <Main/>
   <Menu/>
   <Restaurant/>
   <Dishes/>
   <Get50/>
   <Footer/>
   </>
  );
}
