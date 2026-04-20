import "../styles/globals.css";
import Navbar from "../Components/shared/navbar";
import Footer from "../Components/shared/Footer";
import View from "../Components/shared/View";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      
      <main className="grow">{children}</main>

      <View />
      <Footer/>
    </div>
  );
}