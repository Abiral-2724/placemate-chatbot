import { 
    Sparkles, 
    MessageSquare, 
    ExternalLink, 
    Settings 
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Badge } from "@/components/ui/badge";
  import { SparklesText } from "@/components/ui/sparkles-text";
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <div className="border-t border-zinc-800/60 backdrop-blur-md bg-gradient-to-r from-zinc-950 to-zinc-900/95 text-zinc-400">
        {/* Main footer content */}
        {/* <div className="flex justify-center max-w-7xl mx-auto py-8 px-6">
         
            
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center mb-4">
                <div className="bg-blue-900/30 p-2 rounded-md border border-blue-500/30 mr-2">
                  <Sparkles className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-white font-semibold tracking-tight text-lg">
                  <SparklesText text="Placemate" />
                </span>
              </div>
              <p className="text-sm text-zinc-400 mb-6 text-center max-w-md">
                Your intelligent placement companion that provides insights on campus placements, interview questions, and company trends at JEC.
              </p>
            </div>
           
        
        </div> */}
        
        {/* Copyright bar */}
        <div className="border-t border-zinc-800/60 py-5 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-zinc-500 mb-3 md:mb-0">
              © {currentYear} Placemate. All rights reserved. JEC Placement Portal.
            </div>
            <div className="flex space-x-8 text-xs">
              <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors">Privacy</a>
              <a href="/aboutUs" className="text-zinc-500 hover:text-blue-400 transition-colors">AboutUs</a>
              <a href="#" className="text-zinc-500 hover:text-blue-400 transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;