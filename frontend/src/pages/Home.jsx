import React from 'react';
import { BackgroundPaths } from "@/components/ui/background-paths";
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Navbar = () => {
    const navigate=useNavigate() ;
    return (
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-white">
            <img 
              src="https://res.cloudinary.com/dci6nuwrm/image/upload/v1743487819/WhatsApp_Image_2025-03-31_at_22.43.56_wkl0ne.jpg" 
              alt="Placemate Logo" 
              className="h-14"
            />
          </div>
         
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors" onClick={() => navigate('/Placemate-Chatbot')}>
              Get Started
            </button>
          </div>
        </div>
      </nav>
    );
  };

  const Footer = () => {
    return (
      <footer className="bg-black border-t border-gray-800 text-gray-400">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-2">Placemate</h3>
              <p className="text-sm max-w-xs">
              Your Ultimate Guide to JEC Placement
              </p>
            </div>
            
            
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 text-sm text-center">
            &copy; {new Date().getFullYear()} Placemate. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <BackgroundPaths title="Placemate" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;