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
import MessageInput from "./MessageInput";
import SuggestedQuestion from "./SuggestedQuestion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const InitialView = ({ handleSubmit, message, setMessage, isFocused, setIsFocused, suggestedQuestions, handleQuestionClick, inputRef, isLoading }) => {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-b from-zinc-950 to-zinc-900">          
        <div className="mb-6 flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-blue-900/30 border border-blue-500/30 flex items-center justify-center mb-4">
            <BrainCircuit size={30} className="text-blue-400" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white mb-2">Welcome to Placemate</h1>
          <p className="text-zinc-400 text-center max-w-md text-sm">Get insights on placements, interview questions, and company trends at JEC, or seek guidance based on past placement records! 🎯</p>
        </div>
        
        {/* Centered input form - larger and centered in screen */}
        <div className="w-full max-w-2xl mb-8 mt-4">
          <MessageInput 
            message={message}
            setMessage={setMessage}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            inputRef={inputRef}
          />
        </div>
        
        {/* Suggested questions */}
        <div className="w-full max-w-2xl">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
             <SuggestedQuestion question="List all the companies that visited the college last year?" onClick={handleQuestionClick} />
             <SuggestedQuestion question="List all the questions asked by TCS? " onClick={handleQuestionClick} />
             <SuggestedQuestion question="What is the highest package of our college?" onClick={handleQuestionClick} />
             <SuggestedQuestion question="List the total rounds conducted by each company?" onClick={handleQuestionClick} />
           </div>
        </div>
      </div>
    );
  };

  
  export default InitialView ;