import { MessageSquare } from "lucide-react";

const SuggestedQuestion = ({ question, onClick }) => {
    return (
      <div 
        className="px-4 py-2.5 bg-zinc-800/60 text-white rounded-full flex items-center gap-2 hover:bg-zinc-700/80 hover:border-zinc-600 transition-all cursor-pointer border border-zinc-700/60 group backdrop-blur-sm"
        onClick={() => onClick(question)}
      >
        <MessageSquare size={14} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-sm truncate">{question}</span>
      </div>
    );
  };

  export default SuggestedQuestion ;