import Navbar from "../Components/shared/navbar.jsx"; 
import Footer from "../Components/shared/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar /> 
      
      <main>{children}</main>
      
      <Footer />
    </div>
  );
}