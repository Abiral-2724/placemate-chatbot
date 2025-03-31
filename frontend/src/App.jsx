import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ChatMessage from "./pages/ChatMessage";
import MessageInput from "./pages/MessageInput";
import InitialView from "./pages/InitialView";
import SuggestedQuestion from "./pages/SuggestedQuestion";
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
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";



const App = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Gemini API Key
  const GEMINI_API_KEY = "AIzaSyA8kcCjdMccNXLSBftuuyR0eUjyckT2Q7A";

  const suggestedQuestions = [
    "List all the companies that visited the college last year?",
    "List all the questions asked by TCS?",
    "What is the highest package of our college?",
    "List the total rounds conducted by each company?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isLoading]);

  // Add subtle animation when component mounts
  useEffect(() => {
    document.body.classList.add('bg-zinc-950');
    
    // Add animation styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!message.trim() || isLoading) return;

    // Add user message to chat history
    const userMessage = message;
    setChatHistory((prev) => [...prev, { content: userMessage, isUser: true }]);
    setMessage("");
    setIsLoading(true);

    try {
      // First initialize vectors if needed
      await axios.get("http://127.0.0.1:5000/initialize-vectors");

      // Then send the question to your backend API
      const backendResponse = await axios.post(
        "http://127.0.0.1:5000/ask-question",
        { query: userMessage },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Add the response to chat history
      setChatHistory((prev) => [...prev, { 
        content: backendResponse.data.answer, 
        isUser: false 
      }]);
    } catch (error) {
      let errorMessage = "Sorry, I couldn't process your request. Please try again later.";
      if (error.response) {
        errorMessage = error.response.data.error || `Server error: ${error.response.status}`;
      }
      setChatHistory((prev) => [...prev, { content: errorMessage, isUser: false }]);
      console.error("Full error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionClick = (question) => {
    setMessage(question);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  };

  return (
    <div className="flex flex-col h-screen bg-zinc-950 text-white">
      {/* Navbar at top */}
      <Navbar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {chatHistory.length === 0 && !isLoading ? (
          /* Initial welcome view */
          <InitialView 
            handleSubmit={handleSubmit}
            message={message}
            setMessage={setMessage}
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            suggestedQuestions={suggestedQuestions}
            handleQuestionClick={handleQuestionClick}
            inputRef={inputRef}
            isLoading={isLoading}
          />
        ) : (
          /* Chat layout with messages and fixed bottom input */
          <div className="flex-1 flex flex-col bg-gradient-to-b from-zinc-950 to-zinc-900">
            <div className="flex-1 overflow-y-auto px-4 md:px-6 py-6 space-y-6 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} message={chat.content} isUser={chat.isUser} />
              ))}
              
              {/* Loading indicator */}
              {isLoading && <ChatMessage isLoading={true} />}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Fixed chat input at bottom - full width */}
            <div className="p-4 border-t border-zinc-800/40 bg-zinc-950/80 backdrop-blur-md">
              <div className="max-w-3xl mx-auto">
                <MessageInput 
                  message={message}
                  setMessage={setMessage}
                  handleSubmit={handleSubmit}
                  isLoading={isLoading}
                  isFocused={isFocused}
                  setIsFocused={setIsFocused}
                  inputRef={inputRef}
                />

                {/* Suggested questions */}
                {!isLoading && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 overflow-x-auto pb-1">
                    {suggestedQuestions.map((question, index) => (
                      <SuggestedQuestion key={index} question={question} onClick={handleQuestionClick} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer fixed at bottom */}
      <Footer />
    </div>
  );
};

export default App;