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
  
const ChatMessage = ({ message, isUser, isLoading }) => {
    if (isLoading) {
      return (
        <div className="flex w-full gap-3 justify-start animate-fade-in">
          <div className="flex max-w-3xl">
            <Avatar className="h-10 w-10 border-2 border-blue-600/20 bg-zinc-800">
              <AvatarFallback className="bg-blue-600/10 text-blue-400">
                <Bot size={18} />
              </AvatarFallback>
            </Avatar>
            <div className="ml-4 rounded-2xl p-4 bg-zinc-800/60 text-white flex items-center space-x-2 border border-zinc-700/60 backdrop-blur-sm shadow-lg shadow-blue-950/10">
              <div className="flex space-x-3 items-center">
                <div className="flex space-x-1">
                  <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse delay-75"></span>
                  <span className="h-2 w-2 bg-blue-400 rounded-full animate-pulse delay-150"></span>
                </div>
                <span className="text-zinc-300 text-sm">Thinking...</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className={`flex w-full gap-3 ${isUser ? "justify-end" : "justify-start"} animate-fade-in`}>
        <div className={`flex max-w-3xl ${isUser ? "order-2" : "order-1"}`}>
          {!isUser && (
            <Avatar className="h-10 w-10 border-2 border-blue-600/20 bg-zinc-800">
              <AvatarFallback className="bg-blue-600/10 text-blue-400">
                <Bot size={18} />
              </AvatarFallback>
            </Avatar>
          )}
          {isUser && (
            <Avatar className="h-10 w-10 border-2 border-blue-500/30">
              <AvatarFallback className="bg-blue-600 text-white">U</AvatarFallback>
            </Avatar>
          )}
          <div className={`ml-4 rounded-2xl p-4 ${
            isUser 
              ? "bg-blue-600/90 text-white border border-blue-500/50 shadow-lg shadow-blue-900/20" 
              : "bg-zinc-800/60 text-white border border-zinc-700/60 backdrop-blur-sm shadow-lg shadow-blue-950/10"
          }`}>
            {isUser ? (
              message
            ) : (
              <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: formatResponseText(message) }} />
            )}
          </div>
        </div>
      </div>
    );
  };

  export default ChatMessage ;