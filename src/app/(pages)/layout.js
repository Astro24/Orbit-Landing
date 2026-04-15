import Navbar from "../Components/shared/navbar.jsx"; 
import Footer from "../Components/shared/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 
      
      <main className="grow">{children}</main>
      
      <Footer />
    </div>
  );
}