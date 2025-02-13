import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header.jsx";
import Restaurant from "@/components/Restaurant/Restaurant.jsx"
import Get50 from "@/components/Get50/Get50";
import Dishes from "@/components/Dishes/Dishes";

export default function Home() {
  return (
   <>
   <Header/>
   <Restaurant/>
   <Dishes/>
   <Get50/>
   <Footer/>
   </>
  );
}
