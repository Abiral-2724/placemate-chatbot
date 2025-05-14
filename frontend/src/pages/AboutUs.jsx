import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Rocket, Mail, Github, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ButtonColorful } from "@/components/ui/button-colorful";
import bot from "../assets/bot.jpg";  // adjust the path as needed

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src={bot} alt="PlaceMate logo" width={50} height={50} className="mr-2" />
          <span className="text-xl font-bold text-blue-400">PlaceMate</span>
        </div>

        <div className="flex gap-4">
          <ButtonColorful
            onClick={() => navigate("/Placemate-Chatbot")}
            label="Try PlaceMate"
          />
        </div>
      </div>
    </nav>
  );
};

export default function AboutUs() {
  const navigate = useNavigate();
  
  const teamMembers = [
    {
      name: "Abiral jain",
      image: "https://res.cloudinary.com/dci6nuwrm/image/upload/v1747141609/WhatsApp_Image_2024-10-14_at_10.27.54_n9oiby.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/abiral-jain-3b7004256/",
        github: "https://github.com/Abiral-2724",
        email: "jainabiral2004@gmail.com"
      }
    },
    {
      name: "Astha Nayak",
      image: "https://res.cloudinary.com/dci6nuwrm/image/upload/v1747141850/WhatsApp_Image_2025-05-13_at_15.44.35_za6haj.jpg",
      social: {
        linkedin: "#",
        github: "#",
        email: "priya@example.com"
      }
    },
    {
      name: "Ishita Patidar",
      image: "https://res.cloudinary.com/dci6nuwrm/image/upload/v1747226296/WhatsApp_Image_2025-05-13_at_22.50.03_kbc2de.jpg",
      social: {
        linkedin: "#",
        github: "#",
        email: "rohan@example.com"
      }
    },
    {
        name: "Hemangi Chavhan",
        image: "https://res.cloudinary.com/dci6nuwrm/image/upload/v1747226254/WhatsApp_Image_2025-05-13_at_23.30.05_aiclfy.jpg",
        social: {
          linkedin: "#",
          github: "#",
          email: "rohan@example.com"
        }
      }
  ];

  const features = [
    {
      title: "Company Insights",
      description: "Access detailed information about companies visiting JEC, including eligibility criteria and hiring processes."
    },
    {
      title: "Interview Preparation",
      description: "Practice with common interview questions and receive feedback on your responses."
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section with improved spacing for fixed navbar */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Welcome to PlaceMate
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your AI-powered placement companion designed exclusively for JEC students
          </p>
          <ButtonColorful
            onClick={() => navigate("/Placemate-Chatbot")}
            label="Get Started Now"
          />
        </div>
      </div>

      {/* About PlaceMate */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Card className="bg-gray-900 border-gray-800 mb-16 overflow-hidden">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="flex items-center text-blue-400 text-2xl">
              <Target className="mr-3" />
              What is PlaceMate?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-300 leading-relaxed">
              PlaceMate is an intelligent chatbot designed specifically for Jabalpur Engineering College (JEC) students. 
              Our platform provides comprehensive insights into placement opportunities, company details, 
              and interview preparation resources. By leveraging advanced AI technology, PlaceMate empowers 
              students with personalized guidance and real-time information throughout their placement journey.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Mission */}
        <Card className="bg-gray-900 border-gray-800 mb-16 overflow-hidden">
          <CardHeader className="border-b border-gray-800">
            <CardTitle className="flex items-center text-blue-400 text-2xl">
              <Rocket className="mr-3" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-300 leading-relaxed">
              We aim to bridge the information gap between students and placement opportunities. 
              PlaceMate is committed to providing transparent, accurate, and up-to-date placement 
              information, helping students make informed career decisions and maximize their 
              professional potential. By democratizing access to placement resources, we're empowering 
              the next generation of JEC graduates to achieve their career aspirations.
            </p>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-400 flex items-center justify-center">
            <Users className="mr-3" />
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800 hover:border-blue-600 transition-all">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="w-24 h-24 mb-4 ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-blue-800">{member.fallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-blue-400">{member.name}</h3>
                  <br />
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to boost your placement prospects?</h2>
          <p className="text-gray-300 mb-6">Start using PlaceMate today and get personalized guidance for your career journey.</p>
          <ButtonColorful
            onClick={() => navigate("/Placemate-Chatbot")}
            label="Get Started"
          />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} PlaceMate. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for JEC students</p>
        </div>
      </footer>
    </div>
  );
}