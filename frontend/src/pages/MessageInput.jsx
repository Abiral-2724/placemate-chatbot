
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

const formatResponseText = (text) => {
    if (!text) return "";
    
    // Remove markdown bold syntax (**)
    let formatted = text.replace(/\*\*(.*?)\*\*/g, "<span class='font-semibold'>$1</span>");
    
    // Parse and format code blocks for better display
    const codeBlockRegex = /```([a-zA-Z]*)([\s\S]*?)```/g;
    formatted = formatted.replace(codeBlockRegex, (match, language, code) => {
      return `<div class="mt-3 mb-3 p-4 bg-zinc-900 rounded-lg border border-zinc-700 font-mono text-sm overflow-x-auto"><div class="flex justify-between mb-2"><span class="text-xs text-zinc-500 font-sans">${language || 'code'}</span></div><pre>${code.trim()}</pre></div>`;
    });
    
    // Improve unordered lists
    formatted = formatted.replace(/- (.*?)(?=\n|$)/g, "<li class='ml-4 mb-1 flex items-start'><span class='inline-block h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0'></span><span>$1</span></li>");
    formatted = formatted.replace(/<li.*?<\/li>(?=\n|$)/g, match => `<ul class='my-2'>${match}</ul>`);
    
    // Convert line breaks to HTML breaks for proper display
    formatted = formatted.replace(/\n/g, "<br />");
    
    return formatted;
  };
  


const MessageInput = ({ message, setMessage, handleSubmit, isLoading, isFocused, setIsFocused, inputRef }) => {
    return (
      <form onSubmit={handleSubmit} className="relative">
        <Input
          ref={inputRef}
          placeholder="Ask Placemate a question..."
          className={`px-5 py-7 pr-16 bg-zinc-900/80 border ${
            isFocused 
              ? 'border-blue-500 ring-2 ring-blue-500/20' 
              : 'border-zinc-700/60'
          } text-white rounded-2xl focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
            isFocused ? 'shadow-lg shadow-blue-900/30' : ''
          }`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <Button
          className={`absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center ${
            message.trim() 
              ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30' 
              : 'bg-zinc-700 text-zinc-300'
          } transition-all duration-300`}
          size="icon"
          type="submit"
          disabled={isLoading || !message.trim()}
        >
          {isLoading ? <Loader size={16} className="animate-spin" /> : <Send size={16} />}
        </Button>
      </form>
    );
  };

  export default MessageInput