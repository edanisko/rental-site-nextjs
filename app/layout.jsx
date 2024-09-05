import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Copy and change this on any page where you want to change the metadata
export const metadata = {
  title: "Property Pulse | Find the Perfect Rental",
  description:
    "Find the perfect rental property with Property Pulse. Search for apartments, houses, and condos for rent in your area.",
  keywords: "rental, property, apartment, house, condo, real estate",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <div>{children}</div>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
