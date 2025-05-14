import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { 
  Send, 
  Upload, 
  ImageIcon, 
  ExternalLink, 
  PanelLeft, 
  User, 
  Loader, 
  MessageSquare, 
  Menu, 
  Settings,
  BrainCircuit,
  Sparkles,
  Bot
} from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const Navbar = () => {
    return (
      <div className="py-6 px-6 border-b border-zinc-800/60 backdrop-blur-md bg-zinc-950/80 sticky top-0 z-10 flex justify-between items-center">
        <div className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-blue-400" />
          <span className="text-white font-serif text-xl tracking-tight"><SparklesText text="Placemate" /></span>
          
        </div>
        <div className="flex items-center space-x-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="rounded-full h-9 w-9 p-0 bg-zinc-800/80 hover:bg-zinc-700/80 transition-all">
                  <Settings size={16} className="text-zinc-300" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Avatar className="h-9 w-9 border-2 border-zinc-700 hover:border-zinc-600 transition-all cursor-pointer">
            <AvatarFallback className="bg-blue-600 text-white">U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  };

export default Navbar